import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";



export const initSocket = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
  // Connect Socket Io
  io.on("connection", (socket: Socket) => {


    // 1-1 CHAT EVENTS


    // 1-1-message
    socket.on("1-1-message", (opt) => {
      console.log({ opt });
    });


    // GROUP CHAT EVENTS

    // Group-message
    socket.on("group-message", (opt) => {
      console.log({ opt });
    });


    //  WHEN SOCKET DISCONNECT
    socket.on('disconnect', (a) => {
      console.log('Disconnected', { a })
    })
  });
};
