import React from "react";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  padding: ${theme.spacing.lg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function MainLayout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
