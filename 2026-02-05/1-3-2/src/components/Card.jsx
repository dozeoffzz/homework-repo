import React from "react";
import { useState } from "react";

export default function Card() {
  const [heart, setHeart] = useState(1);
  const [isFlip, setIsFlip] = useState(false);

  const handleFlip = () => {
    setIsFlip(!isFlip);
  };
  const cardStyle = {
    transform: isFlip ? "rotateY(180deg)" : "rotateY(0)",
  };

  const handleHeart = (e) => {
    e.stopPropagation();
    setHeart((prev) => prev + 1);
  };
  return (
    <>
      <div className="card-container">
        <div className="card" style={cardStyle} onClick={handleFlip}>
          <div className="front">
            <h2>User Name</h2>
            <p>Frontend Dev</p>
            <div className="btn-container">
              <p style={{ color: "#FC3663" }}>{heart}</p>
              <button
                onClick={handleHeart}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#212121",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                ♥️
              </button>
            </div>
          </div>

          <div className="back">
            <h2>My Skills</h2>
            <div className="skill-box">
              <span>react</span>
              <span>html</span>
              <span>css</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
