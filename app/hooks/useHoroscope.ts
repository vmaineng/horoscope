"use client";

import { useState } from "react";
import { Profile, Horoscope } from "../types";

export default function useHoroscope() {
  const [name, setName] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);

  const submitInfo = async (info: Profile) => {
    setName(info.name);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/horoscope`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob: info.dob }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch horoscope!");
      }
      const data = await res.json();
      setHoroscope(data)
    } catch (error) {
      console.error("Error submitting horoscope info:", error);
    }
  };
  return { name,  horoscope, submitInfo };
}
