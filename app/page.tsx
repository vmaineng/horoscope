"use client";

import { useState } from "react";
import HoroscopeForm from "./horoscope/components/HoroscopeForm";

export default function Home() {
  const [dob, setDob] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const handleSubmit = (info: { dob: string; name: string }) => {
    setDob(info.dob);
    setName(info.name);
  };

  return (
    <div>
      <HoroscopeForm onSubmit={handleSubmit} />
    </div>
  );
}
