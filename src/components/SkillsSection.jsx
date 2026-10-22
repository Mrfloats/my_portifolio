import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  Terminal, 
  Server, 
  Palette, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skills, skillCategories } from '../data/portfolioData';

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  database: Database,
  terminal: Terminal,
  server: Server,
  palette: Palette,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding section-divider" id="skills">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-label">Technical Proficiency</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of the programming languages, frameworks, developer tools, and IT infrastructure skills I practice daily.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Layers;
            return (
              <div key={skill.title} className="glass-card skill-card">
                <div className="skill-header">
                  <div className="skill-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="skill-badge">{skill.proficiency}</span>
                </div>

                <h3>{skill.title}</h3>
                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
