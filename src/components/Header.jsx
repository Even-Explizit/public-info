import React from 'react'
import { Link } from 'react-router-dom'
import { useUI } from '../context/UIContext'

export default function Header() {
  const { language, setLanguage, theme, setTheme } = useUI()

  return (
    <header className="w-full border-b border-gray-800 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <svg
            viewBox="0 0 200 100"
            className="h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arrow gradient */}
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            {/* Arrow line */}
            <line x1="20" y1="40" x2="180" y2="40" stroke="url(#arrowGradient)" strokeWidth="6" />
            {/* Arrow head left */}
            <polygon points="20,40 35,33 28,40" fill="#3B82F6" />
            {/* Arrow head right */}
            <polygon points="180,40 165,33 172,40" fill="#A855F7" />
            {/* Text */}
            <text x="100" y="70" fontFamily="serif" fontSize="20" fontStyle="italic" textAnchor="middle" fill="white">
              Explizit
            </text>
          </svg>
        </Link>

        {/* NAV + CONTROLS */}
        <nav className="flex items-center gap-8 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition">
            {language === 'NO' ? 'Hjem' : 'Home'}
          </Link>
          <Link to="/projects" className="hover:text-white transition">
            {language === 'NO' ? 'Prosjekter' : 'Projects'}
          </Link>
          <Link to="/about" className="hover:text-white transition">
            {language === 'NO' ? 'Om' : 'About'}
          </Link>

          {/* LANGUAGE */}
          <button
            onClick={() => setLanguage(language === 'NO' ? 'EN' : 'NO')}
            className="ml-6 px-2 py-1 text-xs border border-gray-700 rounded hover:border-gray-500 transition"
          >
            {language}
          </button>

          {/* THEME */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-2 py-1 text-xs border border-gray-700 rounded hover:border-gray-500 transition"
          >
            {theme === 'dark' ? '☾' : '☀︎'}
          </button>
        </nav>
      </div>
    </header>
  )
}
