import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import {
  forgotPasswordBodyParams,
  loginUserBodyParams,
  registerUserBodyParams,
  resetPasswordBodyParams,
  resetPasswordQueryParams,
} from "../schema/authSchema";
import { loginUser, registerNewUser } from "../services/authServices";
import { signJWT } from "../utils/jwt";
import { extendTime, generateOTP } from "../utils";
import { sendEmail } from "../services/emailServices";
import { omit, selectFields } from "../utils/helpers";
import { UserModel } from "../models";

class authControllers {
  /**
   * Register new user
   *
   * @param req
   * @param res
   */
  static registerUser = async (
    req: Request<object, object, registerUserBodyParams>,
    res: Response
  ) => {
    const { name, email, password } = req.body;

    try {
      const newUser = await registerNewUser({
        name,
        username: email.split("@")[0],
        usernameUpdatedAt: new Date(),
        email,
        password,
        passwordUpdatedAt: new Date(),
      });


      const _id = newUser._id.toString()
      const token = signJWT({ _id });

      res.cookie("token", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        domain: "*",
        // domain: config.BASE_URL,
        // path: "/",
        // sameSite: "strict",
      });

      // const data = omit(newUser, ["__v", "password"]);

      // const newUserData = omit(newUser, [
      //   "password",
      //   "resetToken",
      //   "resetTokenTTL",
      //   "__v",
      // ]);

      return sendResponse(
        res,
        httpStatus.CREATED,
        "User successfully created",
        selectFields(newUser, ['_id', 'avatar', 'email', 'name', 'username'])
      );
    } catch (error) {
      //   if (error.code === 11000) {
      //     return sendResponse(res, httpStatus.CONFLICT, "User already exist");
      //   }
      return sendResponse(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Error creating user: " + error
      );
    }
  };

  /**
   * Login user to Account
   *
   * @param req
   * @param res
   */
  static loginUser = async (
    req: Request<object, object, loginUserBodyParams>,
    res: Response
  ) => {
    try {
      // Sign in User Function
      const response = await loginUser({ ...req.body });

      // Check if user exists
      if (response.error || !response.data) {
        return sendResponse(
          res,
          response.statusCode,
          response.message,
          {},
          response.error
        );
      }

      const _id = response.data?._id.toString()
      const token = signJWT({ _id });

      res.cookie("token", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        domain: "*",
        // domain: config.BASE_URL,
        // path: "/",
        // sameSite: "strict",
      });

      return sendResponse(
        res,
        httpStatus.OK,
        "Successfully login",
        selectFields(response.data, ['_id', 'avatar', 'email', 'name', 'username'])
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
  static forgotPassword = async (
    req: Request<object, object, forgotPasswordBodyParams>,
    res: Response
  ) => {
    const { email } = req.body;
    try {
      const newToken = await generateOTP();

      const user = await UserModel.findOne({ email });

      if (!user) {
        return sendResponse(
          res,
          httpStatus.NOT_FOUND,
          "No user record with the email found!",
          {},
          true
        );
      }

      user.resetToken = newToken;
      user.resetTokenTTL = extendTime(10, "minutes");
      const newUser = await user.save();

      console.log({ newUser });
      // Send Reset token to user
      await sendEmail(
        email,
        {
          token: newToken,
          name: user?.name || user?.email.split("@")[0],
          title: "Password Reset Token",
        },
        "forgotpassword",
        "Password Reset Token"
      );

      return sendResponse(
        res,
        httpStatus.OK,
        "Forgot Password instructions has been sent to your email"
      );
    } catch (error) {
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
  static resetPassword = async (
    req: Request<
      object,
      object,
      resetPasswordBodyParams,
      resetPasswordQueryParams
    >,
    res: Response
  ) => {
    const { email, confirmPassword, password } = req.body;
    const { token } = req.query;
    try {
      if (password !== confirmPassword) {
        return sendResponse(
          res,
          httpStatus.BAD_REQUEST,
          "Password and confirm password must match.",
          {},
          true
        );
      }

      const user = await UserModel.findOne({ email });

      if (!user) {
        return sendResponse(
          res,
          httpStatus.NOT_FOUND,
          "No user record with the email found!",
          {},
          true
        );
      }

      if (!user.resetToken || !user.resetTokenTTL || !token) {
        return sendResponse(
          res,
          httpStatus.BAD_REQUEST,
          "No reset token found!",
          {},
          true
        );
      }

      if (!(await user.compareToken(token))) {
        return sendResponse(
          res,
          httpStatus.BAD_REQUEST,
          "Invalid reset token supplied!",
          {},
          true
        );
      }

      if (user.resetTokenTTL < new Date()) {
        return sendResponse(
          res,
          httpStatus.BAD_REQUEST,
          "Reset token expired, try!",
          {},
          true
        );
      }

      user.resetToken = undefined;
      user.resetTokenTTL = undefined;
      user.password = password;
      user.save();

      return sendResponse(res, httpStatus.OK, "Password successfully changed!");
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

export default authControllers;
