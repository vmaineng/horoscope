from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import HoroscopeRequest, HoroscopeResponse
from services.zodiac import get_zodiac_sign

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/horoscope", response_model=HoroscopeResponse)
async def get_horoscope(payload: HoroscopeRequest):
    sign = get_zodiac_sign(payload.dob)

    message = f"Placeholder horoscope for {sign}"
    return HoroscopeResponse(sign=sign, message=message)