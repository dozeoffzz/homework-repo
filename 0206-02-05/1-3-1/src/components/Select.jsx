import React from "react";
import { useState } from "react";

export default function Select() {
  const [menu, setMenu] = useState("americano");
  const [size, setSize] = useState("tall");

  const handleMenu = (e) => {
    setMenu(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <select value={menu} onChange={handleMenu}>
        <option value="americano">아메리카노</option>
        <option value="cafeLatte">카페라때</option>
        <option value="chocoLatte">초코라때</option>
      </select>

      <input type="radio" value="tall" name="drinkSize" checked={size === "tall"} onChange={handleSize}></input>
      <input type="radio" value="mid" name="drinkSize" checked={size === "mid"} onChange={handleSize}></input>
      <input type="radio" value="small" name="drinkSize" checked={size === "small"} onChange={handleSize}></input>

      <p>
        {menu}/{size}
      </p>
    </>
  );
}
