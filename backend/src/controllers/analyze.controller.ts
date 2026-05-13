import { Request, Response, NextFunction } from "express";

import { analyzeSchema } from "../validations/analyze.validation";

import { analyzeTextWithAI } from "../services/ai.service";

import { ApiResponse } from "../utils/apiResponse";

import { ApiError } from "../utils/apiError";

import { logger } from "../utils/logger";

export const analyzeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = analyzeSchema.parse(req.body);

    logger.info(`Analyzing text: ${validatedData.text}`);

    const result = await analyzeTextWithAI(validatedData.text);

    return res
      .status(200)
      .json(new ApiResponse(true, "Text analyzed successfully", result));
  } catch (error: any) {
    if (error.name === "ZodError") {
      return next(new ApiError(400, error.errors[0].message));
    }

    next(error);
  }
};
