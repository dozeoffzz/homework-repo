import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import { lightTheme, theme } from "../styles/theme";

const Home = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 300px;
  background-color: ${lightTheme.colors.surface};
  border-radius: ${theme.borderRadius.ls};
`;

const TitleText = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const NavGoLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${lightTheme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  color: #0c0c0c;
`;

export default function BlogHome() {
  return (
    <Home>
      <TitleText>미니 블로그 홈</TitleText>
      <NavGoLink to={"/Posts"}>글 목록 보러가기</NavGoLink>
    </Home>
  );
}
