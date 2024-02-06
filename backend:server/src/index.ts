//
import express, { Request, Response } from "express";
import config from "./config";
import v1Routes from "./routes/v1Routes";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDbase } from "./utils/dbConnection";
import { createServer } from "http";
import session from "express-session";
import { Server } from "socket.io";
import { initSocket } from "./socket";
import morgan from "morgan";
//
export const app = express();
export const httpServer = createServer(app);
export const io = new Server(httpServer);

//
app.use(cookieParser());
app.use(
  session({
    secret: config.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
  })
);
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));

initSocket(io);

//
app.get("/", (_: Request, res: Response) => {
  res.send("Welcome to chat app");
});

//
app.use("/api/v1", v1Routes);

//
httpServer.listen(config.PORT, async () => {
  console.log(`Server is Fire on port:${config.PORT}`);
  await connectDbase();
  console.log("DB Connected!");
});
