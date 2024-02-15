import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../utils/sendResponse";
import { IUser, groupAdminSchemaBody, groupLinkSchemaParam, groupMembersSchemaBody, groupSchemaBody, groupSchemaParam, updateGroupSchemaBody, userIdParams } from "../schema";
import { addAdminToGroup, addMembersToGroup, deleteGroup, fetchCompleteGroupData, fetchGroupMiniInfo, removeAdminFromGroup, removeMembersFromGroup, updateGroupInfo } from "../services";
import { createNewGroup } from "../services";


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
    req: Request<groupSchemaParam, object, updateGroupSchemaBody>,
    res: Response,
  ) => {
    const { groupId } = req.params

    try {
      const groupProfileResponse = await updateGroupInfo(groupId, { ...req.body })

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
  static addAdminToGroup = async (req: Request<groupSchemaParam, object, { adminId: groupAdminSchemaBody['adminId'], userId: IUser['_id'] }>, res: Response) => {
    try {
      const { userId, adminId } = req.body
      const { groupId } = req.params
      const newAdminResponse = await addAdminToGroup(userId, adminId, groupId)

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
  static removeAdminFromGroup = async (req: Request<groupSchemaParam, object, { adminId: groupAdminSchemaBody['adminId'], userId: IUser['_id'] }>, res: Response) => {
    try {
      const { userId, adminId } = req.body
      const { groupId } = req.params
      const newAdminResponse = await removeAdminFromGroup(userId, adminId, groupId)

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
  static addMembersToGroup = async (req: Request<groupSchemaParam, object, { members: groupMembersSchemaBody['members'], userId: IUser['_id'] }>, res: Response) => {
    try {
      const { userId, members } = req.body
      const { groupId } = req.params
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
  static removeMembersFromGroup = async (req: Request<groupSchemaParam, object, { members: groupMembersSchemaBody['members'], userId: IUser['_id'] }>, res: Response) => {
    try {
      const { userId, members } = req.body
      const { groupId } = req.params
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
