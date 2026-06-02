'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:constant.blaszykpro@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-label">Échangeons</span>
            <h2 className="section-title">
              Me <span className="gradient-text">contacter</span>
            </h2>
            <p className="section-subtitle">
              Vous avez un projet ou une opportunité ? N&apos;hésitez pas à me contacter !
            </p>
          </div>
        </AnimateOnScroll>

        <div className="contact-grid">
          <AnimateOnScroll delay={200}>
            <div className="contact-info">
              <h3>
                Travaillons <span className="gradient-text">ensemble</span>
              </h3>
              <p>
                Je suis toujours ouvert à de nouvelles opportunités, que ce soit pour un stage,
                une alternance, un CDI ou un projet freelance. N&apos;hésitez pas à me contacter !
              </p>

              <div className="contact-links">
                <a
                  href="https://github.com/Thenoob24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-link-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">@Thenoob24</span>
                  </div>
                </a>

                <a
                  href="/cv/Constant-Blaszyk-CV.pdf"
                  download
                  className="contact-link-item"
                >
                  <div className="contact-link-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">Curriculum Vitae</span>
                    <span className="contact-link-value">Télécharger mon CV</span>
                  </div>
                </a>

                <div className="contact-link-item">
                  <div className="contact-link-icon">📍</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">Localisation</span>
                    <span className="contact-link-value">France</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <form className="glass-card contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Nom</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  placeholder="Votre nom"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Votre message..."
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Envoyer
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
