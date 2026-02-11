import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext({});

const translations = {
  ko: {
    greeting: "안녕하세요",
    welcome: "환영합니다",
    changeLanguage: "언어 변경",
  },
  en: {
    greeting: "Hello",
    welcome: "Welcome",
    changeLanguage: "Change Language",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");
  const t = (key) => {
    return translations[language][key];
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const useLanguageContext = useContext(LanguageContext);
  return useLanguageContext;
};
