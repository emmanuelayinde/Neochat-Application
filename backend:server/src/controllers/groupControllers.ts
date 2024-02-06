import { Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import sendResponse from "../utils/sendResponse";
import { deleteSingleStatusSchemaParam, deleteStarMessageSchemaParam, groupSchemaBody, retrieveStarMessageSchemaParam, singleStatusSchemaParam, starMessageSchemaBody, statusSchemaBody, userStatusSchemaParam } from "../schema";
import { createNewStatus, deleteExistingStarredMessage, deleteExistingStatus, retrieveAllStarredMessagesByUserId, retrieveAllUserStatusesByUserId, retrieveSingleStatusById, starNewMessage } from "../services";
import { createNewGroup } from "../services/groupServices";



class groupControllers {

  /**
   * Create new group
   *
   * @param req
   * @param res
   */
  static createGroup = async (
    req: Request<object, object, groupSchemaBody>,
    res: Response,
  ) => {

    const { groupName, members, owner, avatar, groupDescription } = req.body;
    try {
      await createNewGroup({
        groupName, members, owner, avatar, groupDescription
      });
      return sendResponse(res, httpStatus.OK, "Successfully starred message");
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
  * Fetch all User Starred Meesage
  *
  * @param req
  * @param res
  */
  static retrievedStarredMessagesByUser = async (
    req: Request<retrieveStarMessageSchemaParam, object, object>,
    res: Response,
  ) => {
    const { userId } = req.params;

    try {
      await retrieveAllStarredMessagesByUserId(new mongoose.Types.ObjectId(userId))

      return sendResponse(res, httpStatus.OK, "Successfully retrieved user starred meesages");
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
  * Delete Starred Message
  *
  * @param req
  * @param res
  */
  static deleteStarredMessage = async (
    req: Request<deleteStarMessageSchemaParam, object, object>,
    res: Response,
  ) => {
    const { messageId } = req.params;

    try {
      await deleteExistingStarredMessage(new mongoose.Types.ObjectId(messageId))

      return sendResponse(res, httpStatus.OK, "Successfully deleted starred message");
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
}

export default groupControllers;
