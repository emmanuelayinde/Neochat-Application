import { Ref, prop } from "@typegoose/typegoose";
import { User } from "./userModel";
import { CALL_STATUS, CALL_TYPE } from ".";


 
export class Call {
  @prop({ ref: () => User })
  public caller: Ref<User>;

  @prop({ ref: () => User })
  public callee: Ref<User>;

  @prop({ required: true, enum: CALL_TYPE, type: String })
  public type: CALL_TYPE;

  @prop({ required: true, enum: CALL_STATUS, type: String })
  public status: CALL_STATUS;

  @prop({})
  public duration: number;
}
