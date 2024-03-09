import { Router } from "express";
import { processRequestBody, processRequestParams } from "zod-express-middleware";
import { statusControllers } from "../controllers";
import { deleteSingleStatusSchema, singleStatusSchema, statusSchema, userStatusSchema } from "../schema";
import { isAuthenticated } from "../middleware";

//
const statusRoute = Router();

statusRoute.post(
  "/create",
  processRequestBody(statusSchema.body),
  isAuthenticated,
  statusControllers.createStatus,
);

statusRoute.get(
  "/:statusId",
  processRequestParams(singleStatusSchema.param),
  isAuthenticated,
  statusControllers.retrieveSingleStatus,
);
statusRoute.get(
  "/user/:userId",
  processRequestParams(userStatusSchema.param),
  isAuthenticated,
  statusControllers.retrieveUserStatuses,
);
statusRoute.delete(
  "/:statusId",
  processRequestParams(deleteSingleStatusSchema.param),
  isAuthenticated,
  statusControllers.deleteStatus,
);


export default statusRoute;
