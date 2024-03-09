import { TypeOf, object, string } from "zod";

export const registerUserSchema = {
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(8, "Password must be at least 8 characters long"),
    confirmPassword: string({
      required_error: "Confirm password is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["comparePassword"],
  }),
};

export const loginUserSchema = {
  body: object({
    emailOrUsername: string({
      required_error: "Email or Username is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
};

export const forgotPasswordSchema = {
  body: object({
    email: string({
      required_error: "Email is required",
    }),
  }),
};

export const resetPasswordSchema = {
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(8, "Password must be at least 8 characters long"),
    confirmPassword: string({
      required_error: "Confirm password is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["comparePassword"],
  }),
  query: object({
    token: string({
      required_error: "Reset token is required",
    }),
  }),
};

export type registerUserBodyParams = TypeOf<typeof registerUserSchema.body>;
export type loginUserBodyParams = TypeOf<typeof loginUserSchema.body>;
export type forgotPasswordBodyParams = TypeOf<typeof forgotPasswordSchema.body>;
export type resetPasswordBodyParams = TypeOf<typeof resetPasswordSchema.body>;
export type resetPasswordQueryParams = TypeOf<typeof resetPasswordSchema.query>;
