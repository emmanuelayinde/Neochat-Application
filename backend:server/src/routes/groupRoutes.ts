import { Router } from "express";
import { processRequestBody, processRequestParams } from "zod-express-middleware";
import { groupControllers } from "../controllers";
import { groupAdminSchema, groupMembersSchema, groupSchema, updateGroupSchema, userIdSchema } from "../schema";
import { isAuthenticated } from "../middleware";

//
const groupRoute = Router();

groupRoute.post(
  "/create/by/:userId",
  processRequestBody(groupSchema.body),
  processRequestParams(userIdSchema.params),
  isAuthenticated,
  groupControllers.createGroup
)

groupRoute.post(
  "/:groupLink/join",
  processRequestParams(groupSchema.link),
  isAuthenticated,
  groupControllers.joinGroup
)


groupRoute.get(
  "/",
  isAuthenticated,
  groupControllers.getUserGroups
)

groupRoute.get(
  "/common/user/:userId",
  isAuthenticated,
  groupControllers.getGroupInCommonBetweenTwoUser
)

groupRoute.get(
  "/:groupLink",
  processRequestParams(groupSchema.link),
  isAuthenticated,
  groupControllers.readGroupProfile
)

groupRoute.get(
  "/:groupId/info",
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.readGroupData
)

groupRoute.put(
  "/:groupId",
  processRequestBody(updateGroupSchema.body),
  isAuthenticated,
  groupControllers.updateGroupProfile
)


groupRoute.delete(
  "/:groupId",
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.deleteGroup
)


groupRoute.post(
  "/:groupId/add-admin",
  processRequestBody(groupAdminSchema.body),
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.addAdminToGroup
)


groupRoute.post(
  "/:groupId/remove-admin/:",
  processRequestBody(groupAdminSchema.body),
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.removeAdminFromGroup
)

groupRoute.post(
  "/:groupId/add-members",
  processRequestBody(groupMembersSchema.body),
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.addMembersToGroup
)


groupRoute.post(
  "/:groupId/remove-members",
  processRequestBody(groupMembersSchema.body),
  processRequestParams(groupSchema.param),
  isAuthenticated,
  groupControllers.removeMembersFromGroup
)


export default groupRoute;
