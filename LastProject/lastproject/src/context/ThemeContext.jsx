import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (!localStorage.getItem("themeConfig")) {
      localStorage.setItem("themConfig", theme);
      return;
    }
    setTheme(localStorage.getItem("themeConfig"));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};