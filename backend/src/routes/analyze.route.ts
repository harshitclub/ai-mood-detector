import { Router } from "express";

import { analyzeController } from "../controllers/analyze.controller";

const router = Router();

router.post("/", analyzeController);

export default router;
