import { Qor8Logo } from './Qor8Logo';
import { APPS_LIST } from '../data/apps';

const FOOTER_LINK_COLUMNS = [
  {
    title: 'Products',
    // Derived from the single product list so footer names never drift.
    links: APPS_LIST.map((app) => ({ label: app.name, href: `#${app.id}` })),
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Care & Support', href: '#care-support' },
      { label: 'Property Management', href: '#property' },
      { label: 'Workforce Management', href: '#workforce' },
      { label: 'Compliance', href: '#compliance' },
      { label: 'Operations', href: '#operations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Partners', href: '#partners' },
      { label: 'News & Insights', href: '#news' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Centre', href: '#help-centre' },
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Documentation', href: '#docs' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">

        <div className="footer-top-grid">

          {/* Logo and Tagline Column */}
          <div className="footer-brand-col">
            <Qor8Logo size={36} />
            <p className="footer-tagline">
              The operating system for modern organisations.
            </p>
            <a href="#learn-more" className="footer-learn-more">
              Learn more <span className="arrow">&rarr;</span>
            </a>
            <div className="footer-socials">
              <a href="#linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0-.46 5.25a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_LINK_COLUMNS.map((col) => (
            <div className="footer-links-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Ready to Get Started Column */}
          <div className="footer-promo-col">
            <div className="promo-box">
              <h4>Ready to get started?</h4>
              <p>Explore our tutorials and see Qor8 in action.</p>
              <button className="promo-btn">
                View tutorials
                <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2026 Qor8 Ltd. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
