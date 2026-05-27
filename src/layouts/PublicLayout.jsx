import React from "react";
import Header from "../components/Header";
import { useUI } from "../context/UIContext";

export default function PublicLayout({ children }) {
  const { theme } = useUI();

  return (
    <div className="min-h-screen bg-ui-bg text-ui-text relative transition-colors duration-300">
      <div className={`ambient ${theme}`} />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {children}
      </main>
    </div>
  );
}
