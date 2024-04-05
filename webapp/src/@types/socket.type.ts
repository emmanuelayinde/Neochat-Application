import { Socket } from "socket.io-client";

// SOKCETS
export type socketEvents = 'fetchUserChats' | 'fetchChatMessages' | 'chatMessages'

export interface socketState {
    isConnected: boolean,
    socketId: string | null,
    socket: Socket | null,
}