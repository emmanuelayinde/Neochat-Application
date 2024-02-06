import { Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import sendResponse from "../utils/sendResponse";
import { deleteSingleStatusSchemaParam, singleStatusSchemaParam, statusSchemaBody, userStatusSchemaParam } from "../schema";
import { createNewStatus, deleteExistingStatus, retrieveAllUserStatusesByUserId, retrieveSingleStatusById } from "../services";



class statusControllers {
  /**
   * Create User Status/Story
   *
   * @param req
   * @param res
   */
  static createStatus = async (
    req: Request<object, object, statusSchemaBody>,
    res: Response,
  ) => {
    const { content, authorId, type, caption, duration } = req.body;
    try {
      await createNewStatus({
        author: new mongoose.Types.ObjectId(authorId),
        type,
        content,
        caption,
        duration,
      });
      return sendResponse(res, httpStatus.OK, "Successfully posted status");
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
  * Fetche all User Statuses
  *
  * @param req
  * @param res
  */
  static retrieveUserStatuses = async (
    req: Request<userStatusSchemaParam, object, object>,
    res: Response,
  ) => {
    const { userId } = req.params;

    try {
      await retrieveAllUserStatusesByUserId(new mongoose.Types.ObjectId(userId))

      return sendResponse(res, httpStatus.OK, "Successfully retrieved user statuses");
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
* Fetch single Status by Id
*
* @param req
* @param res
*/
  static retrieveSingleStatus = async (
    req: Request<singleStatusSchemaParam, object, object>,
    res: Response,
  ) => {
    const { statusId } = req.params;

    try {
      await retrieveSingleStatusById(new mongoose.Types.ObjectId(statusId))

      return sendResponse(res, httpStatus.OK, "Successfully retrieved status");
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
  * Delete Status
  *
  * @param req
  * @param res
  */
  static deleteStatus = async (
    req: Request<deleteSingleStatusSchemaParam, object, object>,
    res: Response,
  ) => {
    const { statusId } = req.params;

    try {
      await deleteExistingStatus(new mongoose.Types.ObjectId(statusId))

      return sendResponse(res, httpStatus.OK, "Successfully deleted status");
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

export default statusControllers;
