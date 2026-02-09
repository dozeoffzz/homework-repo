import React from "react";
import { theme } from "../styles/theme";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const WatchContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  border-radius: ${theme.borderRadius.ls};
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-top: 20px;
`;

const Time = styled.p`
  font-size: 50px;
  font-weight: 800;
  margin-top: 10px;
`;

const HandleBtn = styled.button`
  width: 100px;
  height: 40px;
  font-weight: 800;
  font-size: 16px;
  border-radius: ${theme.borderRadius.md};
  border: none;
  background-color: ${(props) => props.bg || theme.colors.primary};
  color: ${theme.colors.secondary};
  box-sizing: ${theme.shadows.card};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const ResetBtn = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: none;
  color: ${theme.colors.text};
  font-size: 18px;
  font-weight: 800;
`;
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const startTime = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setTime((p) => p + 10);
    }, 10);
  };

  const stopTime = () => {
    if (!isDisabled) return;
    setIsDisabled(false);
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  const resetTime = () => {
    stopTime();
    setTime(0);
  };

  useEffect(() => {
    return () => stopTime();
  }, []);

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milsec = String((ms % 1000) / 10).padStart(2, "0");

    return `${minutes}:${seconds}:${milsec}`;
  };
  return (
    <>
      <WatchContainer>
        <Title>Stop-Watch</Title>
        <Time style={{ color: isDisabled ? "#fafafa" : "#3F476C" }}>{formatTime(time)}</Time>
        <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
          <HandleBtn bg="#99b9db" onClick={startTime} disabled={isDisabled}>
            START
          </HandleBtn>
          <HandleBtn bg="#cc5567" onClick={stopTime} disabled={!isDisabled}>
            STOP
          </HandleBtn>
        </div>
        <ResetBtn onClick={resetTime}>Reset Timer</ResetBtn>
      </WatchContainer>
    </>
  );
}
