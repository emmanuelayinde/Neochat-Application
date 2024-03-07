import mongoose from "mongoose";
import { StatusModel, UserModel } from "../models";
import { Status } from "../models/statusModel";
import { IServiceProp, IServicePropWithoutId } from "../schema";
import httpStatus from "http-status";

/**
 * Create new status
 * 
 * @param userId
 * @param status 
 * @returns 
 */
export const createNewStatus = async (userId: string, status: Status): Promise<IServicePropWithoutId<Status>> => {
  try {
    const user = await UserModel.findById(userId)
    if (!user) {
      return {
        error: true,
        message: 'Status is being created by ghost user',
        statusCode: httpStatus.BAD_REQUEST
      }
    }
    const newStatus = await new StatusModel({ ...status }).save()
    user.statuses?.push(newStatus.id)
    console.log({ newStatus }, newStatus.id)
    return {
      error: false,
      message: 'Status successfully posted',
      statusCode: httpStatus.CREATED,
      data: newStatus
    }
  } catch (error) {
    return {
      error: true,
      message: 'Something went wrong',
      statusCode: httpStatus.INTERNAL_SERVER_ERROR
    }
  }
}

/**
 * Deleted Status by Id
 * 
 * @param userId 
 * @param statusId 
 * @returns 
 */
export const deleteExistingStatus = async (userId: string, statusId: mongoose.Types.ObjectId): Promise<IServiceProp<object>> => {
  try {
    const user = await UserModel.findById(userId)

    if (!user) {
      return {
        error: true,
        message: 'No user authorizing the action',
        statusCode: httpStatus.BAD_REQUEST
      }
    }

    const deletedStatus = await StatusModel.findByIdAndDelete(statusId)
    const newUserStatuses = user?.statuses?.filter(status => status.id !== deletedStatus?.id)
    user.statuses = newUserStatuses
    user.save()

    return {
      error: false,
      message: 'Status deleted',
      statusCode: httpStatus.OK
    }
  } catch (error) {
    return {
      error: true,
      message: 'Something went wrong',
      statusCode: httpStatus.INTERNAL_SERVER_ERROR
    }
  }
};

/**
 * Retrieve Status by ID
 * 
 * @param statusId 
 * @returns 
 */
export const retrieveSingleStatusById = async (statusId: mongoose.Types.ObjectId): Promise<IServicePropWithoutId<Status | null>> => {
  try {

    const status = await StatusModel.findById(statusId, { isDeleted: false })
    return {
      error: false,
      message: 'Status retrieved',
      statusCode: httpStatus.OK,
      data: status
    }
  } catch (error) {
    return {
      error: true,
      message: 'Something went wrong',
      statusCode: httpStatus.INTERNAL_SERVER_ERROR
    }
  }
};

/**
 * Retrieve user statuses
 * 
 * @param userId 
 * @returns 
 */
export const retrieveAllUserStatusesByUserId = async (userId: mongoose.Types.ObjectId): Promise<IServicePropWithoutId<Status[]>> => {
  try {
    const userStatuses = await StatusModel.find({
      author: userId,
      isDeleted: false
    })
    console.log({ userStatuses })
    return {
      error: false,
      message: 'User statuses retrieved',
      statusCode: httpStatus.OK,
      data: userStatuses
    }

  } catch (error) {
    return {
      error: true,
      message: 'Something went wrong',
      statusCode: httpStatus.INTERNAL_SERVER_ERROR
    }
  }
};