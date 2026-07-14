import React from 'react';
import { Qor8Logo } from './Qor8Logo';

const NAV_ITEMS: { label: string; href?: string }[] = [
  { label: 'Products' },
  { label: 'Solutions' },
  { label: 'Resources' },
  { label: 'Company' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header() {
  const [navOpen, setNavOpen] = React.useState(false);

  const renderNavItems = () =>
    NAV_ITEMS.map((item) =>
      item.href ? (
        <a key={item.label} href={item.href} className="nav-link" onClick={() => setNavOpen(false)}>
          {item.label}
        </a>
      ) : (
        <div key={item.label} className="nav-item">
          <span>{item.label}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-arrow"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      )
    );

  return (
    <header className="app-header">
      <div className="header-content">
        <Qor8Logo size={34} />

        <nav className="header-nav" aria-label="Main Navigation">
          {renderNavItems()}
        </nav>

        <div className="header-right">
          <button className="search-button" aria-label="Search site">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <a href="#signin" className="signin-link" aria-label="Profile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
          <button className="demo-button">
            View tutorials
            <span className="demo-arrow">&rarr;</span>
          </button>
          <button
            className="mobile-menu-button"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {navOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {navOpen && (
        <nav className="mobile-nav-drawer" aria-label="Mobile Navigation">
          {renderNavItems()}
        </nav>
      )}
    </header>
  );
}
