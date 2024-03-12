import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { MESSAGE_TYPE } from "./models";
import { getAllUserChats, postMessageToChat, updateUser } from "./services";


export interface socketMessageProps {
  fromId: string,
  toId: string,
  toSocket: string,
  chatId: string,
  message: {
    type: MESSAGE_TYPE,
    text?: string,
    files?: (Buffer | string)[],
    voiceNote?: Buffer | string
    isViewOnce?: boolean,
    editted?: string,
    isReference?: boolean,
    isReferenceTo?: string,
  }
}



export const initSocket = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
  // Connect Socket Io
  io.on("connection", (socket: Socket) => {
    const id = socket.handshake.query['userId']
    let userId: string = ''
    if (id) {
      if (Array.isArray(id)) {
        userId = id[0]
      }
      userId = id as string
      updateUser(userId, { isOnline: true, socketId: socket.id })
      console.log(`⚡: User with the user id ${userId} & socket id ${socket.id} just connected!`);
    }

    /**
     * Chats Operations
     * 
     * @@@Events Names
     *   @fetchUserChats - 
     */

    // Get user chats
    socket.on('fetchUserChats', async (userId: string) => {
      const chats = await getAllUserChats(userId)
      // console.log('Received events to fetched UserId')
      // console.log({ chats })
      socket.emit('fetchUserChats', chats)
    })




    /**
     * > 1-1 CHAT EVENTS
     * 
     * @@@Events Names
     *   @sendMessage - Send message to other chat participants
     */
    socket.on("sendMessage", async (messageData: socketMessageProps) => {
      // Emit received message to the other user in the chat
      socket.to(messageData.toSocket).emitWithAck('incomingMessage', messageData)
      // Save message to DB
      await postMessageToChat({
        chatId: messageData.chatId,
        from: messageData.fromId,
        to: messageData.toId,
        message: {
          type: messageData.message.type,
          editted: messageData.message.editted,
          files: messageData.message.files,
          isReference: messageData.message.isReference,
          isReferenceTo: messageData.message.isReferenceTo,
          isViewOnce: messageData.message.isViewOnce,
          text: messageData.message.text,
          voiceNote: messageData.message.voiceNote
        }
      })
    });


    // Group-message
    socket.on("group-message", (opt) => {
      console.log({ opt });
    });


    //  WHEN SOCKET DISCONNECT
    socket.on('disconnect', () => {
      socket.disconnect()
      updateUser(userId, { isOnline: false, lastSeen: new Date() })
      console.log('🔥: A user disconnected', socket.id);
    })
  });
};
