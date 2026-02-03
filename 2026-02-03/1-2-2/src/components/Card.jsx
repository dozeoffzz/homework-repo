import React from "react";

export default function Card() {
  const name = "최원희";
  const birthYear = 2000;
  const currentYear = new Date().getFullYear();
  const hobbies = ["음악", "잠", "애니"];
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
        }}
      >
        이름: {name}
      </h2>
      <p style={{ fontSize: "18px", fontWeight: "500" }}>
        나이: {currentYear - birthYear + 1}
      </p>
      <p style={{ fontSize: "18px", fontWeight: "500" }}>
        취미: {hobbies.join(", ")}
      </p>
      <p style={{ fontSize: "18px", fontWeight: "500", marginBottom: "150px" }}>
        MBTI: ISFP
      </p>
    </>
  );
}
