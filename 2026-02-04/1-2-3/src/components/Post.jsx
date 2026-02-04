import React from "react";

export default function Post({ author, content }) {
  return (
    <>
      <div className="PostCard">
        <div style={{ fontSize: "20px", fontWeight: "900", marginBottom: "10px" }}>{author}</div>
        <img src="https://picsum.photos/200/300?random=1" alt="photo" />
        <div style={{ marginTop: "10px" }}>{content}</div>
      </div>
    </>
  );
}
