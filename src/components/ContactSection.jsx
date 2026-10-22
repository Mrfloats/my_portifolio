import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, MessageSquare, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onTriggerToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Industrial Attachment Inquiry',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onTriggerToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    onTriggerToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onTriggerToast('Please fill in all required fields.');
      return;
    }

    const mailSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hi Obey,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
    onTriggerToast('Opening email client...');
  };

  return (
    <section className="section-padding section-divider" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Direct Channels */}
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let’s discuss an attachment opportunity.</h2>
            <p className="section-description">
              I am available for full-time industrial attachment placement in software engineering, frontend web development, mobile apps, or IT infrastructure support. Feel free to reach out directly.
            </p>

            <div className="contact-channels">
              {/* Email channel */}
              <div className="channel-card">
                <div className="channel-icon">
                  <Mail size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="channel-value"
                    style={{ display: 'block' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCopyEmail}
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                >
                  {copiedEmail ? <Check size={14} color="var(--success)" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone channel */}
              <div className="channel-card">
                <div className="channel-icon">
                  <Phone size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Direct Phone / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="channel-value"
                    style={{ display: 'block' }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCopyPhone}
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                >
                  {copiedPhone ? <Check size={14} color="var(--success)" /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* GitHub channel */}
              <div className="channel-card">
                <div className="channel-icon">
                  <GithubIcon size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">GitHub Profile</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>github.com/{personalInfo.githubUsername}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Location channel */}
              <div className="channel-card">
                <div className="channel-icon">
                  <MapPin size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Location</span>
                  <div className="channel-value">Harare, Zimbabwe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={19} color="var(--accent)" />
              <span>Send a Quick Message</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Enter your details to initiate an email directly to Obey.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe / HR Manager"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Attachment Opportunity / Interview"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about the attachment role, team requirements, or project..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                <Send size={16} />
                <span>Compose & Send Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
