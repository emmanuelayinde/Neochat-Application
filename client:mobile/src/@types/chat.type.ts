
// CHATS
export enum MessageTypesEnum {
    TEXT_MESSAGE = "text-message",
    VOICE_MESSAGE = "voice-message",
    AUDIO_MESSAGE = "audio-message",
    VIDEO_MESSAGE = "video-message",
    FILE_MESSAGE = "file-message",
}

export interface IChatPreviewUser {
    _id: string,
    name: string,
    username: string,
    avatar?: string
}

export interface ILastMessage {
    _id: string,
    sender: string | IChatPreviewUser,
    type: MessageTypesEnum,
    isReply: boolean,
    text: string,
    voiceNote: string,
    isViewOnce: boolean
}

export interface IChatPreview {
    _id: string,
    participants: IChatPreviewUser[],
    lastMessage?: ILastMessage
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
