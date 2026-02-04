import React from "react";

export default function ProfileCard({ name, age, job }) {
  return (
    <>
      <div className="ProfileCard">
        <h2>이름: {name}</h2>
        <p>나이: {age}</p>
        <p>직업: {job}</p>
      </div>
    </>
  );
}
