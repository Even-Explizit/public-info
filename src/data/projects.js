export function getProjects(isNo) {
  return [
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
      title: "Master",
      subtitle: isNo ? "Maskinlæring · Vindkraft" : "Machine learning · Wind power",
      description: isNo
        ? "Masterprosjekt for modellering og prognoser av vindturbiners effektproduksjon med LSTM og XGBoost, strukturert i stegvis pipeline."
        : "Master project focused on wind turbine power forecasting with LSTM and XGBoost, organized in a staged pipeline.",
      meta: ["Python", "LSTM", "XGBoost", "Data pipeline"],
      href: "https://github.com/Even-Explizit/Master",
      hrefLabel: "GitHub / Master",
    },
    {
      title: "Power BI – hois meg!",
      subtitle: isNo ? "Rapportering · Visualisering" : "Reporting · Visualization",
      description: isNo
        ? "Åpent porteføljeprosjekt med tre datasett og rapporter: Norsk Salg, Global Retail og Klima & Energi — syntetiske data, DAX og dashboards."
        : "Open portfolio project with three datasets and reports: Norwegian Sales, Global Retail and Climate & Energy — synthetic data, DAX and dashboards.",
      meta: isNo
        ? ["Power BI", "DAX", "Streamlit", "Python"]
        : ["Power BI", "DAX", "Streamlit", "Python"],
      href: "https://github.com/Even-Explizit/power-bi-hois-meg",
      hrefLabel: "GitHub / power-bi-hois-meg",
    },
    {
      title: "Kvante",
      subtitle: isNo ? "Qiskit · Docker · Læringsprosjekt" : "Qiskit · Docker · Learning project",
      description: isNo
        ? "Lokalt læringsprosjekt i kvanteprogrammering med progresjon fra enkel qubit til entanglement og IBM Quantum-integrasjon."
        : "Local quantum programming learning project progressing from single-qubit basics to entanglement and IBM Quantum integration.",
      meta: ["Python", "Qiskit", "Docker", "IBM Quantum"],
      href: "https://github.com/Even-Explizit/Kvante",
      hrefLabel: "GitHub / Kvante",
    },
    {
      title: isNo ? "Datadrevet selskapsanalyse" : "Data-driven corporate analysis",
      subtitle: isNo ? "Internt utviklingsprosjekt" : "Internal development",
      description: isNo
        ? "Selvstendig system for innhenting, strukturering og analyse av finansielle selskapsdata — med automatisert kvalitetssikring og sanntids helsekontroll."
        : "Independent system for collecting, structuring and analysing financial corporate data — with automated validation and real-time health monitoring.",
      meta: isNo ? ["Finans", "Multi-kilde", "Privat"] : ["Finance", "Multi-source", "Private"],
      internal: true,
    },
  ];
}

export const githubProfiles = {
  current: {
    href: "https://github.com/Even-Explizit",
    label: "github.com/Even-Explizit",
  },
  legacy: {
    href: "https://github.com/591118/",
    label: "github.com/591118",
  },
};
