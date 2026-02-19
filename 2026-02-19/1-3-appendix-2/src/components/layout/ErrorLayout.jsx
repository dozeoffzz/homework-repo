import React from "react";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const ErrorLayoutContainer = styled.div`
  padding: ${theme.spacing.lg};
  min-height: 100vh;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fd1c00;
`;
export default function ErrorLayout({ children }) {
  return <ErrorLayoutContainer>{children}</ErrorLayoutContainer>;
}
