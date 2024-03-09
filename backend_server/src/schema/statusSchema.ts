import { TypeOf, nativeEnum, number, object, string } from "zod";
import { STATUS_TYPE } from "../models";


export const statusSchema = {
  body: object({
    author: string({ required_error: "Author can not be null" }),
    type: nativeEnum(STATUS_TYPE),
    content: string({ required_error: "Content is required" }),
    caption: string().optional(),
    duration: number({ required_error: 'Status duration is required' }),
  }),
};

export const userStatusSchema = {
  param: object({
    userId: string({ required_error: "User id can not be null" }),
  }),
};

export const singleStatusSchema = {
  param: object({
    statusId: string({ required_error: "Status id can not be null" }),
  }),
};

export const deleteSingleStatusSchema = {
  param: object({
    statusId: string({ required_error: "Status id can not be null" }),
  }),
};

export type statusSchemaBody = TypeOf<typeof statusSchema.body>;
export type userStatusSchemaParam = TypeOf<typeof userStatusSchema.param>
export type singleStatusSchemaParam = TypeOf<typeof singleStatusSchema.param>
export type deleteSingleStatusSchemaParam = TypeOf<typeof deleteSingleStatusSchema.param>
