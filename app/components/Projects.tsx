'use client';

import AnimateOnScroll from './AnimateOnScroll';

const projects = [
  {
    name: 'MakeSense',
    description:
      'Application web collaborative développée en TypeScript pour faciliter la prise de décision en entreprise. Interface moderne et intuitive.',
    tags: ['TypeScript', 'Web App', '2026'],
    github: 'https://github.com/Thenoob24/makesense',
    icon: '💡',
  },
  {
    name: 'Maintenance Appli G2',
    description:
      'Application de gestion de maintenance développée en Java. Système complet de suivi et de gestion des interventions techniques.',
    tags: ['Java', 'Backend', '2026'],
    github: 'https://github.com/Thenoob24/maintenanceAppli_G2',
    icon: '🔧',
  },
  {
    name: 'ReservResto',
    description:
      'Système de réservation de restaurant en TypeScript. Permet la gestion des réservations, des tables et des créneaux horaires.',
    tags: ['TypeScript', 'Full-Stack', '2025'],
    github: 'https://github.com/Thenoob24/ReservResto',
    icon: '🍽️',
  },
  {
    name: 'TP Kubernetes',
    description:
      'Travaux pratiques sur Kubernetes : déploiement, orchestration de conteneurs, scaling et gestion de clusters.',
    tags: ['Kubernetes', 'DevOps', '2025'],
    github: 'https://github.com/Thenoob24/Blaszyk-Constant-TP-Kubernetes',
    icon: '☸️',
  },
  {
    name: '2538 Wars',
    description:
      'Projet ludique développé en TypeScript. Application web interactive avec des mécaniques de jeu engageantes.',
    tags: ['TypeScript', 'Game', '2025'],
    github: 'https://github.com/Thenoob24/2538-wars',
    icon: '⚔️',
  },
  {
    name: 'App Minecraft',
    description:
      'Application mobile développée avec Flutter/Dart liée à l\'univers Minecraft. Interface native multiplateforme iOS/Android.',
    tags: ['Dart', 'Flutter', 'Mobile', '2025'],
    github: 'https://github.com/Thenoob24/appminecraft',
    icon: '🎮',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Mes <span className="gradient-text">projets</span>
            </h2>
            <p className="section-subtitle">
              Une sélection de projets réalisés au cours de ma formation et en entreprise
            </p>
          </div>
        </AnimateOnScroll>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={i * 100}>
              <div className="glass-card project-card">
                <div className="project-card-header">
                  <div className="project-card-icon">{project.icon}</div>
                  <div className="project-card-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                      aria-label={`Voir ${project.name} sur GitHub`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-description">{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
