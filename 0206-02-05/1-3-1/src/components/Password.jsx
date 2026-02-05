import React from "react";
import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const errorMessege = () => {
    if (password.length <= 8) {
      return <p style={{ color: "red" }}>너무 짧아요!</p>;
    }
  };

  return (
    <>
      <div>
        <input onChange={handlePassword} />
        {errorMessege()}
      </div>
    </>
  );
}
