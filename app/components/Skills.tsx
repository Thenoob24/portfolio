'use client';

import { useEffect, useRef, useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const skillCategories = [
  {
    icon: '🌐',
    title: 'Frontend',
    skills: [
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'React / Next.js', level: 80 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'SQL / Base de données', level: 80 },
    ],
  },
  {
    icon: '📱',
    title: 'Mobile',
    skills: [
      { name: 'Flutter / Dart', level: 75 },
      { name: 'UI/UX Mobile', level: 70 },
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Outils',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
];

const techBadges = [
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Java', color: '#f89820' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Git', color: '#F05032' },
  { name: 'SQL', color: '#CC2927' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-item-header">
        <span className="skill-item-name">{name}</span>
        <span className="skill-item-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">
              Mes <span className="gradient-text">compétences</span>
            </h2>
            <p className="section-subtitle">
              Technologies et outils que je maîtrise au quotidien
            </p>
          </div>
        </AnimateOnScroll>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <AnimateOnScroll key={cat.title} delay={i * 150}>
              <div className="glass-card skill-category">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="tech-stack">
            {techBadges.map(tech => (
              <span key={tech.name} className="tech-badge">
                <span className="tech-badge-dot" style={{ background: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
