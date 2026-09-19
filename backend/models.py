from pydantic import BaseModel
from datetime import date

class HoroscopeRequest(BaseModel):
    dob: date

class HoroscopeResponse(BaseModel):
    sign: str
    message: str