// frontend/src/app/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000") // Gọi API từ NestJS
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Cannot connect to backend"));
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello World from Frontend!</h1>
      <h2>Backend says: {message}</h2>
    </main>
  );
}
