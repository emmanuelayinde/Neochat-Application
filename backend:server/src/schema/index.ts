import mongoose from "mongoose";

// User Schema
export { fetchProfileParamsType, fetchProfileSchema } from "./userSchema";

// Status Schema
export {
  deleteSingleStatusSchema,
  singleStatusSchema,
  singleStatusSchemaParam,
  statusSchema,
  statusSchemaBody,
  userStatusSchema,
  userStatusSchemaParam,
  deleteSingleStatusSchemaParam
} from './statusSchema'


// Starred Message Schema
export {
  deleteStarMessageSchema,
  deleteStarMessageSchemaParam,
  retrieveStarMessageSchema,
  retrieveStarMessageSchemaParam,
  starMessageSchema,
  starMessageSchemaBody
} from './starredMessageSchema'

// Group Schema
export {
  groupSchema,
  groupSchemaBody,
  groupSchemaParam
} from './groupSchema'


//
export interface IUser {
  _id: string;
}

export interface IServiceProp<T> {
  error: boolean;
  message: string;
  statusCode: number;
  data?: T & { _id: mongoose.Types.ObjectId };
}

