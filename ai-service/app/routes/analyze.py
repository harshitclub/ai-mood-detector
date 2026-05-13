from fastapi import APIRouter
from fastapi import HTTPException

from app.core.logger import logger

from app.models.analyze_model import (
    AnalyzeRequest,
    AnalyzeResponse
)

from app.models.api_response import APIResponse

from app.services.sentiment_service import (
    analyze_sentiment
)

from app.services.emotion_service import (
    detect_emotion
)

from app.services.emoji_service import (
    get_emoji
)

from app.services.response_service import (
    generate_response
)

from app.utils.text_cleaner import clean_text

router = APIRouter()


@router.post(
    "/",
    response_model=APIResponse
)
def analyze_text(data: AnalyzeRequest):

    try:

        cleaned_text = clean_text(data.text)

        logger.info(
            f"Analyzing text: {cleaned_text}"
        )

        sentiment = analyze_sentiment(
            cleaned_text
        )

        emotion = detect_emotion(
            cleaned_text
        )

        emoji = get_emoji(emotion)

        response = generate_response(emotion)

        result = AnalyzeResponse(
            mood=sentiment["mood"],
            emotion=emotion,
            emoji=emoji,
            sentiment_score=sentiment["score"],
            response=response
        )

        return APIResponse(
            success=True,
            message="Text analyzed successfully",
            data=result
        )

    except Exception as error:

        logger.error(str(error))

        raise HTTPException(
            status_code=500,
            detail="Something went wrong while analyzing text"
        )