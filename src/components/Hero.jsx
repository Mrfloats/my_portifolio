import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Mail, Sparkles, MapPin, Code2 } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onTriggerToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onTriggerToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="hero" id="top">
      {/* Background ambient lighting */}
      <div
        className="ambient-glow"
        style={{
          width: '500px',
          height: '500px',
          background: 'var(--accent)',
          top: '-10%',
          left: '-10%',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: '400px',
          height: '400px',
          background: 'var(--warm)',
          bottom: '0%',
          right: '5%',
        }}
      />

      <div className="container hero-grid">
        <div className="hero-content">
          <div>
            <div className="status-pill">
              <span className="pulse-dot" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          <h1>
            Software Engineering student building{' '}
            <span className="highlight">useful digital tools.</span>
          </h1>

          <p className="hero-lead">
            {personalInfo.leadBio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>
            <a href="#skills" className="btn btn-secondary">
              <Code2 size={17} />
              <span>Technical Skills</span>
            </a>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} color="var(--success)" /> : <Copy size={16} />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="hero-badge-row">
            <div className="stat-item">
              <span className="stat-value">3rd Year</span>
              <span className="stat-label">HIT Harare</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">React & Flutter</span>
              <span className="stat-label">Core Focus</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">Harare, ZW</span>
              <span className="stat-label">Location</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value" style={{ color: 'var(--warm)' }}>Full-Time</span>
              <span className="stat-label">Attachment Ready</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="monogram-card" aria-hidden="true">
          <div className="monogram-graphic">
            <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--warm)" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>

              {/* Decorative rounded base plates */}
              <rect x="20" y="20" width="340" height="340" rx="48" fill="var(--bg-chip)" opacity="0.6" />
              <rect x="35" y="35" width="310" height="310" rx="40" stroke="var(--border)" strokeWidth="1.5" fill="none" />
              
              {/* Accents */}
              <circle cx="280" cy="100" r="54" fill="url(#warmGrad)" opacity="0.9" />
              <rect x="50" y="210" width="180" height="120" rx="28" fill="url(#polyGrad)" />
              <rect x="200" y="170" width="130" height="160" rx="28" fill="var(--text-primary)" opacity="0.88" />
              <circle cx="120" cy="115" r="32" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="2" />
              
              {/* Monogram initials OK */}
              <text
                x="185"
                y="288"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="Bricolage Grotesque, sans-serif"
                fontSize="62"
                fontWeight="800"
                letterSpacing="-4"
              >
                OK
              </text>
            </svg>
          </div>

          <div className="monogram-badge-overlay">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ width: '7px', height: '7px' }} />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Harare Institute of Technology</span>
            </div>
            <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--accent)', fontWeight: 600 }}>
              B.Tech SE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
