import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../utils/sendResponse";
import { verifyJWT } from "../utils/jwt";

/**
 * Middleware for validating user's authentication
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token =
    req.cookies?.userToken || req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return sendResponse(res, httpStatus.UNAUTHORIZED, "Unauthorized access");
  }

  try {
    // Verify the token
    const decoded = verifyJWT(token);
    if (!decoded) {
      return sendResponse(res, httpStatus.UNAUTHORIZED, "Token expired");
    }
    const _id = decoded['_id'] || ''
    req.body._id = _id
    return next();
  } catch (error) {
    return sendResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      error as string,
      {},
      true,
    );
  }
};