import React from 'react'
import Header from '../components/Header'

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  )
}
