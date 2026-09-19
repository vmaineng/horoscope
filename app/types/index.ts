export type Profile = { 
    name: string;
    dob: string;
}

export type Horoscope = { 
    userId: string;
    sign: string;
    today_date: string;
    message: string;
}

export type ZodiacSign =
  | "Aries" | "Taurus" | "Gemini" | "Cancer"
  | "Leo" | "Virgo" | "Libra" | "Scorpio"
  | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";

  export type ApiError = {
  code: string;
  message: string;
};

export type HoroscopeState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Horoscope };