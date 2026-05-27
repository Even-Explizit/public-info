import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { useUI } from "../context/UIContext";
import FadeIn from "../components/FadeIn";
import SplitText from "../components/SplitText";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const { language } = useUI();
  const isNo = language === "NO";

  const projects = [
    {
      title: "Aura Drone",
      subtitle: isNo ? "Lysdroneshow · Norden" : "Light drone shows · Nordics",
      description: isNo
        ? "Aura er et nordisk droneselskap som leverer lysdroneshow. Prosjektet kombinerer luftfart, distribuerte systemer og visuell koreografi for synkroniserte luftshow."
        : "Aura is a Nordic drone company specialising in large-scale light drone shows — combining aviation, distributed systems and visual choreography.",
      meta: isNo ? ["Aura AS", "Ørsta", "2023"] : ["Aura AS", "Ørsta", "2023"],
      href: "https://www.auradrone.no/",
      hrefLabel: "auradrone.no",
    },
    {
      title: isNo ? "Datadrevet selskapsanalyse" : "Data-driven corporate analysis",
      subtitle: isNo ? "Internt utviklingsprosjekt" : "Internal development",
      description: isNo
        ? "Selvstendig system for innhenting, strukturering og analyse av finansielle selskapsdata — med automatisert kvalitetssikring og sanntids helsekontroll."
        : "Independent system for collecting, structuring and analysing financial corporate data — with automated validation and real-time health monitoring.",
      meta: isNo
        ? ["Finans", "Multi-kilde", "Privat"]
        : ["Finance", "Multi-source", "Private"],
    },
  ];

  return (
    <PublicLayout>
      <section className="space-y-12">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.35em] text-glow/80 mb-4">
            {isNo ? "Portefølje" : "Portfolio"}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl">
            <SplitText text={isNo ? "Prosjekter" : "Projects"} />
          </h1>
        </FadeIn>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 0.12} />
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
