import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Message } from "./messageModel";


export class StarredMessage {
  @prop({ ref: () => User })
  public user: Ref<User>;

  @prop({ ref: () => User })
  public message?: Ref<Message>;

  @prop({ default: false })
  public isGroup?: boolean
}