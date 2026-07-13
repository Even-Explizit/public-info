import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";
import ContactCTA from "../components/ContactCTA";
import { profile } from "../data/profile";
import { getAge } from "../utils/age";

function renderAboutParagraph(text) {
  if (!text.includes("{{age}}")) return text;

  const parts = text.split("{{age}}");
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span>{getAge(profile.birthDate)}</span>}
    </React.Fragment>
  ));
}

export default function AboutPage() {
  const { language } = useUI();
  const isNo = language === "NO";
  const lang = isNo ? "NO" : "EN";

  return (
    <PublicLayout>
      <section className="space-y-14 max-w-5xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.35em] text-glow/80 mb-4">
            {isNo ? "Founder · Explizit AS" : "Founder · Explizit AS"}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-3 text-ui-text">
            <SplitText text={profile.name} />
          </h1>
          <p className="text-lg text-ui-muted">{profile.title[lang]}</p>
          <p className="text-sm text-ui-muted mt-2">{profile.location}</p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-glow link-glow"
          >
            {isNo ? "LinkedIn-profil →" : "LinkedIn profile →"}
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-ui-muted text-lg leading-relaxed max-w-3xl">
            {profile.intro[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-ui-muted mb-4">
              {isNo ? "Kompetanse" : "Skills"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills[lang].map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full border border-ui-border text-ui-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.25}>
            <div className="rounded-2xl border border-ui-border bg-ui-surface p-6 space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-ui-muted">
                {isNo ? "Utdanning" : "Education"}
              </h2>
              <ul className="space-y-4">
                {profile.education[lang].map((item) => (
                  <li key={`${item.degree}-${item.field}`} className="text-sm">
                    <div className="font-medium text-ui-text">{item.degree}</div>
                    <div className="text-ui-muted">{item.field}</div>
                    <div className="text-ui-muted/80 text-xs mt-0.5">{item.school}</div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-ui-border bg-ui-surface p-6 space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-ui-muted">
                {isNo ? "Interesser" : "Interests"}
              </h2>
              <ul className="space-y-3 text-sm text-ui-muted list-disc list-inside">
                {profile.interests[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.32}>
          <div className="rounded-2xl border border-ui-border bg-ui-surface p-6 md:p-8 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-ui-muted">
              {isNo ? "Om meg" : "About me"}
            </h2>
            <div className="space-y-4">
              {profile.about[lang].map((para, i) => (
                <p key={i} className="text-ui-muted leading-relaxed text-sm md:text-base">
                  {renderAboutParagraph(para)}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="rounded-2xl border border-ui-border bg-ui-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ui-muted">
                LinkedIn
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-ui-text">
                {isNo ? "Utvidet profil" : "Extended profile"}
              </h2>
              <p className="text-ui-muted max-w-md">
                {isNo
                  ? "Se full bakgrunn, erfaring og utdanning på min private LinkedIn-profil."
                  : "See my full background, experience and education on my personal LinkedIn profile."}
              </p>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-ui-border text-ui-text hover:border-glow/40 hover:text-glow transition-colors whitespace-nowrap"
            >
              linkedin.com/in/eventorb →
            </a>
          </div>
        </FadeIn>

        <ContactCTA language={language} />
      </section>
    </PublicLayout>
  );
}
