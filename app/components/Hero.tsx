'use client';

import { useEffect, useRef, useState } from 'react';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero() {
  const [typedRole, setTypedRole] = useState('');
  const roles = ['Développeur Full-Stack', 'Étudiant BUT3 Informatique', 'Passionné DevOps'];
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current];

      if (!isDeleting.current) {
        setTypedRole(current.substring(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === current.length) {
          setTimeout(() => { isDeleting.current = true; }, 2000);
        }
      } else {
        setTypedRole(current.substring(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
    };

    const interval = setInterval(type, isDeleting.current ? 40 : 80);
    return () => clearInterval(interval);
  });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
        <ParticlesCanvas />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible pour opportunités
          </div>

          <h1 className="hero-name">
            Constant{' '}
            <span className="gradient-text-animated">Blaszyk</span>
          </h1>

          <p className="hero-role">
            {typedRole}
            <span style={{
              borderRight: '2px solid var(--accent-mid)',
              marginLeft: 2,
              animation: 'pulse 1s infinite'
            }}>
              &nbsp;
            </span>
          </p>

          <p className="hero-description">
            Étudiant en BUT3 Informatique passionné par le développement web, mobile et DevOps.
            Actuellement en alternance chez <strong>Maisons &amp; Cités</strong>, je conçois des
            applications modernes et performantes.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              Voir mes projets
            </a>
            <a href="/cv/Constant-Blaszyk-CV.pdf" download className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger CV
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value gradient-text">8+</div>
              <div className="hero-stat-label">Projets</div>
            </div>
            <div>
              <div className="hero-stat-value gradient-text">4+</div>
              <div className="hero-stat-label">Technologies</div>
            </div>
            <div>
              <div className="hero-stat-value gradient-text">3</div>
              <div className="hero-stat-label">Années d&apos;études</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-ring" />
            <img
              src="https://avatars.githubusercontent.com/u/108570445?v=4"
              alt="Constant Blaszyk"
              className="hero-avatar"
              width={340}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
