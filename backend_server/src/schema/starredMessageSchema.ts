import { TypeOf, boolean, object, string } from "zod";


export const starMessageSchema = {
  body: object({
    userId: string({ required_error: "User id can not be null" }),
    messageId: string().optional(),
    isGroup: boolean().optional()
  }),
};

export const retrieveStarMessageSchema = {
  param: object({
    userId: string({ required_error: "User id can not be null" }),
  }),
};

export const deleteStarMessageSchema = {
  param: object({
    messageId: string({ required_error: "Star meesage id can not be null" }),
  }),
};


export type starMessageSchemaBody = TypeOf<typeof starMessageSchema.body>;
export type retrieveStarMessageSchemaParam = TypeOf<typeof retrieveStarMessageSchema.param>
export type deleteStarMessageSchemaParam = TypeOf<typeof deleteStarMessageSchema.param>
