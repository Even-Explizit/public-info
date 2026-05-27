import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useUI } from "../context/UIContext";

const links = [
  { to: "/", no: "Hjem", en: "Home" },
  { to: "/projects", no: "Prosjekter", en: "Projects" },
  { to: "/about", no: "Om", en: "About" },
];

export default function Header() {
  const { language, setLanguage } = useUI();
  const location = useLocation();
  const isNo = language === "NO";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-white/6 bg-ink/70 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <svg
            viewBox="0 0 200 100"
            className="h-10 w-auto transition-transform group-hover:scale-[1.02]"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Explizit"
          >
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>
            <line x1="20" y1="40" x2="180" y2="40" stroke="url(#arrowGradient)" strokeWidth="5" />
            <polygon points="20,40 35,33 28,40" fill="#5eead4" />
            <polygon points="180,40 165,33 172,40" fill="#7dd3fc" />
            <text
              x="100"
              y="72"
              fontFamily="Instrument Serif, Georgia, serif"
              fontSize="22"
              fontStyle="italic"
              textAnchor="middle"
              fill="white"
            >
              Explizit
            </text>
          </svg>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 text-sm text-mist">
          {links.map(({ to, no, en }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`link-glow transition-colors ${
                  active ? "text-glow" : "hover:text-white"
                }`}
              >
                {isNo ? no : en}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setLanguage(isNo ? "EN" : "NO")}
            className="ml-2 px-3 py-1 text-xs border border-white/12 rounded-full hover:border-glow/40 hover:text-glow transition-colors"
          >
            {language}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
