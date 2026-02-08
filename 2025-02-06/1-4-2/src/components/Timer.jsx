import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <>
      <div className="timer-container">
        <p>CURRENT TIME</p>
        <div style={{ fontSize: "30px", fontWeight: "800", color: "#f567fc", marginBottom: "20px" }}>{time}</div>
        <button onClick={handleTimer} style={{ width: "60px" }}>
          {isRunning ? "STOP" : "START"}
        </button>
      </div>
    </>
  );
}
