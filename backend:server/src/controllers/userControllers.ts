import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { fetchCurrentUserProfile, fetchUserProfile, getAllUsers } from "../services";
import { IUser } from "../schema";

class userControllers {


  /**
 *
 * @param req
 * @param res
 * @returns
 */
  static fetchAllUsers = async (
    req: Request<object, object, object>,
    res: Response
  ) => {
    try {

      const allUsersResponse = await getAllUsers();
      return sendResponse(
        res,
        httpStatus.OK,
        'All users fetchd',
        allUsersResponse!
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
  static fetchMyProfileData = async (
    req: Request<object, object, IUser>,
    res: Response
  ) => {
    const { _id } = req.body;
    try {

      const userResponse = await fetchCurrentUserProfile(_id);

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
