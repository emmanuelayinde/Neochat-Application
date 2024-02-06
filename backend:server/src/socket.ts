import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const initSocket = (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
) => {
  io.on("connection", (socket: Socket) => {
    // CHAT
    socket.on("1-1-message", (opt) => {
      console.log(opt);
    });
  });
};
