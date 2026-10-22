import React from 'react';
import { CheckCircle2, Languages, Heart, Award, Sparkles, MapPin, Target, Activity, Laptop } from 'lucide-react';
import { personalInfo, personalStrengths, languages, interests } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section className="section-padding section-divider" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Main Story */}
          <div>
            <span className="section-label">Background & Drive</span>
            <h2 className="section-title">About Obey Kuyangamara</h2>
            
            <div className="about-text">
              <p className="lead">
                I am a third-year Software Engineering student at the Harare Institute of Technology (HIT) in Harare, Zimbabwe.
              </p>
              
              <p>
                My journey in technology centers on writing clean, scalable code and delivering software solutions that solve real challenges. I have hands-on experience building interactive web applications using React.js and modern JavaScript, cross-platform mobile apps with Flutter, and managing relational databases with SQL and cloud services like Firebase.
              </p>

              <p>
                I am disciplined, dependable, and thrive when tackling new frameworks or technical problems. Whether collaborating closely in agile team sprints or building independently, I am committed to producing well-documented, maintainable code.
              </p>

              <p>
                Currently, I am looking to contribute meaningfully to production environments through a <strong>full-time industrial attachment</strong> in software development, web development, or IT support.
              </p>
            </div>

            <div className="info-pills-row">
              <div className="info-pill">
                <MapPin size={14} style={{ display: 'inline', marginRight: '6px' }} />
                <span>Location: <strong>Harare, Zimbabwe</strong></span>
              </div>
              <div className="info-pill">
                <span>Availability: <strong>Full-Time Attachment</strong></span>
              </div>
              <div className="info-pill">
                <span>Target Roles: <strong>Software / Web / IT Support</strong></span>
              </div>
            </div>
          </div>

          {/* Strengths & Personal Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card strengths-card">
              <h3>
                <Award size={20} color="var(--accent)" />
                <span>Core Engineering Strengths</span>
              </h3>
              
              <div className="strength-list">
                {personalStrengths.map((str, idx) => (
                  <div key={idx} className="strength-item">
                    <CheckCircle2 size={18} />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="glass-card strengths-card">
              <h3>
                <Languages size={20} color="var(--warm)" />
                <span>Communication Languages</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {languages.map((l) => (
                  <div key={l.language} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600 }}>{l.language}</span>
                    <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: '24px' }}>
                <Heart size={20} color="var(--accent)" />
                <span>Interests & Activities</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {interests.map((item) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--accent)' }} />
                    <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>{item.title}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>— {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
