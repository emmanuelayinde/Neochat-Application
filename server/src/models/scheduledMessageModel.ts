import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { MESSAGE_TYPE } from ".";
import { Group } from "./groupModel";
import { Message } from "./messageModel";

export class ScheduledMessage {
  @prop({ required: true, ref: () => User })
  public sender: Ref<User>;

  @prop({ required: true, enum: MESSAGE_TYPE, type: String })
  public type: MESSAGE_TYPE;

  @prop({ refPath: 'messageType', required: true })
  public to: Ref<User | Group>;

  @prop({ enum: ['personal', 'group'], required: true })
  public messageType: string;

  @prop({})
  public text?: string;

  @prop({})
  public file?: string[];

  @prop({})
  public voiceNote?: string;

  @prop({ required: true })
  public time?: Date;

  @prop({ required: true, default: false })
  public sent: boolean

  @prop({ ref: () => Message })
  public liveMessageRef: Ref<Message>[]
}

