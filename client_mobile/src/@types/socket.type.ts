import { Socket } from "socket.io-client";

// SOKCETS
export type socketEvents = 'fetchUserChats'

export interface socketState {
    isConnected: boolean,
    socketId: string | null,
    socket: Socket | null,
}