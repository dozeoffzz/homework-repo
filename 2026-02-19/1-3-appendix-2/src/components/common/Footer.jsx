import React from "react";
import styled from "@emotion/styled";
import { lightTheme } from "../../styles/theme";

const FooterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.colors.background};
  height: 80px;
  color: ${lightTheme.colors.textSecondary};
  border-top: 3px solid ${lightTheme.colors.surface};
`;
export default function Footer() {
  return (
    <FooterBar>
      <p> &copy; 2026 나만의 리액트 블로그 All rights reserved.</p>
    </FooterBar>
  );
}
