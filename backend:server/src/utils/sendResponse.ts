import { Response } from "express";

/**
 *
 * @param res Response
 * @param statusCode Number
 * @param message string
 * @param data {}
 * @param error boolean
 */
const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data = {},
  error = false,
) => {
  res.status(statusCode).json({
    statusCode,
    message,
    data,
    error,
  });
};

export default sendResponse;
