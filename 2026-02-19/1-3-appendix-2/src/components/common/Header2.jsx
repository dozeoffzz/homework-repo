import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import { lightTheme, theme } from "../../styles/theme";

const Header = styled.div`
  padding: 20px 16px;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${lightTheme.colors.background};
  border-bottom: 3px solid ${lightTheme.colors.surface};
`;

const MyBlog = styled(NavLink)`
  color: ${lightTheme.colors.primary};
  font-weight: 900;
  font-size: 24px;
`;

const NavText = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightTheme.colors.text};
  font-size: 18px;
  font-weight: 600;
`;

const ThemeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid ${lightTheme.colors.secondary};
  width: 30px;
  height: 30px;
  border-radius: ${theme.borderRadius.round};
`;

const MoreInfo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
`;

export default function Header2() {
  return (
    <Header>
      <div>
        <MyBlog to={"/"}>
          My <span style={{ color: "D4BBFF" }}>Blog</span>
        </MyBlog>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <NavText to={"/"}>홈</NavText>
        <NavText to={"/write"}>글쓰기</NavText>
        <NavText to={"/login"}>로그인</NavText>
        <NavText to={"*"}>404</NavText>
        <ThemeBtn>💤</ThemeBtn>
        <MoreInfo>더보기</MoreInfo>
      </div>
    </Header>
  );
}
