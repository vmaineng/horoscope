from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
from models import HoroscopeRequest, HoroscopeResponse
from services.zodiac import get_zodiac_sign
from services.claude import generate_horoscope

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://horoscope-teal-alpha.vercel.app", 
                   "https://horoscope-l5rs.onrender.com", 
                   "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
@app.head("/")
def health_check():
    return {"status": "ok"}

@app.post("/horoscope", response_model=HoroscopeResponse)
async def get_horoscope(payload: HoroscopeRequest):
    try:
        sign = get_zodiac_sign(payload.dob)
        message = await generate_horoscope(sign, date.today())
        return HoroscopeResponse(sign=sign, message=message)
    except Exception as e:
        print(f"Error generating horoscope: {e}")
        return {"error": "Failed to generate horoscope"}