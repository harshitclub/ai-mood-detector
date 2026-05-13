import { AnalyzeResult } from "./analyze";

export interface Message {
  id: string;

  text: string;

  sender: "user" | "ai";

  analysis?: AnalyzeResult;
}
