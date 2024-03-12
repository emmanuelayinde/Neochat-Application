import { Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import sendResponse from "../utils/sendResponse";
import { IUser, deleteSingleStatusSchemaParam, singleStatusSchemaParam, statusSchemaBody, userStatusSchemaParam } from "../schema";
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
    const { content, author, type, caption, duration } = req.body;
    try {
      const newStatus = await createNewStatus(
        author,
        {
          author: new mongoose.Types.ObjectId(author),
          type,
          content,
          caption,
          duration,
        });

      if (newStatus.error) {
        return sendResponse(res, newStatus.statusCode, newStatus.message)
      }
      return sendResponse(res, newStatus.statusCode, newStatus.message, newStatus.data)

    } catch (error) {
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
      const userStatuses = await retrieveAllUserStatusesByUserId(new mongoose.Types.ObjectId(userId))
      if (userStatuses.error) {
        return sendResponse(res, userStatuses.statusCode, userStatuses.message)
      }
      return sendResponse(res, userStatuses.statusCode, userStatuses.message, userStatuses.data)
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
      const status = await retrieveSingleStatusById(new mongoose.Types.ObjectId(statusId))

      if (status.error) {
        return sendResponse(res, status.statusCode, status.message)
      }
      if (!status.data) {
        return sendResponse(res, status.statusCode, status.message)
      }

      return sendResponse(res, status.statusCode, status.message, status.data)
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
    req: Request<deleteSingleStatusSchemaParam, object, IUser>,
    res: Response,
  ) => {
    const { statusId } = req.params;
    const { _id } = req.body

    try {
      const deletedStatus = await deleteExistingStatus(_id, new mongoose.Types.ObjectId(statusId))
      if (deletedStatus.error) {
        return sendResponse(res, deletedStatus.statusCode, deletedStatus.message)
      }
      return sendResponse(res, deletedStatus.statusCode, deletedStatus.message, deletedStatus.data)
    } catch (error) {
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
