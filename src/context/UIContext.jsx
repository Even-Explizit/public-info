import React, { createContext, useContext, useState } from 'react'

const UIContext = createContext()

export function UIProvider({ children }) {
  const [language, setLanguage] = useState('NO')
  const [theme, setTheme] = useState('dark')

  return (
    <UIContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}
