import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/layout/MainLayout";
import BlogHome from "./components/BlogHome";
import Posts from "./components/posts";
import { PostDetail } from "./components/PostDetail";
import WriteDetail from "./components/WriteDetail";
import Counter2 from "./components/Counter2";

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotfoundPage />} />
          <Route path="/writeDetail/:id" element={<WriteDetail />} />
        </Route>
      </Routes> */}
      <Counter2 />
    </>
  );
}
