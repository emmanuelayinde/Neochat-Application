import { getModelForClass } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Status } from "./statusModel";
import { Chat } from "./chatModel";
import { Group } from "./groupModel";
import { Message } from "./messageModel";
import { ScheduledStatus } from "./scheduledStatusModel";
import { ScheduledMessage } from "./scheduledMessageModel";
import { StarredMessage } from "./starredMessageModel";
import { Call } from "./callModel";


export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});

export const StatusModel = getModelForClass(Status, {
  schemaOptions: {
    timestamps: true,
  },
});

export const ScheduledStatusModel = getModelForClass(ScheduledStatus, {
  schemaOptions: {
    timestamps: true,
  },
});

export const ChatModel = getModelForClass(Chat, {
  schemaOptions: {
    timestamps: true,
  },
});

export const MessageModel = getModelForClass(Message, {
  schemaOptions: {
    timestamps: true,
  },
});

export const ScheduledMessageModel = getModelForClass(ScheduledMessage, {
  schemaOptions: {
    timestamps: true,
  },
});

export const GroupModel = getModelForClass(Group, {
  schemaOptions: {
    timestamps: true,
  },
});

// Group Message Models
export const StarredMessageModel = getModelForClass(StarredMessage, {
  schemaOptions: {
    timestamps: true,
  },
});

// Group Message Models
export const CallModel = getModelForClass(Call, {
  schemaOptions: {
    timestamps: true,
  },
});




export enum MESSAGE_TYPE {
  TEXT_MESSAGE = "text-message",
  VOICE_MESSAGE = "voice-message",
  AUDIO_MESSAGE = "audio-message",
  VIDEO_MESSAGE = "video-message",
  FILE_MESSAGE = "file-message",
}


export enum STATUS_TYPE {
  TEXT = "text",
  VOICE = "voice",
  VIDEO = "video",
  IMAGE = "image",
}


export enum CALL_TYPE {
  AUDIO = 'audio',
  VIDEO = "video",
}



