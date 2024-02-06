import { Router } from "express";
import { userControllers } from "../controllers";
import { processRequestParams } from "zod-express-middleware";
import { fetchProfileSchema } from "../schema";
import { isAuthenticated } from "../middleware";

//
const userRoutes = Router();

userRoutes.get(
  "/current",
  isAuthenticated,
  userControllers.fetchMyProfileData
);

userRoutes.get(
  "/profile/:id",
  processRequestParams(fetchProfileSchema.params),
  isAuthenticated,
  userControllers.fetchUserData
);

//
export default userRoutes;
