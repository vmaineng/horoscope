"use client";

import HoroscopeForm from "./horoscope/components/HoroscopeForm";
import useHoroscope from "./hooks/useHoroscope";
import HoroscopeOutput from "./horoscope/components/HoroscopeOutput";

export default function Home() {
  const { name, horoscope, submitInfo } = useHoroscope();

  return (
    <div>
      {!horoscope && <HoroscopeForm onSubmit={submitInfo} />}

      {horoscope && name && (
        <HoroscopeOutput
          name={name}
          message={horoscope.message}
          today_date={new Date().toISOString().split("T")[0]}
          sign={horoscope.sign}
        />
      )}
    </div>
  );
}
