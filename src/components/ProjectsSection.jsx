import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, FolderGit2, Smartphone, Globe, HardDrive } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, projectCategories } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section className="section-padding section-divider" id="projects">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Applied Engineering Projects</h2>
          <p className="section-description">
            Selected software development, mobile application, and database projects engineered with modern frameworks, clean architecture, and real-world utility.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Project categories">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeTab === cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat === 'All' ? 'All Projects' : `${cat} Projects`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="glass-card project-card">
              {/* Thumbnail banner */}
              <div className="project-thumb">
                <div
                  className="project-thumb-art"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15 0%, var(--bg-chip) 100%)`,
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '24px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {project.category === 'Web' && <Globe size={24} color={project.color} />}
                    {project.category === 'Mobile' && <Smartphone size={24} color={project.color} />}
                    {project.category === 'Systems' && <HardDrive size={24} color={project.color} />}
                    <span className="mono" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      {project.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-meta">
                  <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {project.type}
                  </span>
                  <span className="skill-badge">{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Highlights */}
                <ul className="project-highlights">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="skill-tags" style={{ marginBottom: '16px' }}>
                  {project.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '6px 14px', fontSize: '0.84rem' }}
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>

                  <a
                    href="#contact"
                    className="btn btn-ghost"
                    style={{ padding: '6px 14px', fontSize: '0.84rem' }}
                  >
                    <span>Discuss Tech</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
