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
        </Route>
      </Routes> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<BlogHome />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
