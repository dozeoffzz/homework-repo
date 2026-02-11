import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageToggle from "./contexts/LanguageToggle";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <LanguageProvider>
          <LanguageToggle />
        </LanguageProvider>
      </MainLayout>
    </>
  );
}
