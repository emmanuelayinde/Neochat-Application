import { Router } from "express";
import { processRequestBody, processRequestParams } from "zod-express-middleware";
import { groupControllers } from "../controllers";
import { groupMembersSchema, groupSchema, updateGroupSchema, userIdSchema } from "../schema";
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
  "/all",
  isAuthenticated,
  groupControllers.getAllGroups
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
  "/:groupId/by/:userId",
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
  "/:groupId/add-admin/:userId",
  processRequestParams(updateGroupSchema.params),
  isAuthenticated,
  groupControllers.addAdminToGroup
)

groupRoute.post(
  "/:groupId/remove-admin/:userId",
  processRequestParams(updateGroupSchema.params),
  isAuthenticated,
  groupControllers.removeAdminFromGroup
)

groupRoute.post(
  "/:groupId/add-members/by/:userId",
  processRequestBody(groupMembersSchema.body),
  processRequestParams(updateGroupSchema.params),
  isAuthenticated,
  groupControllers.addMembersToGroup
)


groupRoute.post(
  "/:groupId/remove-members/by/:userId",
  processRequestBody(groupMembersSchema.body),
  processRequestParams(updateGroupSchema.params),
  isAuthenticated,
  groupControllers.removeMembersFromGroup
)


export default groupRoute;
