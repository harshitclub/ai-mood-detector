export interface AnalyzeRequestBody {
  text: string;
}

export interface AnalyzeResult {
  mood: string;
  emotion: string;
  emoji: string;
  sentiment_score: number;
  response: string;
}
