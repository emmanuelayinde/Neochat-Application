import { Ref, pre, prop } from "@typegoose/typegoose";
import { extendTime } from "../utils";
import { User } from "./userModel";
import { STATUS_TYPE } from ".";


@pre<Status>("save", async function (next) {
  const statusTTL = extendTime(this.duration, "hours")
  this.expireAfter = statusTTL;
  return next();
})
export class Status {
  @prop({ ref: () => User })
  public author: Ref<User>;

  @prop({ required: true, enum: STATUS_TYPE, type: String })
  public type: STATUS_TYPE;

  @prop({ required: true })
  public content: string;

  @prop({})
  public caption?: string;

  @prop({ required: true, default: 24 })
  public duration: number;

  @prop({})
  public expireAfter?: Date;

  @prop({ default: false })
  public isDeleted?: boolean;
}
