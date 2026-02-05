import React from "react";
import { useState } from "react";

export default function SmartForm() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const errorMessege = () => {
    if (text.length >= 15) {
      return <p style={{ color: "red" }}>15자 이내로 작성하세요</p>;
    }
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "350px",
          backgroundColor: "#212121",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={handleText}
          maxLength={15}
          style={{ height: "40px", width: "300px", fontSize: "20px", letterSpacing: "5px" }}
        />
        <p style={{ color: "white" }}>{text.length} / 15자</p>
        <p onChange={handleText} style={{ color: "white", letterSpacing: "5px" }}>
          {text.toUpperCase()}
        </p>
        {errorMessege()}
      </div>
    </>
  );
}
