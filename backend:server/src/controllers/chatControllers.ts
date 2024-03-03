import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../utils/sendResponse";
import { IUser } from "../schema";
import { getAllUserChats } from "../services";



class chatControllers {

  /**
   *
   *
   * @param req
   * @param res
   */
  static userChats = async (
    req: Request<object, object, IUser>,
    res: Response,
  ) => {
    try {
      const userChats = await getAllUserChats(req.body._id);

      if (userChats.error) {
        return sendResponse(res, userChats.statusCode, userChats.message, userChats.data, userChats.error)
      }
      return sendResponse(res, userChats.statusCode, userChats.message, userChats.data);
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


export default chatControllers;
