import random


responses = {

    "Happy": [
        "That is wonderful to hear ✨",
        "Keep spreading positivity 🌸",
        "Your happiness is inspiring 😊"
    ],

    "Sad": [
        "Better days are coming 💙",
        "Take things one step at a time 🌱",
        "You are stronger than you think 🌸"
    ],

    "Stress": [
        "You do not have to handle everything at once 🌿",
        "Take a small break and breathe 🌼",
        "Small progress still matters ✨"
    ],

    "Angry": [
        "Take a moment to slow down 🌱",
        "Your emotions are valid 💙",
        "Try to give yourself some calm space ☁️"
    ],

    "Fear": [
        "Everything will be okay 🌼",
        "You are more capable than you think 💪",
        "Do not let fear stop your growth 🌟"
    ],

    "Neutral": [
        "Thank you for sharing 😊",
        "Hope you are having a peaceful day 🌿",
        "I am here to listen 💙"
    ]
}


DEFAULT_EMOTION = "Neutral"


def generate_response(emotion: str):

    emotion_responses = responses.get(
        emotion,
        responses[DEFAULT_EMOTION]
    )

    return random.choice(emotion_responses)