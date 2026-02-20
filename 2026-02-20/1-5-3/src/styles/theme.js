export const theme = {
  colors: {
    primary: "#141728",
    primaryLight: "#9d46ff",
    primaryDark: "#0a00b6",
    secondary: "#252B43",
    secondaryLight: "#66fff9",
    secondaryDark: "#00a896",
    background: "#040710",
    surface: "#ffffff",
    text: "#3F476C",
    textSecondary: "#505F7E",
    error: "#b00020",
    badge: "#fff3d6",
    button: "#abbdff",
    accent: "#ff4081",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    ls: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    ls: "30px",
    round: "50%",
  },
  shadows: {
    card: "0  4px 6px rgba(0, 0, 0, 0.1)",
    hover: "0 8px 12px rgba(0, 0, 0, 0.15)",
  },
};
//theme.js

export const lightTheme = {
  mode: "light",
  colors: {
    primary: "#8A4FFF", // 보라
    secondary: "#D4BBFF", // 연보라
    accent: "#FFB7D5", // 연분홍
    background: "#ffffff",
    surface: "#f8f9fa",
    text: "#212529",
    textSecondary: "#868e96",
    border: "#eaeaea",
    error: "#ff4d4f",
    success: "#52c41a",
    warning: "#faad14",
    info: "#1890ff",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#A673FF",
    secondary: "#D4BBFF",
    accent: "#FFB7D5",
    background: "#121212",
    surface: "#1e1e1e",
    text: "#f8f9fa",
    textSecondary: "#adb5bd",
    border: "#495057",
    error: "#ff7875",
    success: "#73d13d",
    warning: "#ffc53d",
    info: "#40a9ff",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};
export const combinedTheme = lightTheme;
