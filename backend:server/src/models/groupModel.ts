import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Message } from "./messageModel";

export class Group {
  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;

  @prop({ required: true, ref: () => User })
  public admins: Ref<User>[];

  @prop()
  public avatar?: string;

  @prop({ required: true, ref: () => User })
  public members: Ref<User>[];

  @prop({ required: true })
  public name: string;

  @prop({ default: 12, min: 2, max: 20 })
  public limit?: number;

  @prop()
  public description?: string;

  @prop({ required: true })
  public link: string;

  @prop({ default: false })
  public onlyAdminCanMessage: boolean;

  @prop({ default: false })
  public onlyAdminCanEditGroup: boolean;

  @prop({ ref: () => Message })
  public lastMessage: Ref<Message>;
}