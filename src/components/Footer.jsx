import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
            © {new Date().getFullYear()} {personalInfo.name}
          </div>
          <div style={{ fontSize: '0.82rem' }}>
            Software Engineering Student · Harare Institute of Technology (HIT), Harare, Zimbabwe.
          </div>
        </div>

        <div className="footer-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Mail size={16} />
            <span>Email</span>
          </a>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{ padding: '6px 14px', fontSize: '0.82rem' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
