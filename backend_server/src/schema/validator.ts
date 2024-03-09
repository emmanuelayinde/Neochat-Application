import { NextFunction, Request, Response } from "express";



export const validateBodySchema = (req: Request, res: Response, next: NextFunction) => {

req.body = {...req.body}
    next()
}