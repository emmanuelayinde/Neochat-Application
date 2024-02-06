import mongoose from "mongoose";
import { StarredMessageModel } from "../models";
import { StarredMessage } from "../models/starredMessageModel";

/**
 * Star new message
 * 
 * @param status 
 * @returns 
 */
export const starNewMessage = async (starMessage: StarredMessage) => {
  const newStarMeesage = new StarredMessageModel({ ...starMessage });
  return await newStarMeesage.save()
}


/**
 * Delete starred message
 * 
 * @param starredMessageId 
 * @returns 
 */
export const deleteExistingStarredMessage = async (starredMessageId: mongoose.Types.ObjectId) => {
  return await StarredMessageModel.findByIdAndDelete(starredMessageId)
};

/**
 * Retrieve starred message by user
 * 
 * @param  
 * @returns 
 */
export const retrieveAllStarredMessagesByUserId = async (userId: mongoose.Types.ObjectId) => {
  return await StarredMessageModel.find({ user: userId })
};