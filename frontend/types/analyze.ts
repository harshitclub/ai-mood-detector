export interface AnalyzeResult {
  mood: string;

  emotion: string;

  emoji: string;

  sentiment_score: number;

  response: string;
}

export interface AnalyzeAPIResponse {
  success: boolean;

  message: string;

  data: AnalyzeResult;
}
