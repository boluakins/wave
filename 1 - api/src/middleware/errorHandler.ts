import { Request, Response, NextFunction } from "express";
import ApiResponse from "../models/ApiResponse";
import { isDevelopment } from "../config";
import Logger from "../core/Logger";

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Logger.error(err);
  let result: ApiResponse = {
    success: false,
    message: isDevelopment ? err.message : "Something went wrong",
  };
  res.status(500).json(result);
};

export default ErrorHandler;
