import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { MESSAGE_TYPE } from ".";


export class Chat {
  @prop({ required: true, ref: () => User })
  public sender: Ref<User>;

  @prop({ required: true, ref: () => User })
  public receiver: Ref<User>;

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
