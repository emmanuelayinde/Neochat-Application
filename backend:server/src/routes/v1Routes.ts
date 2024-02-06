import express from "express";
import authRoutes from "./authRoutes";
import statusRoute from "./statusRoutes";
import userRoutes from "./userRoutes";
import starredMeessageRoute from "./starredMessageRoutes";

const v1Routes = express();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);
v1Routes.use("/status", statusRoute);
v1Routes.use("/message/star", starredMeessageRoute);


export default v1Routes;
