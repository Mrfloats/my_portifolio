import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import AttachmentBanner from './components/AttachmentBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {
      // fallback
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  return (
    <div className="portfolio-app">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onTriggerToast={triggerToast}
      />
      <main id="main-content">
        <Hero onTriggerToast={triggerToast} />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <AttachmentBanner onTriggerToast={triggerToast} />
        <ContactSection onTriggerToast={triggerToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
