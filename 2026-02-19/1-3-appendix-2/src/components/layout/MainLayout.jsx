import React from "react";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import Header2 from "../common/Header2";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const LayoutContainer = styled.div`
  padding: ${theme.spacing.lg};
  min-height: 100vh;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export default function MainLayout() {
  return (
    <div>
      <Header2 />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </div>
  );
}
