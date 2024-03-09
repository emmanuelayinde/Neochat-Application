import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { STATUS_TYPE } from ".";
import { Status } from "./statusModel";


export class ScheduledStatus {
  @prop({ required: true, ref: () => User })
  public author: Ref<User>;

  @prop({ required: true, enum: STATUS_TYPE, type: String })
  public type: STATUS_TYPE;

  @prop({})
  public content: string;

  @prop({})
  public caption: string;

  @prop({ required: true, default: 24 })
  public duration: number;

  @prop({ required: true, })
  public expireAfter: Date;

  @prop({ default: false })
  public achieved: boolean;

  @prop({ required: true })
  public time?: Date;

  @prop({ required: true, default: false })
  public posted: boolean

  @prop({ ref: () => Status })
  public liveReference: Ref<Status>
}

