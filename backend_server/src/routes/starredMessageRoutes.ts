import { Router } from "express";
import { processRequestBody, processRequestParams } from "zod-express-middleware";
import { starredMessageControllers } from "../controllers";
import { deleteStarMessageSchema, retrieveStarMessageSchema, starMessageSchema } from "../schema";
import { isAuthenticated } from "../middleware";


//
const starredMessageRoute = Router();

starredMessageRoute.post(
  "/new",
  processRequestBody(starMessageSchema.body),
  isAuthenticated,
  starredMessageControllers.createStarMessage,
);

starredMessageRoute.get(
  "/user/:userId",
  processRequestParams(retrieveStarMessageSchema.param),
  isAuthenticated,
  starredMessageControllers.retrievedStarredMessagesByUser,
);

starredMessageRoute.delete(
  "/:messageId",
  processRequestParams(deleteStarMessageSchema.param),
  isAuthenticated,
  starredMessageControllers.deleteStarredMessage,
);


export default starredMessageRoute;