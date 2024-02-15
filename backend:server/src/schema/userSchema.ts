import { TypeOf, object, string } from "zod";

export const fetchProfileSchema = {
  params: object({
    id: string({
      required_error: "User id is required",
    }),
  }),
};


export const userIdSchema = {
  params: object({
    userId: string({
      required_error: "User id is required",
    }),
  }),
};


export type fetchProfileParamsType = TypeOf<typeof fetchProfileSchema.params>;
export type userIdParams = TypeOf<typeof userIdSchema.params>;