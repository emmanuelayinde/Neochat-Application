import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Message } from "./messageModel";


export class Chat {
  @prop({ required: true, ref: () => User, type: Array })
  public participants: Ref<User>[];

  // TODO: Make this generic
  @prop({ ref: () => Message })
  public lastMessage: Ref<Message>;
  
  // TODO: Make this generic
  @prop({ ref: () => Message })
  public messages: Ref<Message>[];
}
