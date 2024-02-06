import { TypeOf, object, string } from "zod";

export const fetchProfileSchema = {
  params: object({
    id: string({
      required_error: "User id is required",
    }),
  }),
};

export type fetchProfileParamsType = TypeOf<typeof fetchProfileSchema.params>;
