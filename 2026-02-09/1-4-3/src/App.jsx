import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainLayout from "./components/layout/MainLayout";
import Stopwatch from "./components/Stopwatch";
import Stopwatch2 from "./components/Stopwatch2";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Stopwatch />
        <Stopwatch2 />
      </MainLayout>
    </>
  );
}
