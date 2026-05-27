import React, { createContext, useContext, useEffect, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("explizit-theme");
    return stored === "light" ? "light" : "dark";
  });
  const [language, setLanguage] = useState("NO");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("explizit-theme", theme);
  }, [theme]);

  return (
    <UIContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
}
