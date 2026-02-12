import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainLayout from "./components/layout/MainLayout";
import TodoList from "./components/common/TodoList";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <TodoList />
      </MainLayout>
    </>
  );
}
