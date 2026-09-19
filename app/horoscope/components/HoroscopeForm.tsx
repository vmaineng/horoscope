"use client";

import { useState } from "react";

type HoroscopeFormProps = {
  onSubmit: (dob: string) => void;
};

export default function HoroscopeForm({ onSubmit }: HoroscopeFormProps) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dob) {
      setError("Please enter your date of birth");
      return;
    }
    setError("");
    onSubmit(dob);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        {error && <p role="alert">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
