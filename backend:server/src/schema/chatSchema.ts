import { TypeOf, object, string } from "zod";



export const chatSchema = {
  body: object({
    chatId: string({ required_error: "Admin id can not be null" }),
  }),
};

export type chatSchemaBody = TypeOf<typeof chatSchema.body>
