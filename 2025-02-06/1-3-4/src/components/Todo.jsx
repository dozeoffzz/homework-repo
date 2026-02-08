import React from "react";
import { useState } from "react";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [addInput, setAddInput] = useState("");

  const handleAddInput = (e) => {
    setAddInput(e.target.value);
  };

  const addTodo = () => {
    if (!addInput.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: addInput,
    };
    setTodos([...todos, newTodo]);
    setAddInput("");
  };

  const deleteTodo = (deleteId) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };
  return (
    <>
      <div className="todo-container">
        <span style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "700" }}>Todo List</span>
        <div className="add-todo">
          <input
            value={addInput}
            onChange={handleAddInput}
            style={{ width: "200px", fontSize: "18px", fontWeight: "700", height: "30px" }}
          />
          <button type="button" onClick={addTodo} style={{ width: "80px", height: "35px" }}>
            추가
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} style={{}}>
              <span style={{ width: "200px" }}>{todo.text}</span>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                style={{ width: "50px", height: "100%", marginLeft: "30px" }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
