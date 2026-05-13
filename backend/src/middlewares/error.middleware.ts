import { NextFunction, Request, Response } from "express";

import { ApiError } from "../utils/apiError";

export const errorMiddleware = (
  error: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;

  const message = error.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};
