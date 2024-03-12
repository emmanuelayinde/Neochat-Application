import express from "express";
import { authRoutes, groupRoutes, chatRoutes, starredMessageRoutes, statusRoutes, userRoutes } from './'

const v1Routes = express();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);
v1Routes.use("/status", statusRoutes);
v1Routes.use("/message/star", starredMessageRoutes);
v1Routes.use("/group", groupRoutes)
v1Routes.use('/chat', chatRoutes)


// Call


export default v1Routes;
