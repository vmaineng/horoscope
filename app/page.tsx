"use client";

import HoroscopeForm from "./horoscope/components/HoroscopeForm";
import useHoroscope from "./hooks/useHoroscope";
import HoroscopeOutput from "./horoscope/components/HoroscopeOutput";
import MoonMotif from "./horoscope/MoonMotif";

export default function Home() {
  const { name, horoscope, submitInfo } = useHoroscope();

  return (
    <main className="min-h-screen px-4 py-12">
      <MoonMotif />
      <h1 className="font-display text-gold text-2xl text-center mb-8">
        Your daily horoscope
      </h1>
      {!horoscope && <HoroscopeForm onSubmit={submitInfo} />}

      {horoscope && name && (
        <HoroscopeOutput
          name={name}
          message={horoscope.message}
          today_date={new Date().toISOString().split("T")[0]}
          sign={horoscope.sign}
        />
      )}
    </main>
  );
}
