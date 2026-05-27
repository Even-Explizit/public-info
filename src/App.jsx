import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UIProvider } from './context/UIContext'
import PublicHome from './pages/PublicHome'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <UIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PublicHome />} />
        </Routes>
      </Router>
    </UIProvider>
  )
}
