import React from "react";
import { useTheme } from "../hook/useTheme";

const WrapperTheme = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }
    >
      {children}
    </div>
  );
};

export default WrapperTheme;