import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import { useUI } from '../context/UIContext'

export default function PublicHome() {
  const { language } = useUI()

  return (
    <PublicLayout>
      <section className="space-y-10 max-w-3xl">
        {/* HERO */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            explizit.no
          </h1>

          <p className="text-lg text-gray-400">
            {language === 'NO'
              ? 'Uavhengig forskning, systemutvikling og datadrevet analyse med fokus på finansielle markeder og komplekse systemer.'
              : 'Independent research, system development and data-driven analysis focused on financial markets and complex systems.'}
          </p>

          <p className="text-sm text-gray-500">
            {language === 'NO'
              ? 'Utvalgte prosjekter er private og tilgjengelige kun via invitasjon.'
              : 'Selected projects are private and available by invitation only.'}
          </p>
        </div>

        {/* COMPANY */}
        <div className="pt-8 border-t border-gray-800 space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">
            Explizit AS
          </h2>

          <p className="text-gray-400">
            {language === 'NO'
              ? 'Explizit AS er et norsk holdingselskap etablert for å støtte langsiktig teknisk, analytisk og forskningsbasert utvikling. Selskapet fungerer som et strukturert rammeverk for selvstendig utvikling og eksperimentering.'
              : 'Explizit AS is a Norwegian holding and development company founded to support long-term technical, analytical and research-oriented projects. The company serves as a structured framework for independent development and experimentation.'}
          </p>

          <div className="text-sm text-gray-500 space-y-1">
            <div>
              {language === 'NO'
                ? 'Organisasjonsnummer: 927 609 924'
                : 'Organisation number: 927 609 924'}
            </div>
            <div>
              {language === 'NO' ? 'Etablert: 2021' : 'Established: 2021'}
            </div>
            <div>
              {language === 'NO'
                ? 'Adresse: Hovdanveien 56, 8387 Fredvang'
                : 'Address: Hovdanveien 56, 8387 Fredvang'}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
