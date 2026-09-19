"use client";

import { Horoscope } from "@/app/types";

type HoroscopeOutputProps = Horoscope & {
  name: string;
  today_date: string;
};

export default function HoroscopeOutput({
  name,
  sign,
  today_date,
  message,
}: HoroscopeOutputProps) {
  return (
    <div>
      <h2>Horoscope Output</h2>
      <p>
        {name}, here&apos;s your {sign} horoscope for {today_date}:
      </p>
      <p>{message}</p>
    </div>
  );
}
