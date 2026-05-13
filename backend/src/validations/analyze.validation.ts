import { z } from "zod";

export const analyzeSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Text is required")
    .max(1000, "Text is too long"),
});
