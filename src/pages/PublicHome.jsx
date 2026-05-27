import React from "react";
import { motion } from "framer-motion";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";
import { NavCard } from "../components/ProjectCard";

export default function PublicHome() {
  const { language } = useUI();
  const isNo = language === "NO";

  return (
    <PublicLayout>
      <section className="space-y-16 md:space-y-24">
        <div className="space-y-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.35em] text-glow/80 font-medium">
              {isNo ? "Forskning · Systemer · Analyse" : "Research · Systems · Analysis"}
            </p>
          </FadeIn>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
            <SplitText
              text={isNo ? "Uavhengig teknisk utvikling" : "Independent technical craft"}
            />
          </h1>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-mist max-w-2xl leading-relaxed">
              {isNo
                ? "Datadrevet analyse, systemdesign og langsiktig forskning — med fokus på finansielle markeder og komplekse systemer."
                : "Data-driven analysis, system design and long-horizon research — focused on financial markets and complex systems."}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <motion.div
              className="inline-flex items-center gap-3 text-sm text-mist/80 border border-white/8 rounded-full px-4 py-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-glow" />
              {isNo
                ? "Utvalgte prosjekter er private — kun via invitasjon"
                : "Selected projects are private — by invitation only"}
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <NavCard
              to="/projects"
              label={isNo ? "Prosjekter" : "Projects"}
              desc={isNo ? "Aura Drone, finansanalyse m.m." : "Aura Drone, financial analysis & more"}
              delay={0}
            />
            <NavCard
              to="/about"
              label={isNo ? "Om Explizit" : "About Explizit"}
              desc={isNo ? "Selskap, bakgrunn, kontekst" : "Company, background, context"}
              delay={0.08}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="pt-8 border-t border-white/8 grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl italic text-white/95">Explizit AS</h2>
              <p className="text-mist max-w-xl leading-relaxed">
                {isNo
                  ? "Norsk holdingselskap etablert 2021 — et strukturert rammeverk for teknisk utvikling, analyse og kontrollert eksperimentering."
                  : "Norwegian holding company founded 2021 — a structured framework for technical development, analysis and controlled experimentation."}
              </p>
            </div>
            <dl className="text-sm text-mist/90 space-y-2 font-mono">
              <div>
                <dt className="text-xs uppercase tracking-wider text-mist/60">Org.nr</dt>
                <dd>927 609 924</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-mist/60">
                  {isNo ? "Adresse" : "Address"}
                </dt>
                <dd>Hovdanveien 56, 8387 Fredvang</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
