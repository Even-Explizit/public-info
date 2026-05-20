import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import { useUI } from '../context/UIContext'

export default function AboutPage() {
  const { language } = useUI()

  return (
    <PublicLayout>
      <section className="space-y-10 max-w-3xl">
        <h1 className="text-3xl font-semibold">
          {language === 'NO' ? 'Om' : 'About'}
        </h1>

        <div className="space-y-4 text-gray-400">
          {language === 'NO' ? (
            <>
              <p>
                Explizit AS er grunnlagt og drevet av Even Torbjørnsen,
                sivilingeniør. Med bachelor i økonomi fra UiT, bachelor som dataingeniør ved HVL,
                og anvendt datateknologi fra HVL.
              </p>

              <p>
                Født i Tromsø i 1997 og oppvokst hovedsakelig i Lofoten.
                Bakgrunnen kombinerer teknisk utdanning med praktisk
                erfaring fra ulike miljøer, inkludert Forsvaret og
                internasjonalt arbeid.
              </p>

              <p>
                Den faglige bakgrunnen inkluderer bachelor i dataingeniørfag,
                master i anvendt datateknologi og pågående studier innen finans.
                Arbeidet har fokus på systemdesign, datadrevet analyse og
                langsiktig utvikling.
              </p>

              <p>
                Explizit AS ble etablert i 2021 som et holdingselskap og
                rammeverk for strukturert utvikling, forskning og
                kontrollert gjennomføring av tekniske prosjekter.
              </p>
            </>
          ) : (
            <>
              <p>
                Explizit AS is founded and operated by Even Torbjørnsen,
                an independent engineer with a background in applied
                computer science, finance and system-oriented analysis.
              </p>

              <p>
                Born in Tromsø in 1997 and raised primarily in Lofoten,
                his background combines technical education with practical
                experience from diverse environments, including military
                service and international work.
              </p>

              <p>
                His academic background includes a Bachelor's degree in
                Computer Engineering, a Master's degree in Applied Computer
                Science, and ongoing studies in finance. The work focuses on
                system design, data-driven analysis and long-term development.
              </p>

              <p>
                Explizit AS was founded in 2021 as a holding and development
                company, intended to support structured experimentation,
                research and the controlled execution of technical projects.
              </p>
            </>
          )}
        </div>

        <div className="text-sm text-gray-500 pt-6 border-t border-gray-800 space-y-1">
          <div>
            {language === 'NO' ? 'Grunnlegger' : 'Founder'}: Even Torbjørnsen
          </div>
          <div>
            {language === 'NO'
              ? 'Lokasjon: Lofoten / Bergen, Norge'
              : 'Location: Lofoten / Bergen, Norway'}
          </div>
          <div>
            {language === 'NO'
              ? 'Etablert: 2021'
              : 'Established: 2021'}
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
