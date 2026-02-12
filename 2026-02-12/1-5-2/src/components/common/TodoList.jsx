import styled from "@emotion/styled";
import React, { useReducer } from "react";
import { useState } from "react";
import { theme } from "../../styles/theme";

function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE":
      return todos.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload);
    case "RESET":
      return [];
    default:
      return todos;
  }
}

const TodoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  min-height: 300px;
  background-color: #1f2a41;
  border-radius: ${theme.borderRadius.ls};
  color: #e7610a;
  box-shadow: ${theme.shadows.card};
`;
const TodoTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
`;

const TodoInputBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const TodoInput = styled.input`
  width: 100%;
  height: 35px;
  background-color: #fafafa;
  border-radius: ${theme.borderRadius.md};

  &:focus {
    outline: 2px solid #e7610a;
  }
`;

const TodoAddBtn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: ${theme.borderRadius.md};
  background-color: #e7610a;
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    outline: 2px solid #fafafa;
  }
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoItem = styled.li`
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: #fafafa;
  border-radius: ${theme.borderRadius.md};
  font-size: 18px;
  font-weight: 700;
`;

const ToggleBtn = styled.input`
  padding: 10px;
  height: 20px;
  width: 20px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 700;
`;
const TodoResetBtn = styled(TodoAddBtn)``;

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleToggle = (type, payload) => {
    dispatch({ type, payload });
  };

  const handleDelete = (type, payload) => {
    dispatch({ type, payload });
  };

  const handleReset = (type, payload = []) => {
    dispatch({ type, payload });
  };

  const inputTodo = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <TodoContainer>
        <TodoTitle>Todo List</TodoTitle>
        <TodoInputBox>
          <TodoInput onChange={inputTodo} value={input} placeholder="할 일을 입력하세요..." />
          <TodoAddBtn onClick={handleAdd}>추가</TodoAddBtn>
          <TodoResetBtn
            onClick={() => {
              handleReset("RESET");
            }}
          >
            리셋
          </TodoResetBtn>
        </TodoInputBox>
        <ItemList>
          {todos.map((t) => (
            <TodoItem key={t.id}>
              <ToggleBtn
                type="checkbox"
                onChange={() => {
                  handleToggle("TOGGLE", t.id);
                }}
              />
              {t.text}
              <DeleteBtn
                onClick={() => {
                  handleDelete("DELETE", t.id);
                }}
              >
                삭제
              </DeleteBtn>
            </TodoItem>
          ))}
        </ItemList>
      </TodoContainer>
    </>
  );
}
