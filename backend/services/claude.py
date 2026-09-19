import os
from anthropic import Anthropic
from datetime import date

client = Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

_cache: dict[tuple[str,str], str] = {}

def generate_horoscope(sign:str, today:date) -> str: 
    cache_key = (sign, today.isoformat())
    if cache_key in _cache:
        return _cache[cache_key]

    prompt = (
    f"Write a short, upbeat daily horoscope for {sign} for {today.isoformat()}. "
    f"Keep it to 2-3 sentences. Return plain text only — "
    f"no markdown formatting, no headers, no emoji, no asterisks."
    )

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=200,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    message = response.content[0].text
    _cache[cache_key] = message
    return message