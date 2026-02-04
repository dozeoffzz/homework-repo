import React from "react";
import { useState } from "react";

export default function Theme({ age, job }) {
  const [theme, setTheme] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [isName, setIsName] = useState("최원희");
  const [isContent, setIsContent] = useState("안녕하세요!");

  const themeStyle = {
    backgroundColor: theme ? "#212121" : "#fafafa",
    color: theme ? "#fafafa" : "#212121",
    width: "400px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputNameValue = (e) => {
    setIsName(e.target.value);
  };
  const inputContentValue = (e) => {
    setIsContent(e.target.value);
  };

  const handleChangeBtn = () => {
    setTheme(!theme);
  };
  const handleChangeValue = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <div style={themeStyle}>
        <div>{isEdit ? <input value={isName} onChange={inputNameValue} /> : <h3>{isName} 입니다.</h3>}</div>
        <div>{isEdit ? <input value={isContent} onChange={inputContentValue} /> : <h3>{isContent}</h3>}</div>
        <p>나이: {age}</p>
        <p>직업: {job}</p>
        <div className="btnContainer">
          <button style={{ height: "30px", width: "80px" }} onClick={handleChangeBtn}>
            {theme ? "✨" : "💤"}
          </button>
          <button style={{ height: "30px", width: "80px" }} onClick={handleChangeValue}>
            {isEdit ? "저장" : "편집"}
          </button>
        </div>
      </div>
    </>
  );
}
