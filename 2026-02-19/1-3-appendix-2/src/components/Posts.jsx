import styled from "@emotion/styled";
import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { lightTheme, theme } from "../styles/theme";

const PostList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${lightTheme.colors.surface};
  border-radius: ${theme.borderRadius.ls};
`;

const PostItem = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
`;

const PostGoHome = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  background-color: ${lightTheme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  color: #0c0c0c;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const postList = [
  { id: 1, title: "React는 재미있다", content: "정말 재미있는 라이브러리 입니다" },
  { id: 2, title: "SPA의 장점", content: "깜빡임이 없어서 좋아요" },
  { id: 3, title: "Router 정복", content: "이제 페이지 이동은 식은 죽 먹기" },
];

export default function Posts() {
  return (
    <PostList>
      <p style={{ fontSize: "28px", fontWeight: "700" }}>글 목록</p>
      <PostItem to={"/posts/1"}>1.React는 재미있다.</PostItem>
      <PostItem to={"/posts/2"}>2.SPA의 장점</PostItem>
      <PostItem to={"/posts/3"}>3.Router 정복</PostItem>
      <PostGoHome to={"/"}>홈으로</PostGoHome>
    </PostList>
  );
}
