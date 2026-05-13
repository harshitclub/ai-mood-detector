import nltk


RESOURCES = [
    "punkt",
    "punkt_tab"
]


for resource in RESOURCES:

    try:
        nltk.data.find(f"tokenizers/{resource}")

    except LookupError:
        nltk.download(resource)