from collections import defaultdict

from nltk.tokenize import word_tokenize

from app.utils.nltk_setup import *

emotion_keywords = {

    "Happy": [
        "happy",
        "great",
        "awesome",
        "amazing",
        "joy",
        "love",
        "fantastic",
        "good",
        "excited",
        "wonderful"
    ],

    "Sad": [
        "sad",
        "cry",
        "depressed",
        "hurt",
        "lonely",
        "upset",
        "broken"
    ],

    "Stress": [
        "stress",
        "pressure",
        "tired",
        "burnout",
        "overwhelmed",
        "exhausted"
    ],

    "Angry": [
        "angry",
        "mad",
        "furious",
        "hate",
        "annoyed",
        "frustrated"
    ],

    "Fear": [
        "fear",
        "afraid",
        "scared",
        "anxious",
        "nervous"
    ]
}

DEFAULT_EMOTION = "Neutral"

def detect_emotion(text: str):

    tokens = word_tokenize(text.lower())

    emotion_scores = defaultdict(int)

    for token in tokens:

        for emotion, keywords in emotion_keywords.items():

            if token in keywords:
                emotion_scores[emotion] += 1

    if not emotion_scores:
        return DEFAULT_EMOTION

    detected_emotion = max(
        emotion_scores,
        key=emotion_scores.get
    )

    return detected_emotion