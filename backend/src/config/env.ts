import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,

  NODE_ENV: process.env.NODE_ENV || "development",

  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",

  AI_SERVICE_URL: process.env.AI_SERVICE_URL || "http://127.0.0.1:8000",
};
