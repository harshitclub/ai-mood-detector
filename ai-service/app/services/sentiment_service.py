from textblob import TextBlob


POSITIVE_THRESHOLD = 0.1
NEGATIVE_THRESHOLD = -0.1


def analyze_sentiment(text: str):

    blob = TextBlob(text)

    polarity = blob.sentiment.polarity

    if polarity > POSITIVE_THRESHOLD:
        mood = "Positive"

    elif polarity < NEGATIVE_THRESHOLD:
        mood = "Negative"

    else:
        mood = "Neutral"

    return {
        "mood": mood,
        "score": round(polarity, 2)
    }