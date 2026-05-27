import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useUI } from "../context/UIContext";
import Logo from "./Logo";

const links = [
  { to: "/", no: "Hjem", en: "Home" },
  { to: "/projects", no: "Prosjekter", en: "Projects" },
  { to: "/about", no: "Om meg", en: "About me" },
];

export default function Header() {
  const { language, setLanguage, theme, setTheme } = useUI();
  const location = useLocation();
  const isNo = language === "NO";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-ui-border bg-ui-surface/80 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center group text-ui-text">
          <Logo className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 text-sm text-ui-muted">
          {links.map(({ to, no, en }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`link-glow transition-colors ${
                  active ? "text-glow" : "hover:text-ui-text"
                }`}
              >
                {isNo ? no : en}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setLanguage(isNo ? "EN" : "NO")}
            className="ml-2 px-3 py-1 text-xs border border-ui-border rounded-full hover:border-glow/40 hover:text-glow transition-colors"
          >
            {language}
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 text-xs border border-ui-border rounded-full hover:border-glow/40 hover:text-glow transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
