'use client';

import AnimateOnScroll from './AnimateOnScroll';

const timelineItems = [
  {
    date: '2023 — 2026',
    title: 'BUT Informatique',
    company: 'IUT — Université',
    description:
      'Formation complète en informatique couvrant le développement web, mobile, les bases de données, le réseau, et la gestion de projets. Spécialisation en développement et déploiement d\'applications.',
    type: 'education',
  },
  {
    date: '2024 — 2026',
    title: 'Alternant Développeur',
    company: 'Maisons & Cités',
    description:
      'Développement et maintenance d\'applications internes. Mise en place de solutions DevOps avec Docker et Kubernetes. Travail en équipe avec les méthodologies Agile.',
    type: 'work',
  },
  {
    date: '2025',
    title: 'Projets Personnels',
    company: 'Freelance & Open Source',
    description:
      'Développement d\'applications variées : ReservResto (TypeScript), App Minecraft (Flutter), 2538 Wars (TypeScript). Exploration des technologies modernes du web et mobile.',
    type: 'project',
  },
  {
    date: '2022',
    title: 'Début sur GitHub',
    company: 'Parcours personnel',
    description:
      'Création du compte GitHub et premiers pas dans le monde du développement open source. Début de l\'apprentissage continu des technologies modernes.',
    type: 'milestone',
  },
];

export default function Timeline() {
  return (
    <section className="section" id="parcours" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-label">Expérience</span>
            <h2 className="section-title">
              Mon <span className="gradient-text">parcours</span>
            </h2>
            <p className="section-subtitle">
              Les étapes clés de ma formation et de mon expérience professionnelle
            </p>
          </div>
        </AnimateOnScroll>

        <div className="timeline">
          {timelineItems.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 200}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="glass-card timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
