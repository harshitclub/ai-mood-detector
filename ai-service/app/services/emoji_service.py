emoji_map = {

    "Happy": "😊",

    "Sad": "😔",

    "Stress": "😩",

    "Angry": "😡",

    "Fear": "😰",

    "Neutral": "😐"
}


DEFAULT_EMOJI = "🙂"


def get_emoji(emotion: str):

    return emoji_map.get(
        emotion,
        DEFAULT_EMOJI
    )