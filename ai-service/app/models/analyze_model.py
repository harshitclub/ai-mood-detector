from pydantic import BaseModel
from pydantic import Field


class AnalyzeRequest(BaseModel):

    text: str = Field(
        min_length=1,
        max_length=1000,
        description="User text input"
    )


class AnalyzeResponse(BaseModel):

    mood: str

    emotion: str

    emoji: str

    sentiment_score: float

    response: str