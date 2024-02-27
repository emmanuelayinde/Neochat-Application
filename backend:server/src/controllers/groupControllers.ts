import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../utils/sendResponse";
import { IUser, groupLinkSchemaParam, groupMembersSchemaBody, groupSchemaBody, groupSchemaParam, updateGroupSchemaBody, updateGroupSchemaParams, userIdParams } from "../schema";
import { addAdminToGroup, addMembersToGroup, createNewGroup, deleteGroup, fetchAllGroups, fetchCompleteGroupData, fetchGroupMiniInfo, fetchGroupsUserBelongTo, getCommonGroupBetweenTwoUsers, joinGroupWithGroupLink, removeAdminFromGroup, removeMembersFromGroup, updateGroupInfo } from "../services";



class groupControllers {

  /**
   * Create new group
   *
   * @param req
   * @param res
   */
  static createGroup = async (
    req: Request<userIdParams, object, groupSchemaBody>,
    res: Response,
  ) => {
    const { userId } = req.params
    try {
      const newGroupResponse = await createNewGroup(userId, { ...req.body });

      if (newGroupResponse.error) {
        return sendResponse(res, newGroupResponse.statusCode, newGroupResponse.message, newGroupResponse.data, newGroupResponse.error)
      }
      return sendResponse(res, newGroupResponse.statusCode, newGroupResponse.message, newGroupResponse.data);
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  }




  /**
  * Fetch group profile
  * 
  * @param req
  * @param res
  */
  static getAllGroups = async (
    req: Request<object, object, object>,
    res: Response,
  ) => {

    try {

      const allGroups = await fetchAllGroups()

      return sendResponse(
        res,
        httpStatus.OK,
        "Successfully retrieved all groups",
        allGroups!
      )

    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };



  /**
  * Fetch group profile
  * 
  * @param req
  * @param res
  */
  static readGroupProfile = async (
    req: Request<groupLinkSchemaParam, object, object>,
    res: Response,
  ) => {
    const { groupLink } = req.params;

    try {
      const groupProfileResponse = await fetchGroupMiniInfo(groupLink)

      if (groupProfileResponse.error) {
        return sendResponse(
          res,
          groupProfileResponse.statusCode,
          groupProfileResponse.message,
          {},
          groupProfileResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        "Successfully retrieved group profile",
        groupProfileResponse.data)
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };


  /**
  * Join New Group
  * 
  * @param req
  * @param res
  */
  static joinGroup = async (
    req: Request<groupLinkSchemaParam, object, IUser>,
    res: Response,
  ) => {
    const { groupLink } = req.params;
    const { _id } = req.body

    try {
      const joinGroupResponse = await joinGroupWithGroupLink(groupLink, _id)

      if (joinGroupResponse.error) {
        return sendResponse(
          res,
          joinGroupResponse.statusCode,
          joinGroupResponse.message,
          {},
          joinGroupResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        joinGroupResponse.message,
        joinGroupResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };


  /**
  * Get all user groups
  * 
  * @param req
  * @param res
  */
  static getUserGroups = async (
    req: Request<object, object, IUser>,
    res: Response,
  ) => {
    const { _id } = req.body

    try {
      const userGroups = await fetchGroupsUserBelongTo(_id)

      if (userGroups.error) {
        return sendResponse(
          res,
          userGroups.statusCode,
          userGroups.message,
          {},
          userGroups.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        userGroups.message,
        userGroups.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };


  /**
  * Get all user groups
  * 
  * @param req
  * @param res
  */
  static getGroupInCommonBetweenTwoUser = async (
    req: Request<userIdParams, object, IUser>,
    res: Response,
  ) => {
    const { _id } = req.body
    const { userId } = req.params

    try {
      const commonGroupsResponse = await getCommonGroupBetweenTwoUsers(_id, userId)

      if (commonGroupsResponse.error) {
        return sendResponse(
          res,
          commonGroupsResponse.statusCode,
          commonGroupsResponse.message,
          {},
          commonGroupsResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        commonGroupsResponse.message,
        commonGroupsResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };

  /**
  * Fetch group profile
  * 
  * @param req
  * @param res
  */
  static readGroupData = async (
    req: Request<groupSchemaParam, object, object>,
    res: Response,
  ) => {
    const { groupId } = req.params;

    try {
      const groupProfileResponse = await fetchCompleteGroupData(groupId)

      if (groupProfileResponse.error) {
        return sendResponse(
          res,
          groupProfileResponse.statusCode,
          groupProfileResponse.message,
          {},
          groupProfileResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        "Successfully retrieved group profile",
        groupProfileResponse.data)
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };




  /**
  * Fetch group profile
  * 
  * @param req
  * @param res
  */
  static updateGroupProfile = async (
    req: Request<updateGroupSchemaParams, object, updateGroupSchemaBody>,
    res: Response,
  ) => {
    const { groupId, userId } = req.params
    const { avatar, groupDescription, groupName, limit, onlyAdminCanEditGroup, onlyAdminCanMessage } = req.body

    try {
      const groupProfileResponse = await updateGroupInfo(groupId, userId,
        {
          avatar,
          limit,
          onlyAdminCanEditGroup,
          onlyAdminCanMessage,
          description: groupDescription,
          name: groupName
        })

      if (groupProfileResponse.error) {
        return sendResponse(
          res,
          groupProfileResponse.statusCode,
          groupProfileResponse.message,
          {},
          groupProfileResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        groupProfileResponse.message,
        groupProfileResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };





  /**
  * Fetch
  *
  * @param req
  * @param res
  */
  static deleteGroup = async (
    req: Request<groupSchemaParam, object, IUser>,
    res: Response,
  ) => {
    const { groupId } = req.params;
    const { _id } = req.body

    try {
      const groupResponse = await deleteGroup(_id, groupId)

      if (groupResponse.error) {
        return sendResponse(
          res,
          groupResponse.statusCode,
          groupResponse.message,
          {},
          groupResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        groupResponse.message,
        groupResponse.data
      )


    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  };



  /**
   * Add admin to group
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static addAdminToGroup = async (req: Request<updateGroupSchemaParams, object, IUser>, res: Response) => {
    try {
      const { _id } = req.body
      const { groupId, userId } = req.params
      const newAdminResponse = await addAdminToGroup(_id, userId, groupId)

      if (newAdminResponse.error) {
        return sendResponse(
          res,
          newAdminResponse.statusCode,
          newAdminResponse.message,
          {},
          newAdminResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        newAdminResponse.message,
        newAdminResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  }

  /**
   * Remove admin from group
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static removeAdminFromGroup = async (req: Request<updateGroupSchemaParams, object, IUser>, res: Response) => {
    try {
      const { _id } = req.body
      const { groupId, userId } = req.params
      const newAdminResponse = await removeAdminFromGroup(_id, userId, groupId)

      if (newAdminResponse.error) {
        return sendResponse(
          res,
          newAdminResponse.statusCode,
          newAdminResponse.message,
          {},
          newAdminResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        newAdminResponse.message,
        newAdminResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  }


  /**
   * Add Members to particular group
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static addMembersToGroup = async (req: Request<updateGroupSchemaParams, object, groupMembersSchemaBody>, res: Response) => {
    try {
      const { members } = req.body
      const { groupId, userId } = req.params
      const newAdminResponse = await addMembersToGroup(groupId, userId, members)

      if (newAdminResponse.error) {
        return sendResponse(
          res,
          newAdminResponse.statusCode,
          newAdminResponse.message,
          {},
          newAdminResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        newAdminResponse.message,
        newAdminResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  }

  /**
   * Remove members from particular group
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static removeMembersFromGroup = async (req: Request<updateGroupSchemaParams, object, groupMembersSchemaBody>, res: Response) => {
    try {
      const { members } = req.body
      const { groupId, userId } = req.params
      const newAdminResponse = await removeMembersFromGroup(groupId, userId, members)

      if (newAdminResponse.error) {
        return sendResponse(
          res,
          newAdminResponse.statusCode,
          newAdminResponse.message,
          {},
          newAdminResponse.error)
      }
      return sendResponse(
        res,
        httpStatus.OK,
        newAdminResponse.message,
        newAdminResponse.data
      )
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true,
      );
    }
  }

}

export default groupControllers;
