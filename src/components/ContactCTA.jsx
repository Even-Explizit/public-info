import FadeIn from "./FadeIn";
import { profile } from "../data/profile";

export default function ContactCTA({ language }) {
  const isNo = language === "NO";

  return (
    <FadeIn delay={0.3}>
      <div className="rounded-2xl border border-glow/20 bg-ui-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-glow/80">
            {isNo ? "Kontakt" : "Contact"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-ui-text">
            {isNo ? "Interessert i samarbeid?" : "Interested in working together?"}
          </h2>
          <p className="text-ui-muted max-w-md">
            {isNo
              ? "Ta kontakt for konsulentoppdrag, prosjekter eller en uformell prat om data og analyse."
              : "Reach out for consulting, projects or an informal conversation about data and analytics."}
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-glow/40 text-glow hover:bg-glow/10 transition-colors whitespace-nowrap"
        >
          {profile.email} →
        </a>
      </div>
    </FadeIn>
  );
}
