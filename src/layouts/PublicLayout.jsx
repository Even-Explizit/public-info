import React from "react";
import Header from "../components/Header";
import MeshBackground from "../components/MeshBackground";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-ink text-white relative">
      <MeshBackground />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {children}
      </main>
    </div>
  );
}
