import httpStatus from "http-status";
import { UserModel } from "../models";
import { User } from "../models/userModel";
import { IServiceProp } from "../schema";
import { loginUserBodyParams } from "../schema/authSchema";


/**
 * Register new user to db
 *
 * @param user : registerUserBodyParams
 * @returns userSchema
 */
export const registerNewUser = async (
  user: Omit<Omit<User, "comparePassword">, "compareToken">
) => {
  return await UserModel.create(user);
};

/**
 *
 * @param userCredential : loginUserBodyParams
 * @returns userSchema
 */
export const loginUser = async (
  userCredential: loginUserBodyParams
): Promise<IServiceProp<User>> => {
  try {
    const existingUser = await UserModel.findOne({
      $or: [
        { email: userCredential.emailOrUsername },
        { username: userCredential.emailOrUsername },
      ],
    })

    if (!existingUser) {
      return {
        error: true,
        message: "No user record found!",
        statusCode: httpStatus.NOT_FOUND,
      };
    }
    const isPasswordValid = await existingUser.comparePassword(
      userCredential.password
    );

    if (!isPasswordValid) {
      return {
        error: true,
        message: "Incorrect password!",
        statusCode: httpStatus.BAD_REQUEST,
      };
    }

    return {
      error: false,
      message: "User successfully login!",
      statusCode: httpStatus.OK,
      data: existingUser
    };
  } catch (error) {
    console.log({ error });

    return {
      error: true,
      message: "Something went wrong!",
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    };
  }
};
