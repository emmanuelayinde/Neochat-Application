import { IChatPreviewUser } from '.'

// CHATS
export enum MessageTypesEnum {
    TEXT_MESSAGE = "text-message",
    IMAGE_MESSAGE = "image-message",
    VOICE_MESSAGE = "voice-message",
    AUDIO_MESSAGE = "audio-message",
    VIDEO_MESSAGE = "video-message",
    FILE_MESSAGE = "file-message",
    VOICE_CALL_MESSAGE = 'voice-call-message',
    VIDEO_CALL_MESSAGE = 'video-call-message'
}

export type MessageTypes = "text-message" | "image-message" | "voice-message" | "audio-message" | "video-message" | "file-message" | "video-call" | "voice-call"

export interface ILastMessage {
    _id: string,
    sender: IChatPreviewUser,
    type: MessageTypes,
    isReply: boolean,
    text: string,
    voiceNote: string,
    isViewOnce: boolean
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

export type mediaPlaybackSpeed = '0.5' | '1' | '1.5' | '2'
export type recordingEventTypes = 'start-recording' | 'pause-recording' | 'resume-recording' | 'stop-recording' | 'delete-recording'