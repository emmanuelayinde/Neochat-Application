import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { fetchCurrentUserProfile, fetchUserProfile } from "../services";
import { IUser } from "../schema";

class userControllers {

  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static fetchMyProfileData = async (
    req: Request<object, object, { user: IUser }>,
    res: Response
  ) => {
    const { user } = req.body;
    try {
  
      const userResponse = await fetchCurrentUserProfile(user._id);

      if (userResponse?.error) {
        return sendResponse(
          res,
          userResponse.statusCode,
          userResponse.message,
          {},
          userResponse.error
        );
      }

      if (!userResponse.data) {
        return sendResponse(
          res,
          userResponse.statusCode,
          userResponse.message,
          {},
          userResponse.error
        );
      }

      Object.assign(userResponse.data, {
        password: undefined,
        resetToken: undefined,
        resetTokenTTL: undefined,
        __v: undefined,
      });

      return sendResponse(
        res,
        userResponse.statusCode,
        userResponse.message,
        userResponse.data
      );
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true
      );
    }
  };

  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static fetchUserData = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    const { id } = req.params;
    try {
      const userResponse = await fetchUserProfile(id);

      if (userResponse?.error) {
        return sendResponse(
          res,
          userResponse.statusCode,
          userResponse.message,
          {},
          userResponse.error
        );
      }

      Object.assign(userResponse.data || {}, {
        password: undefined,
        resetToken: undefined,
        resetTokenTTL: undefined,
        __v: undefined,
      });

      return sendResponse(
        res,
        userResponse.statusCode,
        userResponse.message,
        userResponse.data
      );
    } catch (error) {
      console.log({ error });
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong",
        {},
        true
      );
    }
  };
}

export default userControllers;
