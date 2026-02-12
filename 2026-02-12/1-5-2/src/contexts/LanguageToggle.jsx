import React from "react";
import { useLanguage } from "./LanguageContext";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const GreetingContainer = styled.div`
  background-color: ${theme.colors.background};
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text};
  gap: 20px;
  border-radius: ${theme.borderRadius.ls};
`;

const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Greeting = styled.h2`
  font-size: 24px;
  font-weight: 900;
`;

const Welcome = styled(Greeting)``;

const ChangeBtn = styled.button`
  background-color: ${theme.colors.button};
  border-radius: ${theme.borderRadius.md};
  font-size: 18px;
  font-weight: 700;
`;

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };
  return (
    <GreetingContainer>
      <GreetingBox>
        <Greeting>{t("greeting")}</Greeting>
        <Welcome>{t("welcome")}</Welcome>
      </GreetingBox>
      <ChangeBtn onClick={toggleLanguage}>{t("changeLanguage")}</ChangeBtn>
    </GreetingContainer>
  );
}
