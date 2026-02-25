import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleToggle} style={{ backgroundColor: toggle ? "green" : "gray" }}>
        {toggle ? "on" : "off"}
      </button>
    </div>
  );
}
