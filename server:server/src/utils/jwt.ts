import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

/**
 * Sign in jwt from user details
 *
 * @param paylaod
 * @returns
 */
export const signJWT = (paylaod: object) => {
  try {
    const token = jwt.sign(paylaod, config.JWT_SECRET, {
      expiresIn: "7d",
    });

    return token
  } catch (error) {
    return null
  }
};

/**
 * Verify user token
 *
 * @param token
 * @returns
 */
export const verifyJWT = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    return decoded as JwtPayload;
  } catch (error) {
    return null;
  }
};
