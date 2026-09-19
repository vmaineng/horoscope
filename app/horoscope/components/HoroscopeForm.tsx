"use client";

import { useState } from "react";
import { Profile } from "@/app/types";

type HoroscopeFormProps = {
  onSubmit: (info: Profile) => void;
};

export default function HoroscopeForm({ onSubmit }: HoroscopeFormProps) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  function validateDOB(dob: string): string | null {
    const dobDate = new Date(dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dobDate > today) {
      return "Date of birth cannot be in the future";
    }

    const mindDate = new Date();
    mindDate.setFullYear(mindDate.getFullYear() - 150);

    if (dobDate < mindDate) {
      return "Date of birth cannot be more than 150 years ago";
    }

    return null;
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !dob) {
      setError("Please enter your name and date of birth");
      return;
    }
    const dobError = validateDOB(dob);
    if (dobError) {
      setError(dobError);
      return;
    }
    setError("");
    onSubmit({ name, dob });
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
        <button className="border border-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
