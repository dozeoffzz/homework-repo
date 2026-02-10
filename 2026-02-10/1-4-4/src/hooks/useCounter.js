import React from "react";
import { useState } from "react";

export default function useCounter(initialValue, options = {}) {
  const { min, max } = options;
  const [count, setCount] = useState(initialValue);

  const increment = (e) => {
    e.stopPropagation();
    if (count >= 10) return;
    setCount((prev) => prev + 1);
  };

  const decrement = (e) => {
    e.stopPropagation();
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  const reset = (e) => {
    e.stopPropagation();
    setCount(initialValue);
  };
  return { count, increment, decrement, reset };
}
