"use client";

import { useState } from "react";
import { name, dob } from "../../types";

export default function HoroscopeForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Date of Birth:", dob);
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
      </form>
    </div>
  );
}
