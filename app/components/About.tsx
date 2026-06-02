'use client';

import AnimateOnScroll from './AnimateOnScroll';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-label">Qui suis-je</span>
            <h2 className="section-title">
              À <span className="gradient-text">propos</span>
            </h2>
            <p className="section-subtitle">
              Passionné par l&apos;informatique depuis toujours, je transforme des idées en applications concrètes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="about-grid">
          <AnimateOnScroll delay={200}>
            <div className="about-text">
              <h3>
                Un développeur <span className="gradient-text">polyvalent</span>
              </h3>
              <p>
                Étudiant en <strong>BUT3 Informatique</strong>, je suis actuellement en alternance chez{' '}
                <strong>Maisons &amp; Cités</strong> où je développe des solutions logicielles innovantes.
              </p>
              <p>
                Mon parcours m&apos;a permis de toucher à de nombreuses technologies : du développement web
                frontend et backend avec <strong>TypeScript</strong> et <strong>Java</strong>, au développement
                mobile avec <strong>Flutter/Dart</strong>, en passant par le <strong>DevOps</strong> avec
                Docker et Kubernetes.
              </p>
              <p>
                Je suis constamment à la recherche de nouveaux défis et de nouvelles technologies à explorer.
                Mon objectif est de créer des applications performantes, élégantes et accessibles.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="about-info-label">Nom</div>
                <div className="about-info-value">Constant Blaszyk</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Formation</div>
                <div className="about-info-value">BUT3 Informatique</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Entreprise</div>
                <div className="about-info-value">Maisons &amp; Cités</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Localisation</div>
                <div className="about-info-value">📍 France</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">GitHub</div>
                <div className="about-info-value">
                  <a href="https://github.com/Thenoob24" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-mid)' }}>
                    @Thenoob24
                  </a>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Statut</div>
                <div className="about-info-value" style={{ color: '#22c55e' }}>
                  ✓ Disponible
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
