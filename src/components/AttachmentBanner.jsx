import React, { useState } from 'react';
import { Briefcase, ArrowRight, Phone, Mail, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AttachmentBanner({ onTriggerToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${personalInfo.name} | ${personalInfo.email} | ${personalInfo.phone}`);
    setCopied(true);
    onTriggerToast('Contact details copied to clipboard!');
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="container" style={{ paddingBlock: 'clamp(36px, 6vw, 64px)' }}>
      <div className="attachment-banner">
        <div className="attachment-banner-inner">
          <div>
            <div className="status-pill" style={{ marginBottom: '16px' }}>
              <span className="pulse-dot" />
              <span>Industrial Attachment Candidate</span>
            </div>

            <h2>Ready to add immediate value to your technical team.</h2>

            <p>
              Looking for a dedicated Software Engineering intern or industrial attachment student in Harare? I bring solid skills in React.js web apps, Flutter mobile engineering, database queries, and dependable system support.
            </p>

            <div className="attachment-roles">
              <span className="attachment-role-tag">Software Development</span>
              <span className="attachment-role-tag">Frontend & React.js</span>
              <span className="attachment-role-tag">Mobile (Flutter)</span>
              <span className="attachment-role-tag">IT Support & Systems</span>
            </div>
          </div>

          <div className="attachment-actions">
            <a
              href={`mailto:${personalInfo.email}?subject=Industrial%20Attachment%20Opportunity%20-%20Obey%20Kuyangamara`}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Mail size={17} />
              <span>Offer Attachment Position</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <Phone size={17} />
              <span>Call +263 78 033 6088</span>
            </a>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleCopy}
              style={{ width: '100%' }}
            >
              {copied ? <Check size={16} color="var(--success)" /> : <Copy size={16} />}
              <span>{copied ? 'Copied Details' : 'Copy All Contact Info'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
