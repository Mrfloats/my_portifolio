import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, onToggleTheme, onTriggerToast }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar" style={{
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      borderColor: scrolled ? 'var(--border)' : 'transparent',
    }}>
      <div className="container navbar-inner">
        <a href="#top" className="brand-link" aria-label="Obey Kuyangamara Homepage">
          <div className="brand-logo" aria-hidden="true">OK</div>
          <div>
            <span style={{ display: 'block', fontWeight: 700, lineHeight: 1.1 }}>{personalInfo.name}</span>
            <span style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              HIT · Software Engineering
            </span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="status-pill" style={{ display: 'none', md: 'inline-flex' }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Attachment Ready</span>
          </div>

          <button
            type="button"
            className="btn-icon"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
            <span>Hire / Connect</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="btn-icon mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={handleLinkClick}
                style={{ width: '100%' }}
              >
                Hire / Connect Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
