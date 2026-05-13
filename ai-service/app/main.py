from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.analyze import (
    router as analyze_router
)

from app.core.config import settings

from app.core.logger import logger


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Production-ready AI Mood Detector API"
)


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        settings.FRONTEND_URL
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)


@app.on_event("startup")
def startup_event():

    logger.info(
        "AI Mood Detector API Started"
    )


@app.get("/")
def root():

    return {
        "message": "AI Mood Detector API Running 🚀"
    }


@app.get("/health")
def health_check():

    return {
        "status": "healthy"
    }


app.include_router(
    analyze_router,
    prefix="/analyze",
    tags=["Analyze"]
)