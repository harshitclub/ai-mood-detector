import axios from "axios";

import { env } from "../config/env";

import { AnalyzeResult } from "../types/analyze.types";

import { ApiError } from "../utils/apiError";

export const analyzeTextWithAI = async (
  text: string,
): Promise<AnalyzeResult> => {
  try {
    const response = await axios.post(`${env.AI_SERVICE_URL}/analyze/`, {
      text,
    });

    return response.data.data;
  } catch (error) {
    throw new ApiError(500, "Failed to communicate with AI service");
  }
};
