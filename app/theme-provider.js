"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "dark", setTheme: () => {} });

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "dark"
            ? "dark bg-black"
            : "bg-white"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
