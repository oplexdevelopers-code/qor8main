import React from 'react';
import './SupportLoremSection.css';

const ICONS = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
  mapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

const SUPPORT_ITEMS = [
  { icon: ICONS.phone, title: 'Call Us', desc: '+1 (800) 555-0199' },
  { icon: ICONS.mail, title: 'Email Us', desc: 'support@qor8.com' },
  { icon: ICONS.mapPin, title: 'Visit Us', desc: 'London, United Kingdom' },
];

const PHILOSOPHY_TEXT =
  "Simplicity isn't the absence of features. It's the presence of restraint. Every screen, every workflow, every decision we make exists to give you back time — and once you have time, everything else follows.";

export const SupportLoremSection: React.FC = () => {
  return (
    <section className="grid-section support-lorem-section" aria-label="Support">
      <div className="support-lorem-blend">
        <div className="support-strip">
          {SUPPORT_ITEMS.map((item) => (
            <div className="support-strip-item" key={item.title}>
              <span className="support-strip-icon">{item.icon}</span>
              <div className="support-strip-text">
                <h3 className="support-strip-title">{item.title}</h3>
                <p className="support-strip-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lorem-divider" aria-hidden="true" />

        <div className="lorem-section">
          <p className="lorem-text">{PHILOSOPHY_TEXT}</p>
        </div>
      </div>
    </section>
  );
};

export default SupportLoremSection;
