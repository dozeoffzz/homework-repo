import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainLayout from "./components/layout/MainLayout";
import Stopwatch from "./components/Stopwatch";
import Stopwatch2 from "./components/Stopwatch2";
import SimpleProfileCard from "./components/SimpleProfileCard";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        {/* <Stopwatch /> */}
        {/* <SimpleProfileCard name={"최원희"} age={27} hobbies={["코딩", "독서", "청소"]} /> */}
        {/* <Stopwatch2 /> */}
        <Counter options={{ min: 0, max: 10 }} name={"최원희"} age={27} hobbies={["웹디자인", "프론트앤드", "UIUX"]} />
      </MainLayout>
    </>
  );
}
