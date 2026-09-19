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
    <div className="max-w-sm mx-auto mystic-card">
      <p className="font-display text-gold text-lg mb-2">
        {sign} &middot; {today_date}
      </p>
      <p className="text-starlight text-sm leading-relaxed">
        {name}, {message}
      </p>
    </div>
  );
}
