import React from "react";
import { useState } from "react";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [isname, setIsName] = useState("최원희");
  const [iscontent, setIsContent] = useState("안녕하세요!");
  const inputNameValue = (e) => {
    setIsName(e.target.value);
  };

  const inputContentValue = (e) => {
    setIsContent(e.target.value);
  };
  const handleChangeValue = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <div>
        <div>{isEdit ? <input value={isname} onChange={inputNameValue} /> : <h3>{isname}</h3>}</div>
        <div>{isEdit ? <input value={iscontent} onChange={inputContentValue} /> : <h3>{iscontent}</h3>}</div>
        <button onClick={handleChangeValue}>{isEdit ? "저장" : "편집"}</button>
      </div>
    </>
  );
}
