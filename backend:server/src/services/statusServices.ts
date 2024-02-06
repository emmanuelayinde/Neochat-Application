import mongoose from "mongoose";
import { StatusModel } from "../models";
import { Status } from "../models/statusModel";

/**
 * Create new status
 * 
 * @param status 
 * @returns 
 */
export const createNewStatus = async (status: Status) => {
  const newStatus = new StatusModel({ ...status });
  return await newStatus.save();
}

/**
 * Status Id
 * 
 * @param statusId 
 * @returns 
 */
export const deleteExistingStatus = async (statusId: mongoose.Types.ObjectId) => {
  return await StatusModel.findByIdAndDelete(statusId)
};

/**
 * Retrieve Status by ID
 * 
 * @param statusId 
 * @returns 
 */
export const retrieveSingleStatusById = async (statusId: mongoose.Types.ObjectId) => {
  return await StatusModel.findById(statusId)
};

/**
 * Status Id
 * 
 * @param statusId 
 * @returns 
 */
export const retrieveAllUserStatusesByUserId = async (userId: mongoose.Types.ObjectId) => {
  return await StatusModel.find({ author: userId })
};

