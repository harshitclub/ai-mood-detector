import re


EXTRA_SPACES_PATTERN = r"\s+"
SPECIAL_CHAR_PATTERN = r"[^a-zA-Z0-9\s]"


def clean_text(text: str) -> str:

    text = text.lower()

    text = re.sub(
        SPECIAL_CHAR_PATTERN,
        "",
        text
    )

    text = re.sub(
        EXTRA_SPACES_PATTERN,
        " ",
        text
    )

    return text.strip()