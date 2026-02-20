import React from "react";
import useCounterStore from "../stores/useCounterStore";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background-color: ${theme.colors.primary};
`;

const CountNum = styled.p`
  font-size: 100px;
  font-weight: 700;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Btn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.secondary};
  color: #fafafa;
  border: 1px solid ${theme.colors.button};
  font-size: 18px;

  &:active {
    background-color: ${theme.colors.button};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Counter2() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.resetCount);
  return (
    <CountContainer>
      <CountNum>{count}</CountNum>
      <BtnBox>
        <Btn onClick={increment}>PLUS</Btn>
        <Btn onClick={decrement}>MINUS</Btn>
        <Btn onClick={reset}>RESET</Btn>
      </BtnBox>
    </CountContainer>
  );
}
