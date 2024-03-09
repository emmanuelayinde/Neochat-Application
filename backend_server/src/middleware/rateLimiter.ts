import { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import config from "../config";

export default config.NODE_ENV === "production"
  ? rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
    })
  : (req: Request, res: Response, next: NextFunction) => next(); // No rate limit in non-production environments
