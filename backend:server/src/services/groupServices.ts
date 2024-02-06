import httpStatus from "http-status";
import { GroupModel } from "../models";
import { IServiceProp, groupSchemaBody } from "../schema";
import { Group } from "../models/groupModel";
import { generateGroupLink } from "../utils/groupUtils";
import { Ref } from "@typegoose/typegoose";
import { User } from "../models/userModel";




/**
 * Create New Group 
 * 
 * @param newGroupInfo 
 * @returns 
 */
export const createNewGroup = async (newGroupInfo: groupSchemaBody): Promise<IServiceProp<Group>> => {
  try {
    const link = generateGroupLink(newGroupInfo.groupName)

    const newGroupModel = new GroupModel({
      owner: newGroupInfo.owner,
      name: newGroupInfo.groupName,
      description: newGroupInfo.groupDescription ?? undefined,
      avatar: newGroupInfo.avatar ?? undefined,
      admins: [newGroupInfo.owner],
      members: newGroupInfo.members,
      link,
    })

    const newGroup = await newGroupModel.save()

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
 * @param groupId 
 * @returns 
 */
export const fetchGroupMiniInfo = async (groupId: string): Promise<IServiceProp<Group>> => {
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
export const deleteGroup = async (groupId: string): Promise<IServiceProp<{}>> => {
  try {
    const existingGroup = await GroupModel.findById(groupId)

    if (!existingGroup) return {
      error: true,
      message: 'No group with the given id found',
      statusCode: httpStatus.NOT_FOUND,
    }

    return {
      error: false,
      message: 'Group deletedd',
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
export const addAdminToGroup = async (groupId: string, adminId: Ref<User>): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    // User must be a member of the group
    if (!group.members.includes(adminId)) return {
      error: true,
      message: "User is not a member of the group",
      statusCode: httpStatus.BAD_REQUEST
    }


    // User must not be an admin already
    if (group.admins.includes(adminId)) return {
      error: true,
      message: "User is already an admin",
      statusCode: httpStatus.BAD_REQUEST
    }

    group.admins.push(adminId)
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
export const removeAdminToGroup = async (groupId: string, adminId: Ref<User>): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    // User must be an admin already
    if (!group.admins.includes(adminId)) return {
      error: true,
      message: "User is not an admin",
      statusCode: httpStatus.BAD_REQUEST
    }

    const newAdminList = group.admins.filter(admin => admin._id !== adminId)

    group.admins = newAdminList
    await group.save()

    return {
      error: false,
      message: 'Admin removed to group',
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
export const addMembersToGroup = async (groupId: string, membersToAdd: Ref<User>[]): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }

    const filteredMembers = membersToAdd.filter(member => !group.members.includes(member))
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
export const removeMembersToGroup = async (groupId: string, membersToRemove: Ref<User>[]): Promise<IServiceProp<Group>> => {
  try {
    const group = await GroupModel.findById(groupId)

    if (!group) return {
      error: true,
      message: 'No group with the id found',
      statusCode: httpStatus.NOT_FOUND
    }


    const membersToRemoveSet = new Set(membersToRemove);
    const updatedMembers = group.members.filter((member) => !membersToRemoveSet.has(member));


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
