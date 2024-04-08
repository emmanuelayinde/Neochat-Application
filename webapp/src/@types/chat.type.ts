import { screenTypes } from "./layout.type"

// CHATS
export enum MessageTypesEnum {
    TEXT_MESSAGE = "text-message",
    IMAGE_MESSAGE = "image-message",
    VOICE_MESSAGE = "voice-message",
    AUDIO_MESSAGE = "audio-message",
    VIDEO_MESSAGE = "video-message",
    FILE_MESSAGE = "file-message",
}

export type MessageTypes = "text-message" | "image-message" | "voice-message" | "audio-message" | "video-message" | "file-message"

export interface IChatPreviewUser {
    _id: string,
    name: string,
    username: string,
    avatar?: string,
    isOnline?: boolean,
    lastSeen?: Date
}

export interface ILastMessage {
    _id: string,
    sender: string | IChatPreviewUser,
    type: MessageTypes,
    isReply: boolean,
    text: string,
    voiceNote: string,
    isViewOnce: boolean
}

export interface IChatPreview {
    chatId: string,
    user: IChatPreviewUser,
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

export interface IMessageSenderProps {
    _id: string,
    name: string,
    username: string,
    avatar?: string,
    lastSeen?: Date,
    isOnline: boolean
}

export interface IMessageProps {
    _id: string,
    sender: IMessageSenderProps,
    chatId: string,
    messageType: '1-1' | 'group',
    type: MessageTypes,
    editted: boolean,
    isReply: boolean,
    text?: string,
    files?: string[],
    isViewOnce: boolean,
    createdAt: Date,
    updatedAt: Date
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