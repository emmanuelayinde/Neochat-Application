import { TypeOf, array, boolean, number, object, string } from "zod";


export const groupSchema = {
  body: object({
    owner: string({ required_error: "User id can not be null" }),
    members: array(string()).min(2, 'A minimum of 2 members is required to create a group').max(20, 'Total sum of group members can not exceed 100'),
    groupName: string({ required_error: 'Group name can not be empty' }),
    avatar: string().optional(),
    groupDescription: string().optional(),
  }),
  param: object({
    groupId: string({ required_error: 'Group id can not be omittded' })
  })
};



export const updateGroupSchema = {
  body: object({
    members: array(string()).optional(),
    groupName: string().optional(),
    avatar: string().optional(),
    groupDescription: string().optional(),
    limit: number().optional(),
    onlyAdminCanMessage: boolean().optional(),
    onlyAdminCanEditGroup: boolean().optional()
  }),
  param: object({
    groupId: string({ required_error: 'Group id can not be omittded' })
  })
};





export type groupSchemaBody = TypeOf<typeof groupSchema.body>;
export type groupSchemaParam = TypeOf<typeof groupSchema.param>;
