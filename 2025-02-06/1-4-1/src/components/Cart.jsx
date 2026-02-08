import React from "react";
import { useState } from "react";

export default function Cart() {
  const [item, isItem] = useState([
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "마우스", price: 50000 },
    { id: 3, name: "키보드", price: 70000 },
  ]);
  const [choice, setChoice] = useState([]);

  const addCart = (item) => {
    setChoice((prev) => [...prev, item]);
  };

  const deleteCart = (itemId) => {
    setChoice(choice.filter((i) => i.id !== itemId));
  };

  const totalPrice = choice.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <>
      <div className="cart-container" style={{ color: "#fafafa" }}>
        <h2>상품목록</h2>
        <ul style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
          {item.map((i) => (
            <li
              key={i.id}
              style={{
                textAlign: "center",
                display: "flex",
                flex: "1",
                textWrap: "nowrap",
              }}
            >
              {i.name}
              <br /> ({i.price}원)
              <button
                type="button"
                onClick={() => addCart(i)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "20px",
                  borderRadius: "5px",
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
        <h2>장바구니 - {choice.length}개</h2>
        <ul style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
          {choice.map((item) => (
            <li key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
              {item.name}
              <button type="button" onClick={() => deleteCart(item.id)}>
                -
              </button>
            </li>
          ))}
        </ul>
        <h2>총 금액: {totalPrice.toLocaleString()}원</h2>
      </div>
    </>
  );
}
