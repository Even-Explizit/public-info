import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";
import { NavCard } from "../components/ProjectCard";
import ContactCTA from "../components/ContactCTA";
import { profile } from "../data/profile";

export default function PublicHome() {
  const { language } = useUI();
  const isNo = language === "NO";
  const lang = isNo ? "NO" : "EN";

  return (
    <PublicLayout>
      <section className="space-y-16 md:space-y-24">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
          <div className="space-y-8 max-w-4xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.35em] text-glow/80 font-medium">
                {profile.name} · {profile.company}
              </p>
            </FadeIn>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-ui-text">
              <SplitText
                text={isNo ? "Åpen profil for konsulentoppdrag" : "An open profile for consulting"}
              />
            </h1>

            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl text-ui-muted max-w-2xl leading-relaxed">
                {profile.intro[lang]}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-glow link-glow"
              >
                {isNo ? "Les full profil →" : "Read full profile →"}
              </Link>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-2xl border border-ui-border bg-ui-surface p-6 space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-ui-muted">
                {isNo ? "Hva jeg kan bidra med" : "What I can help with"}
              </p>
              <ul className="space-y-3 text-sm text-ui-muted">
                <li>{isNo ? "Dataanalyse, rapportering og beslutningsstøtte" : "Analytics, reporting and decision support"}</li>
                <li>{isNo ? "Python/SQL-pipelines og automatisering" : "Python/SQL pipelines and automation"}</li>
                <li>{isNo ? "Maskinlæring (fra data til modell)" : "Machine learning (from data to model)"}</li>
              </ul>
              <div className="pt-2 flex flex-wrap gap-2">
                {profile.skills[lang].slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full border border-ui-border text-ui-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <motion.div
            className="inline-flex items-center gap-3 text-sm text-ui-muted border border-ui-border rounded-full px-4 py-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-glow" />
            {isNo
              ? "Tilgjengelig for konsulentoppdrag og prosjektbasert samarbeid"
              : "Available for consulting and project-based collaboration"}
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <NavCard
              to="/projects"
              label={isNo ? "Prosjekter" : "Projects"}
              desc={isNo ? "Master, Kvante, Aura Drone m.m." : "Master, Kvante, Aura Drone & more"}
              delay={0}
            />
            <NavCard
              to="/about"
              label={isNo ? "Om meg" : "About me"}
              desc={isNo ? "Utdanning, erfaring, bakgrunn" : "Education, experience, background"}
              delay={0.08}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="pt-8 border-t border-ui-border grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl italic text-ui-text">{profile.company}</h2>
              <p className="text-ui-muted max-w-xl leading-relaxed">
                {isNo
                  ? "Norsk holdingselskap etablert 2021 — rammeverk for teknisk utvikling, analyse og kontrollert eksperimentering. Ideelt for konsulentoppdrag og prosjekter."
                  : "Norwegian holding company founded 2021 — a framework for technical development, analysis and controlled experimentation. Ideal for consulting and project work."}
              </p>
            </div>
            <dl className="text-sm text-ui-muted space-y-2 font-mono">
              <div>
                <dt className="text-xs uppercase tracking-wider opacity-70">Org.nr</dt>
                <dd>{profile.orgNr}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider opacity-70">
                  {isNo ? "Kontakt" : "Contact"}
                </dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-glow hover:underline">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        <ContactCTA language={language} />
      </section>
    </PublicLayout>
  );
}
