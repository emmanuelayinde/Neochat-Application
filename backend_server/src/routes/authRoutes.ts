import { Router } from "express";
import authControllers from "../controllers/authControllers";
// import { upload } from "../utils";
import {
  processRequestBody,
  processRequestQuery,
} from "zod-express-middleware";
import {
  forgotPasswordSchema,
  loginUserSchema,
  resetPasswordSchema,
} from "../schema/authSchema";
import { registerUserSchema } from "../schema/authSchema";

//
const authRoutes = Router();

// upload.single("avatar"),
// validateBodySchema,
authRoutes.post(
  "/register",
  processRequestBody(registerUserSchema.body),
  authControllers.registerUser,
);
authRoutes.post(
  "/login",
  processRequestBody(loginUserSchema.body),
  authControllers.loginUser,
);
authRoutes.put(
  "/forgot-password",
  processRequestBody(forgotPasswordSchema.body),
  authControllers.forgotPassword,
);
authRoutes.put(
  "/reset-password",
  processRequestBody(resetPasswordSchema.body),
  processRequestQuery(resetPasswordSchema.query),
  authControllers.resetPassword,
);

//
export default authRoutes;
