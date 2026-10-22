import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section className="section-padding section-divider" id="education">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-label">Academic Foundations</span>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-description">
            Rigorous undergraduate studies in Software Engineering at Harare Institute of Technology combined with analytical science backgrounds.
          </p>
        </div>

        <div className="timeline" style={{ marginTop: '36px' }}>
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="glass-card timeline-card">
              <div className="timeline-period">
                <span className="timeline-year">{edu.period}</span>
                <span className="timeline-location">
                  <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {edu.location}
                </span>
                <span className="skill-badge" style={{ marginTop: '8px', width: 'fit-content' }}>
                  {edu.status}
                </span>
              </div>

              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <div className="timeline-org">{edu.institution}</div>
                <p className="timeline-desc">{edu.description}</p>

                <div>
                  <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Relevant Coursework & Competencies
                  </span>
                  <div className="timeline-tags">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tag-chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
