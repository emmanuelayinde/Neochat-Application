import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { MESSAGE_TYPE } from ".";
import { Group } from "./groupModel";
import { Chat } from "./chatModel";
import { Status } from "./statusModel";

export class Message {
  @prop({ required: true, ref: () => User })
  public sender: Ref<User>;

  @prop({ refPath: 'messageType', required: true })
  public chatId: Ref<Chat | Group>;

  @prop({ enum: ['1-1', 'group'], required: true })
  public messageType: string;

  @prop({ required: true, enum: MESSAGE_TYPE, type: String })
  public type: MESSAGE_TYPE;

  @prop({ default: false })
  public editted?: boolean;

  @prop({ type: Boolean, default: false })
  public isReply?: boolean;

  @prop({ enum: ['status', '1-1-message', 'group-message'] })
  public replyFrom?: string;

  @prop({ refPath: 'replyFrom' })
  public referenceTo?: Ref<Message | Status>;

  @prop({})
  public text?: string;

  @prop({})
  public files?: string[];

  @prop({})
  public voiceNote?: string;

  @prop({ default: false })
  public isViewOnce?: boolean;
}

