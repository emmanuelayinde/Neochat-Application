import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { MESSAGE_TYPE } from ".";
import { Message } from "./messageModel";


export class Chat {
  @prop({ required: true, ref: () => User, type: Array })
  public participants: Ref<User>[];

  @prop({ ref: () => Message })
  public lastMessage: Ref<Message>;

  @prop({ required: true, enum: MESSAGE_TYPE, type: String })
  public type: MESSAGE_TYPE;

  @prop({ default: false })
  public editted?: boolean;

  @prop({ type: Boolean, default: false })
  public isReference?: boolean;

  @prop({ ref: () => Chat })
  public referenceTo?: Ref<Chat>;

  @prop({})
  public text?: string;

  @prop({})
  public files?: (Buffer | string)[];

  @prop({})
  public voiceNote?: Buffer | string;
}
