import { Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import sendResponse from "../utils/sendResponse";
import { deleteSingleStatusSchemaParam, deleteStarMessageSchemaParam, retrieveStarMessageSchemaParam, singleStatusSchemaParam, starMessageSchemaBody, statusSchemaBody, userStatusSchemaParam } from "../schema";
import { createNewStatus, deleteExistingStarredMessage, deleteExistingStatus, retrieveAllStarredMessagesByUserId, retrieveAllUserStatusesByUserId, retrieveSingleStatusById, starNewMessage } from "../services";



class starredMessageControllers {
  /**
   * Star New Message
   *
   * @param req
   * @param res
   */
  static createStarMessage = async (
    req: Request<object, object, starMessageSchemaBody>,
    res: Response,
  ) => {
    const { userId, groupMessageId, isGroup, messageId } = req.body;
    try {
      await starNewMessage({
        user: new mongoose.Types.ObjectId(userId),
        message: new mongoose.Types.ObjectId(messageId),
        groupMessage: new mongoose.Types.ObjectId(groupMessageId),
        isGroup,
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

export default starredMessageControllers;
