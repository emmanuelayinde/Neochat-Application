import { ILastMessage, IMessageProps } from "."

export interface IChatPreviewUser {
    _id: string,
    name: string,
    username: string,
    avatar?: string,
    isOnline?: boolean,
    lastSeen?: Date
}

export interface IChatPreview {
    chatId: string,
    participants: IChatPreviewUser[],
    lastMessage?: ILastMessage,
}

export interface ChatPreviewType {
    hasStatus: boolean,
    avatar: string | undefined,
    isGroup: boolean,
    lastMessage: string | undefined,
    newNessageCounter: number | undefined,
    lastSeen: string,
    name: string
}

export interface IChatHeadProps {
    name: string,
    userId: string,
    isOnline?: boolean,
    lastSeen?: Date,
    avatar?: string,
    chatId: string,
    socketId: string | null | undefined
}

export interface IChatProps {
    _id: string,
    participants: string[],
    messages: IMessageProps[],
}


// GROUP 
export interface IGroupChatPreview {
    groupId: string,
    participants: IChatPreviewUser[],
    lastMessage?: ILastMessage,
}

export type chatStatus = 'online' | 'offline' | 'away'