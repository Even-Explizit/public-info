import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";
import ProjectCard from "../components/ProjectCard";
import { getProjects, githubProfiles } from "../data/projects";

export default function ProjectsPage() {
  const { language } = useUI();
  const isNo = language === "NO";
  const projects = getProjects(isNo);

  return (
    <PublicLayout>
      <section className="space-y-12">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.35em] text-glow/80 mb-4">
            {isNo ? "Portefølje" : "Portfolio"}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ui-text">
            <SplitText text={isNo ? "Prosjekter" : "Projects"} />
          </h1>
          <p className="text-ui-muted text-lg leading-relaxed max-w-3xl mt-6">
            {isNo
              ? "Utvalgte prosjekter og utviklingsarbeid — rettet mot samarbeid og konsulentoppdrag, ikke jobbsøking."
              : "Selected projects and development work — focused on collaboration and consulting, not job applications."}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-glow/20 bg-ui-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-glow/80">
                GitHub
              </p>
              <h2 className="font-serif text-2xl text-ui-text">
                {isNo ? "Åpne kodeprosjekter" : "Open code projects"}
              </h2>
              <p className="text-ui-muted max-w-xl text-sm md:text-base">
                {isNo
                  ? "På min nye GitHub-profil ligger prosjektene jeg jobber med nå — kodede og åpne. Jeg har også egne private prosjekter som ikke vises offentlig."
                  : "My current GitHub profile hosts the projects I'm working on now — coded and public. I also maintain private projects that aren't shown here."}
              </p>
            </div>
            <a
              href={githubProfiles.current.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-glow/40 text-glow hover:bg-glow/10 transition-colors whitespace-nowrap"
            >
              {githubProfiles.current.label} →
            </a>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={0.15 + i * 0.1} />
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="rounded-2xl border border-ui-border bg-ui-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ui-muted">
                {isNo ? "Gammel profil" : "Legacy profile"}
              </p>
              <h2 className="font-serif text-2xl text-ui-text">
                {isNo ? "Fra skoletiden" : "From my student days"}
              </h2>
              <p className="text-ui-muted max-w-xl text-sm md:text-base">
                {isNo
                  ? "Min eldre GitHub-profil inneholder gamle prosjekter og annet fra studietiden — før den nye profilen rettet mot det jeg holder på med nå."
                  : "My older GitHub profile holds legacy projects and other work from my student days — before the new profile focused on what I'm building now."}
              </p>
            </div>
            <a
              href={githubProfiles.legacy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-ui-border text-ui-text hover:border-glow/40 hover:text-glow transition-colors whitespace-nowrap"
            >
              {githubProfiles.legacy.label} →
            </a>
          </div>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
