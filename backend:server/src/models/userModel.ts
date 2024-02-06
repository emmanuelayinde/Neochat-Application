import { Ref, pre, prop } from "@typegoose/typegoose";
import argon2 from "argon2";
import {Group} from "./groupModel";
import { Status } from "./statusModel";

@pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hashed = await argon2.hash(this.password);
    this.password = hashed;
    return next();
  }
})
@pre<User>("save", async function (next) {
  if (this.isModified("resetToken") || this.isModified("resetTokenTTL")) {
    const hashed = await argon2.hash(this.resetToken || "");
    this.resetToken = hashed;
    return next();
  }
})
export class User {
  //
  @prop({ required: true })
  public name: string;

  @prop({ required: true, unique: true })
  public email: string;

  @prop({ unique: true })
  public username?: string;

  @prop({ required: true })
  public usernameUpdatedAt: Date;

  @prop()
  public avatar?: string;

  @prop()
  public password: string;

  @prop()
  public passwordUpdatedAt: Date;

  @prop()
  public resetToken?: string;

  @prop()
  public resetTokenTTL?: Date;

  //
  @prop({ ref: () => Status })
  public status?: Ref<Status>[];

  @prop({ ref: () => Group })
  public groups?: Ref<Group>[];

  public async comparePassword(password: string): Promise<boolean> {
    return argon2.verify(this.password, password);
  }
  public async compareToken(token: string): Promise<boolean> {
    return argon2.verify(this.resetToken || "", token);
  }
}

