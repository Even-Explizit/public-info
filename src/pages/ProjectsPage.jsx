import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import { useUI } from '../context/UIContext'

export default function ProjectsPage() {
  const { language } = useUI()

  return (
    <PublicLayout>
      <section className="space-y-12 max-w-4xl">
        <h1 className="text-3xl font-semibold">
          {language === 'NO' ? 'Prosjekter' : 'Projects'}
        </h1>

        {/* PROJECT 1 */}
        <div className="space-y-4 border-b border-gray-800 pb-8">
          <h2 className="text-xl font-semibold">Aura Drone</h2>

          <p className="text-gray-400">
            {language === 'NO'
              ? 'Aura er et nordisk droneselskap som leverer lysdroneshow. Prosjektet kombinerer luftfart, distribuerte systemer og visuell koreografi for gjennomføring av synkroniserte luftshow.'
              : 'Aura is a Nordic drone company specialising in large-scale light drone shows. The project combines aviation, distributed systems and visual choreography to deliver synchronized aerial performances.'}
          </p>

          <div className="text-sm text-gray-500 space-y-1">
            <div>
              {language === 'NO' ? 'Selskap: Aura AS' : 'Company: Aura AS'}
            </div>
            <div>
              {language === 'NO' ? 'Etablert: 2023' : 'Established: 2023'}
            </div>
            <div>
              {language === 'NO'
                ? 'Lokasjon: Ørsta, Norge'
                : 'Location: Ørsta, Norway'}
            </div>
          </div>

          <a
            href="https://www.auradrone.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-400 hover:text-blue-300 transition"
          >
            auradrone.no →
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {language === 'NO'
              ? 'Datadrevet analyse av aksjeselskap'
              : 'Data-driven Analysis of Corporations'}
          </h2>

          <p className="text-gray-400">
            {language === 'NO'
              ? 'Et selvstendig utviklet system for innhenting, strukturering og analyse av finansielle selskapsdata. Plattformen kombinerer flere datakilder med automatisert kvalitetssikring og sanntids helsekontroll.'
              : 'An independently developed system for collecting, structuring and analysing financial and corporate data. The platform integrates multiple data sources with automated validation and real-time health monitoring.'}
          </p>

          <p className="text-gray-400">
            {language === 'NO'
              ? 'Analyselogikk og beslutningsstøtte er separert for skalerbarhet og presisjon. Løsningen fungerer som et teknisk og analytisk rammeverk for videre forskning og utvikling.'
              : 'Analytical logic and decision support are deliberately separated to ensure scalability and precision. The solution serves as a technical and analytical framework for further research and development.'}
          </p>

          <p className="text-gray-500 text-sm">
            {language === 'NO'
              ? 'Internt utviklingsprosjekt'
              : 'Internal development project'}
          </p>
        </div>
      </section>
    </PublicLayout>
  )
}
