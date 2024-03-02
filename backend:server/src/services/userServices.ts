import httpStatus from "http-status";
import { IServiceProp } from "../schema";
import { UserModel } from "../models";
import { User } from "../models/userModel";





/**
 *
 * @param queryKey
 * @returns
 */
export const getAllUsers = async () => {
  try {
    const allUsers = await UserModel.find().select('name email username createdAt isOnline lastSeen socketId');
    return allUsers;
  } catch (error) {
    return null;
  }
};



/**
 *
 * @param queryKey
 * @returns
 */
export const getUser = async (queryKey: string) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ email: queryKey }, { username: queryKey }, { _id: queryKey }],
    });
    return user;
  } catch (error) {
    return null;
  }
};



/**
 * 
 * @returns
 */
export const updateUser = async (userId: string, updateData: Partial<User>) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) return null
    updateData.name && (user!.name = updateData.name)
    updateData.avatar && (user!.avatar = updateData.avatar)
    updateData.isOnline && (user!.isOnline = updateData.isOnline)
    updateData.lastSeen && (user!.lastSeen = updateData.lastSeen)
    updateData.socketId && (user!.socketId = updateData.socketId)

    const updatedUser = await user?.save()
    return updatedUser;
  } catch (error) {
    return null;
  }
};


/**
 * Fetch User Profile
 * @param userId
 * @returns
 */
export const deleteUserProfile = async (userId: string) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        error: true,
        message: "User profile not found!",
        statusCode: httpStatus.NOT_FOUND,
      };
    }

    await user.deleteOne();

    return {
      error: false,
      message: "User profile successfully deleted!",
      statusCode: httpStatus.OK,
    };
  } catch (error) {
    return {
      error: true,
      message: "Something went wrong!",
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 * Fetch User Profile
 * @param userId
 * @returns
 */
export const fetchCurrentUserProfile = async (
  userId: string
): Promise<IServiceProp<User>> => {
  try {
    const user = await UserModel.findById(userId).select('name email username createdAt isOnline lastSeen socketId')

    if (!user) {
      return {
        error: true,
        message: "User profile not found!",
        statusCode: httpStatus.NOT_FOUND,
      };
    }
    return {
      error: false,
      message: "User profile successfully retrieved!",
      statusCode: httpStatus.OK,
      data: user,
    };
  } catch (error) {
    console.log({ error })
    return {
      error: true,
      message: "Something went wrong!",
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    };
  }
};


/**
 * Fetch User Profile
 * @param userId
 * @returns
 */
export const fetchUserProfile = async (
  userId: string
): Promise<IServiceProp<User>> => {
  try {
    const user = await UserModel.findById(userId).select('name email username createdAt isOnline lastSeen socketId')

    if (!user) {
      return {
        error: true,
        message: "User profile not found!",
        statusCode: httpStatus.NOT_FOUND,
      };
    }

    console.log({ user })
    return {
      error: false,
      message: "User profile successfully retrieved!",
      statusCode: httpStatus.OK,
      data: user,
    };
  } catch (error) {
    return {
      error: true,
      message: "Something went wrong!",
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    };
  }
};
