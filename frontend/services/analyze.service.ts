import axios from "axios";

import { env } from "@/config/env";

import { AnalyzeAPIResponse } from "@/types/analyze";

export const analyzeText = async (text: string) => {
  const response = await axios.post<AnalyzeAPIResponse>(
    `${env.API_URL}/api/v1/analyze`,
    {
      text,
    },
  );

  return response.data.data;
};
