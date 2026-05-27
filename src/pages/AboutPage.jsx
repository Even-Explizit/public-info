import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";

const paragraphs = {
  NO: [
    "Explizit AS er grunnlagt og drevet av Even Torbjørnsen, sivilingeniør. Med bachelor i økonomi fra UiT, bachelor som dataingeniør ved HVL, og anvendt datateknologi fra HVL.",
    "Født i Tromsø i 1997 og oppvokst hovedsakelig i Lofoten. Bakgrunnen kombinerer teknisk utdanning med praktisk erfaring fra ulike miljøer, inkludert Forsvaret og internasjonalt arbeid.",
    "Den faglige bakgrunnen inkluderer bachelor i dataingeniørfag, master i anvendt datateknologi og pågående studier innen finans. Arbeidet har fokus på systemdesign, datadrevet analyse og langsiktig utvikling.",
    "Explizit AS ble etablert i 2021 som et holdingselskap og rammeverk for strukturert utvikling, forskning og kontrollert gjennomføring av tekniske prosjekter.",
  ],
  EN: [
    "Explizit AS is founded and operated by Even Torbjørnsen, an independent engineer with a background in applied computer science, finance and system-oriented analysis.",
    "Born in Tromsø in 1997 and raised primarily in Lofoten, his background combines technical education with practical experience from diverse environments, including military service and international work.",
    "His academic background includes a Bachelor's degree in Computer Engineering, a Master's degree in Applied Computer Science, and ongoing studies in finance. The work focuses on system design, data-driven analysis and long-term development.",
    "Explizit AS was founded in 2021 as a holding and development company, intended to support structured experimentation, research and the controlled execution of technical projects.",
  ],
};

export default function AboutPage() {
  const { language } = useUI();
  const isNo = language === "NO";
  const text = paragraphs[language];

  return (
    <PublicLayout>
      <section className="space-y-12 max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.35em] text-glow/80 mb-4">
            {isNo ? "Bakgrunn" : "Background"}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-8">
            <SplitText text={isNo ? "Om Explizit" : "About Explizit"} />
          </h1>
        </FadeIn>

        <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8">
          {text.map((para, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <p className="text-mist leading-relaxed text-base md:text-lg">{para}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="pt-8 border-t border-white/8 grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-xs uppercase tracking-wider text-mist/60 mb-1">
                {isNo ? "Grunnlegger" : "Founder"}
              </div>
              <div className="text-white">Even Torbjørnsen</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-mist/60 mb-1">
                {isNo ? "Lokasjon" : "Location"}
              </div>
              <div className="text-white">Lofoten / Bergen</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-mist/60 mb-1">
                {isNo ? "Etablert" : "Established"}
              </div>
              <div className="text-white">2021</div>
            </div>
          </div>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
