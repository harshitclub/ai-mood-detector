import express from "express";
import cors from "cors";
import morgan from "morgan";

import { env } from "./config/env";

import analyzeRoute from "./routes/analyze.route";

import { errorMiddleware } from "./middlewares/error.middleware";

import { notFoundMiddleware } from "./middlewares/notFound.middleware";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  return res.status(200).json({
    success: true,
    message: "Node Backend Running 🚀",
  });
});

app.get("/health", (_req, res) => {
  return res.status(200).json({
    success: true,
    status: "healthy",
  });
});

app.use("/api/v1/analyze", analyzeRoute);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
