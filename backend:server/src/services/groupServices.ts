import httpStatus from "http-status";
import { GroupModel, UserModel } from "../models";
import { IServiceProp, IServicePropWithoutId, groupSchemaBody } from "../schema";
import { Group } from "../models/groupModel";
import { generateGroupLink } from "../utils/groupUtils";
import mongoose from "mongoose";




/**
 * Create New Group 
 * 
 * @param newGroupInfo 
 * @returns 
 */
export const createNewGroup = async (userId: string, newGroupInfo: groupSchemaBody): Promise<IServiceProp<Group>> => {
  try {
    console.log({ userId })
    const link = generateGroupLink(newGroupInfo.groupName)

    const groupMembersSet = new Set<string>([userId, ...newGroupInfo.members]);
    const groupMembers = Array.from(groupMembersSet);


    const newGroupModel = new GroupModel({
      owner: userId,
      name: newGroupInfo.groupName,
      description: newGroupInfo.groupDescription ?? undefined,
      avatar: newGroupInfo.avatar ?? undefined,
      admins: [userId],
      members: groupMembers,
      link,
    })

    console.log({ newGroupModel })
    const newGroup = await newGroupModel.save()
    console.log({ newGroup })

    return {
      error: false,
      message: 'New Group created',
      statusCode: httpStatus.CREATED,
      data: newGroup
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}

/**
 * Fetch Group Mini Info
 * 
 * @param groupLink 
 * @returns 
 */
export const fetchGroupMiniInfo = async (groupLink: string): Promise<IServiceProp<Group>> => {
  try {
    const groupInfo = await GroupModel.findOne({ link: groupLink })
      .select(['_id', 'members', 'avatar', 'name', 'description', 'link', 'limit', 'createdAt'])
      .populate({ path: 'members', select: 'name username avatar', options: { limit: 5 } })

    if (!groupInfo) return {
      error: true,
      message: `No group with the link ${groupLink} found`,
      statusCode: httpStatus.NOT_FOUND
    }

    return {
      error: false,
      message: 'Group info fetched',
      statusCode: httpStatus.OK,
      data: groupInfo
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}

/**
 * Fetch full Group Data
 * 
 * @param newGroupInfo 
 * @returns 
 */
export const fetchCompleteGroupData = async (groupId: string): Promise<IServiceProp<Group>> => {
  try {
    const groupInfo = await GroupModel.findById(groupId)
      .populate({ path: 'members', select: 'name username avatar' })

    if (!groupInfo) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    return {
      error: false,
      message: 'Group info fetched',
      statusCode: httpStatus.OK,
      data: groupInfo
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}


/**
 * Fetch Group that user belongs too
 * 
 * @param userId 
 * @returns 
 */
export const fetchGroupsUserBelongTo = async (userId: string): Promise<IServicePropWithoutId<Group[]>> => {
  try {
    const userGroups = await GroupModel.find({ members: userId })
      .select(['name', 'avatar'])

    if (!userGroups) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    return {
      error: false,
      message: 'User groups fetch',
      statusCode: httpStatus.OK,
      data: userGroups
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}



/**
 * Fetch Common Groups between 2 users
 * 
 * @param userOneId 
 * @param userTwoId 
 * @returns 
 */
export const getCommonGroupBetweenTwoUsers = async (userOneId: string, userTwoId: string): Promise<IServicePropWithoutId<Group[]>> => {
  try {
    const groupsInCommon = await GroupModel.find({ members: { $all: [userOneId, userTwoId] } })
      .select(['name', 'avatar', 'description'])

    if (!groupsInCommon) return {
      error: true,
      message: 'No group in common',
      statusCode: httpStatus.OK
    }

    return {
      error: false,
      message: 'Common groups fetched',
      statusCode: httpStatus.OK,
      data: groupsInCommon
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}


/**
 * Update Group info like name, description, avatar, limit
 * 
 * @param groupData 
 * @returns 
 */
export const updateGroupInfo = async (groupId: string, groupData: Partial<Group>): Promise<IServiceProp<Group>> => {
  try {
    const updateGroup = await GroupModel.findByIdAndUpdate(groupId,
      { ...groupData },
      { new: true, runValidators: true }
    )

    if (!updateGroup) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    return {
      error: false,
      message: 'Group info updated',
      statusCode: httpStatus.OK,
      data: updateGroup
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}

/**
 * Delete Group 
 * 
 * @param groupId 
 * @returns 
 */
export const deleteGroup = async (userId: string, groupId: string): Promise<IServiceProp<object>> => {
  try {
    const existingGroup = await GroupModel.findById(groupId)

    if (!existingGroup) return {
      error: true,
      message: 'No group with the given id found',
      statusCode: httpStatus.NOT_FOUND,
    }

    const isGroupAdmin = existingGroup.admins.some(admin => admin.id === userId)
    if (!isGroupAdmin) {
      return {
        error: true,
        message: 'Only Group Admin can delete group',
        statusCode: httpStatus.UNAUTHORIZED
      }
    }

    existingGroup.deleteOne()

    return {
      error: false,
      message: 'Group deleted',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}


/**
 * Join Group using group link
 * 
 * @param groupLink 
 * @param userId
 * @returns 
 */
export const joinGroupWithGroupLink = async (groupLink: string, userId: string): Promise<IServiceProp<Group[]>> => {
  try {
    const group = await GroupModel.findOne({ link: groupLink })

    if (!group) return {
      error: true,
      message: `No group with the group link ${groupLink} found`,
      statusCode: httpStatus.NOT_FOUND
    }

    if (group.members.includes(new mongoose.Types.ObjectId(userId))) {
      return {
        error: true,
        message: 'You are already a member of the group',
        statusCode: httpStatus.BAD_REQUEST
      }
    }

    group.members.push(new mongoose.Types.ObjectId(userId))
    await group.save()

    return {
      error: false,
      message: 'You have been added to the group',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}




/**
 * Add admin to group
 * 
 * @param groupId 
 * @param adminId 
 * @returns 
 */
export const addAdminToGroup = async (userId: string, adminId: string, groupId: string): Promise<IServiceProp<Group>> => {
  try {

    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.BAD_REQUEST
    }

    if (group.admins.some(admin => admin.id === userId)) {
      return {
        error: true,
        message: 'You are not authorised to perform this operation',
        statusCode: httpStatus.UNAUTHORIZED
      }
    }

    const userExist = await UserModel.findById(adminId)
    if (!userExist) {
      return {
        error: true,
        message: 'User does not exist',
        statusCode: httpStatus.BAD_REQUEST
      }
    }


    // User must be a member of the group
    if (!group.members.some(member => member._id === userExist._id)) return {
      error: true,
      message: "User is not a member of the group",
      statusCode: httpStatus.BAD_REQUEST
    }


    // User must not be an admin already
    if (group.admins.some(admin => admin._id === userExist._id)) return {
      error: true,
      message: "User is already an admin",
      statusCode: httpStatus.BAD_REQUEST
    }


    group.admins.push(userExist)
    await group.save()

    return {
      error: false,
      message: 'Admin added to group',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}


/**
 * Remove admin from admin list
 * 
 * @param groupId 
 * @param adminId 
 * @returns 
 */
export const removeAdminFromGroup = async (userId: string, adminIdToBeRemoved: string, groupId: string): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }


    // User must be an admin already
    if (!group.admins.some(admin => admin.id === userId)) return {
      error: true,
      message: "Only admin can perform this operation",
      statusCode: httpStatus.UNAUTHORIZED
    }

    // User must be an admin already
    if (!group.admins.some(admin => admin.id === adminIdToBeRemoved)) return {
      error: true,
      message: "User is not an admin",
      statusCode: httpStatus.BAD_REQUEST
    }

    const newAdminList = group.admins.filter(admin => admin.id !== adminIdToBeRemoved)

    group.admins = newAdminList
    await group.save()

    return {
      error: false,
      message: 'Admin removed from group',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}



/**
 * Add members to group
 * 
 * @param groupId 
 * @param members 
 * @returns 
 */
export const addMembersToGroup = async (groupId: string, userId: string, membersToAdd: string[]): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }


    if (group.admins.some(admin => admin.id === userId)) {
      return {
        error: true,
        message: "Only admin can perform this operation",
        statusCode: httpStatus.UNAUTHORIZED
      }
    }

    const filteredMembers = membersToAdd
      .map(member => new mongoose.Types.ObjectId(member))
      .filter(member => !group.members.includes(member))

    // new mongoose.Types.ObjectId(member)

    group.members.push(...filteredMembers)
    await group.save()

    return {
      error: false,
      message: filteredMembers.length > 1 ? 'New members added to group' : 'New member added to group',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}


/**
 * Remove members from admin list
 * 
 * @param groupId 
 * @param membersToRemove 
 * @returns 
 */
export const removeMembersFromGroup = async (groupId: string, userId: string, membersToRemove: string[]): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }


    if (group.admins.some(admin => admin.id === userId)) {
      return {
        error: true,
        message: "Only admin can perform this operation",
        statusCode: httpStatus.UNAUTHORIZED
      }
    }

    const updatedMembers = group.members.filter((member) => !membersToRemove.includes(member.id));

    group.members = updatedMembers
    await group.save()

    return {
      error: false,
      message: membersToRemove.length > 1 ? 'Members removed from group' : 'Member removed from group',
      statusCode: httpStatus.OK,
    }
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: httpStatus["500_MESSAGE"],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    }
  }
}
