import { TypeOf, array, boolean, number, object, string } from "zod";


export const groupSchema = {
  body: object({
    // owner: string({ required_error: "User id can not be null" }),
    members: array(string()).min(2, 'A minimum of 2 members is required to create a group').max(20, 'Total sum of group members can not exceed 100'),
    groupName: string({ required_error: 'Group name can not be empty' }),
    avatar: string().optional(),
    groupDescription: string().optional(),
  }),
  param: object({
    groupId: string({ required_error: 'Group id can not be omittded' })
  }),
  link: object({
    groupLink: string({ required_error: 'Group link can not be omittded' })
  }),
  // join: object({
  //   groupLink: string({ required_error: 'Group link can not be omittded' }),
  //   userId: string({ required_error: "User id can not be null" }),
  // }),

};

export const groupAdminSchema = {
  body: object({
    adminId: string({ required_error: "Admin id can not be null" }),
  }),
};


export const groupMembersSchema = {
  body: object({
    members: array(string({ required_error: "Members Id is required" })),
  }),
};



export const updateGroupSchema = {
  body: object({
    groupName: string().optional(),
    avatar: string().optional(),
    groupDescription: string().optional(),
    limit: number().optional(),
    onlyAdminCanMessage: boolean().optional(),
    onlyAdminCanEditGroup: boolean().optional()
  }),
};





export type groupSchemaBody = TypeOf<typeof groupSchema.body>;
export type groupSchemaParam = TypeOf<typeof groupSchema.param>;
export type groupLinkSchemaParam = TypeOf<typeof groupSchema.link>
// export type joinGroupSchemaParam = TypeOf<typeof groupSchema.join>
export type updateGroupSchemaBody = TypeOf<typeof updateGroupSchema.body>
export type groupAdminSchemaBody = TypeOf<typeof groupAdminSchema.body>
export type groupMembersSchemaBody = TypeOf<typeof groupMembersSchema.body>
