import React from 'react';
import { Qor8Logo } from './components/Qor8Logo';
import { EcosystemHero } from './components/EcosystemHero';
import './App.css';

// SVG Icons for the 9 Qor8 apps
const APP_ICONS = {
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  hr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  prop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  fix: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  verify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  mind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  buy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

const NAV_ITEMS = [
  { label: 'Products', dropdown: true },
  { label: 'Solutions', dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Company', dropdown: true },
  { label: 'Pricing', href: '#pricing' },
];

const FOOTER_LINK_COLUMNS = [
  {
    title: 'Products',
    links: [
      { label: 'Qor8 Link', href: '#link' },
      { label: 'Qor8 Time', href: '#time' },
      { label: 'Qor8 HR', href: '#hr' },
      { label: 'Qor8 Prop', href: '#prop' },
      { label: 'Qor8 Fix', href: '#fix' },
      { label: 'Qor8 Verify', href: '#verify' },
      { label: 'Qor8 Mind', href: '#mind' },
      { label: 'Qor8 Care', href: '#care' },
      { label: 'Qor8 Buy', href: '#buy' },
    ],
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

const APPS_LIST = [
  { id: 'link', name: 'Qor8 Link', label: 'Communications', color: 'var(--color-app-link)', icon: APP_ICONS.link },
  { id: 'time', name: 'Qor8 Time', label: 'Time & Attendance', color: 'var(--color-app-time)', icon: APP_ICONS.time },
  { id: 'hr', name: 'Qor8 HR', label: 'Workforce', color: 'var(--color-app-hr)', icon: APP_ICONS.hr },
  { id: 'prop', name: 'Qor8 Prop', label: 'Property & Assets', color: 'var(--color-app-prop)', icon: APP_ICONS.prop },
  { id: 'fix', name: 'Qor8 Fix', label: 'Maintenance', color: 'var(--color-app-fix)', icon: APP_ICONS.fix },
  { id: 'verify', name: 'Qor8 Verify', label: 'Identity', color: 'var(--color-app-verify)', icon: APP_ICONS.verify },
  { id: 'mind', name: 'Qor8 Mind', label: 'Wellbeing', color: 'var(--color-app-mind)', icon: APP_ICONS.mind },
  { id: 'care', name: 'Qor8 Care', label: 'Care & Support', color: 'var(--color-app-care)', icon: APP_ICONS.care },
  { id: 'buy', name: 'Qor8 Buy', label: 'Procurement', color: 'var(--color-app-buy)', icon: APP_ICONS.buy },
];

export default function App() {
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
    <div className="app-page">
      {/* 1. Header Navigation */}
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
              Request a demo
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

      {/* Main Content Sections */}
      <main className="main-content">
        
        {/* 2. Hero Section */}
        <section className="hero-section">
          <div className="hero-grid-container">
            {/* Left Hero Texts */}
            <div className="hero-left">
              <div className="power-badge">
                The Power of Qor8
              </div>
              <h1 className="hero-headline">
                One Ecosystem.<br />
                <span className="gradient-text">Total Control.</span>
              </h1>
              <h2 className="hero-subtitle">
                <span className="sub-blue">Secure.</span>{' '}
                <span className="sub-purple">Connected.</span>{' '}
                <span className="sub-green">Independent.</span>
              </h2>
              <p className="hero-paragraph">
                Everything your organisation needs.<br />One intelligent platform.
              </p>
              
              <div className="hero-ctas">
                <button className="primary-cta">
                  Explore solutions
                  <span style={{ marginLeft: '8px' }}>&rarr;</span>
                </button>
                <button className="secondary-cta">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                  Watch overview
                </button>
              </div>

              {/* Trusted by Section */}
              <div className="trusted-by-container">
                <p className="trusted-by-text">Trusted by 500+ organisations across</p>
                <div className="trusted-by-row">
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span>Healthcare</span>
                  </div>
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>Housing</span>
                  </div>
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M9 22V12h6v10M2 10h20M12 2v20"/></svg>
                    <span>Facilities</span>
                  </div>
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span>Security</span>
                  </div>
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M12 2v20M2 10h20M2 16h20"/></svg>
                    <span>Education</span>
                  </div>
                  <div className="trusted-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M12 2v20M2 12h20M7 2h10M7 22h10"/></svg>
                    <span>Construction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Mockups */}
            <div className="hero-right">
              <div className="hero-mockup-group">

              {/* Desktop Browser Mockup */}
              <div className="desktop-mockup">
                <div className="mockup-header-bar">
                  <div className="mockup-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="mockup-address">
                    <Qor8Logo size={14} showText={true} />
                  </div>
                  <div className="mockup-header-right">
                    <div className="mockup-today-dropdown">
                      <span>Today</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="dropdown-arrow"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mockup-header-icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                    <div className="mockup-profile-pic">Z</div>
                  </div>
                </div>

                <div className="mockup-body">
                  {/* Left Sidebar */}
                  <div className="mockup-sidebar">
                    <div className="sidebar-item active">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                      <span>Home</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M21 9H3M21 15H3" /></svg>
                      <span>Dashboard</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      <span>Messages</span>
                      <span className="sidebar-badge">12</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                      <span>Tasks</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      <span>Calendar</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zM6 12h8" /></svg>
                      <span>Reports</span>
                    </div>
                    <div className="sidebar-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                      <span>Settings</span>
                    </div>
                  </div>

                  {/* Main Dashboard Space */}
                  <div className="mockup-content">
                    <div className="welcome-banner">
                      <h2>Good morning, Zaid 👋</h2>
                    </div>

                    {/* Dashboard Widgets */}
                    <div className="widgets-row">
                      <div className="mini-widget">
                        <span className="widget-title">Staff clocked in</span>
                        <div className="widget-main-value">142</div>
                        <span className="trend-green">↑ 9% vs yesterday</span>
                      </div>
                      <div className="mini-widget">
                        <span className="widget-title">Compliance score</span>
                        <div className="widget-main-value">98.8%</div>
                        <span className="trend-green">↑ 3.2%</span>
                      </div>
                      <div className="mini-widget">
                        <span className="widget-title">Tasks due</span>
                        <div className="widget-main-value">24</div>
                        <span className="trend-red">↑ High priority</span>
                      </div>
                    </div>

                    {/* Bottom Split Layout */}
                    <div className="mockup-split">
                      {/* Left: Live Activity */}
                      <div className="live-activity-box">
                        <h3>Live activity</h3>
                        <div className="activity-item">
                          <span className="activity-status status-clocked">●</span>
                          <span className="activity-desc">John Smith clocked in</span>
                          <span className="activity-time">08:57 AM</span>
                        </div>
                        <div className="activity-item">
                          <span className="activity-status status-note">●</span>
                          <span className="activity-desc">Care note added</span>
                          <span className="activity-time">09:15 AM</span>
                        </div>
                        <div className="activity-item">
                          <span className="activity-status status-med">●</span>
                          <span className="activity-desc">Medication given</span>
                          <span className="activity-time">09:42 AM</span>
                        </div>
                        <div className="activity-item">
                          <span className="activity-status status-incident">●</span>
                          <span className="activity-desc">Incident reported</span>
                          <span className="activity-time">10:02 AM</span>
                        </div>
                        <div className="activity-footer">
                          <a href="#activities" className="mockup-link">View all activity</a>
                        </div>
                      </div>

                      {/* Right: Property & Compliance Widgets */}
                      <div className="sidebar-widgets-box">
                        <div className="properties-widget">
                          <h3>Properties</h3>
                          <div className="property-card-mock">
                            {/* Stylized CSS/HTML modern building block */}
                            <div className="property-image-building">
                              <div className="sky-bg">
                                <div className="sun"></div>
                                <div className="cloud-1"></div>
                              </div>
                              <div className="building-silhouette">
                                <span className="window"></span>
                                <span className="window"></span>
                                <span className="window"></span>
                                <span className="window"></span>
                                <span className="window"></span>
                                <span className="window"></span>
                              </div>
                              <div className="building-silhouette-2">
                                <span className="window"></span>
                                <span className="window"></span>
                                <span className="window"></span>
                              </div>
                            </div>
                            <div className="property-details">
                              <span className="prop-val">18</span>
                              <span className="prop-lbl">Active sites</span>
                            </div>
                          </div>
                        </div>

                        <div className="alerts-widget">
                          <h3>Compliance alerts</h3>
                          <div className="alert-row">
                            <span className="alert-dot red-dot"></span>
                            <span className="alert-name">Medication review due</span>
                            <span className="alert-qty">2 sites</span>
                            <span className="priority-badge red-badge">High</span>
                          </div>
                          <div className="alert-row">
                            <span className="alert-dot orange-dot"></span>
                            <span className="alert-name">Fire risk assessment</span>
                            <span className="alert-qty">1 site</span>
                            <span className="priority-badge orange-badge">Medium</span>
                          </div>
                          <div className="alert-row">
                            <span className="alert-dot green-dot"></span>
                            <span className="alert-name">Policy update required</span>
                            <span className="alert-qty">3 policies</span>
                            <span className="priority-badge green-badge">Low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay */}
              <div className="mobile-mockup">
                <div className="phone-screen">
                  {/* Phone Status Bar */}
                  <div className="phone-status-bar">
                    <span className="phone-time">9:41</span>
                    <div className="phone-notch"></div>
                    <div className="phone-icons">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px' }}><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c3.9 3.89 10.23 3.89 14.12 0l-.62-1.78C19.26 16.07 20 14.12 20 12c0-4.97-4.03-9-9-9z"/></svg>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px', margin: '0 4px' }}><path d="M2 22h20V2z"/></svg>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }}><rect x="2" y="7" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="18" y="11" width="2" height="2" rx="1"/></svg>
                    </div>
                  </div>

                  {/* Phone Home Header */}
                  <div className="phone-header">
                    <h2>Home</h2>
                    <div className="phone-avatar">Z</div>
                  </div>

                  {/* Gradient Day at a glance Card */}
                  <div className="phone-glance-card">
                    <h3>Your day at a glance</h3>
                    <p>You have 6 tasks due today</p>
                    <div className="glance-badge">6+</div>
                  </div>

                  {/* Quick actions grid */}
                  <div className="phone-actions-section">
                    <h4>Quick actions</h4>
                    <div className="actions-grid">
                      <div className="action-button-wrapper">
                        <div className="action-icon bg-orange">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        </div>
                        <span>Log care note</span>
                      </div>
                      <div className="action-button-wrapper">
                        <div className="action-icon bg-red">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                        </div>
                        <span>Report incident</span>
                      </div>
                      <div className="action-button-wrapper">
                        <div className="action-icon bg-blue">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2"/></svg>
                        </div>
                        <span>Clock in / out</span>
                      </div>
                      <div className="action-button-wrapper">
                        <div className="action-icon bg-purple">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        </div>
                        <span>View rota</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Updates */}
                  <div className="phone-updates-section">
                    <div className="updates-header">
                      <h4>Recent updates</h4>
                      <a href="#viewall">View all</a>
                    </div>
                    <div className="updates-list">
                      <div className="phone-update-item">
                        <div className="update-icon">✓</div>
                        <div className="update-details">
                          <span className="update-title">Policy updated</span>
                          <span className="update-time">2h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Navigation Bar */}
                  <div className="phone-nav-bar">
                    <div className="phone-nav-item active">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                      <span>Home</span>
                    </div>
                    <div className="phone-nav-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      <span>Messages</span>
                    </div>
                    <div className="phone-nav-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                      <span>Tasks</span>
                    </div>
                    <div className="phone-nav-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem hero ported from main — orbit animation stage */}
        <EcosystemHero />

        {/* 3. Nine Enterprise Applications / One Connected Ecosystem */}
        <section className="ecosystem-section">
          <div className="ecosystem-container">
            <h2 className="section-title">
              Nine enterprise applications. One connected ecosystem.
            </h2>
            
            {/* Apps Grid */}
            <div className="apps-grid">
              {APPS_LIST.map((app) => (
                <div key={app.id} className="app-card" style={{ '--accent-color': app.color } as React.CSSProperties}>
                  <div className="app-card-icon-container">
                    {app.icon}
                  </div>
                  <h3 className="app-card-title">{app.name}</h3>
                  <p className="app-card-subtitle">{app.label}</p>
                </div>
              ))}
            </div>

            {/* Connecting Mesh Lines and Timeline Grid */}
            <div className="timeline-connector-section">
              <div className="timeline-line">
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot-center">
                  <div className="timeline-dot active-dot"></div>
                </div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
              </div>

              <div className="connection-mesh-container">
                <svg className="connecting-lines-svg" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(15, 23, 42, 0.06)" />
                      <stop offset="100%" stopColor="rgba(37, 99, 235, 0.5)" />
                    </linearGradient>
                  </defs>
                  {/* Lines starting from the corresponding dot X coords down to the center badge */}
                  <path d="M 55 0 Q 55 70 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 166 0 Q 166 80 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <path d="M 277 0 Q 277 90 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M 388 0 Q 388 100 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <path d="M 500 0 L 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <path d="M 611 0 Q 611 100 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <path d="M 722 0 Q 722 90 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M 833 0 Q 833 80 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <path d="M 944 0 Q 944 70 500 110" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                
                {/* Central Glowing Core Symbol badge */}
                <div className="ecosystem-core-node">
                  <div className="core-inner-glow"></div>
                  <Qor8Logo size={36} showText={false} />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Built to deliver outcomes that matter */}
        <section className="outcomes-section">
          <div className="outcomes-container">
            <h2 className="section-title">
              Built to deliver outcomes that matter
            </h2>

            <div className="outcomes-grid">
              
              {/* Card 1: Communicate */}
              <div className="outcome-card card-comms">
                <div className="outcome-header">
                  <div className="outcome-icon bg-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div className="outcome-titles">
                    <h3>Communicate</h3>
                    <p>Everything in one secure place.</p>
                  </div>
                </div>
                <div className="outcome-metrics">
                  <div className="metric-left">
                    <span className="metric-lbl">Messages sent</span>
                    <span className="metric-val">1,284</span>
                    <span className="metric-trend green">↑ 18%</span>
                  </div>
                  <div className="metric-chart">
                    {/* SVG Bar Chart */}
                    <svg viewBox="0 0 100 40" className="chart-svg">
                      <rect x="5" y="20" width="8" height="20" rx="1.5" fill="#e2e8f0" />
                      <rect x="18" y="25" width="8" height="15" rx="1.5" fill="#e2e8f0" />
                      <rect x="31" y="15" width="8" height="25" rx="1.5" fill="#e2e8f0" />
                      <rect x="44" y="28" width="8" height="12" rx="1.5" fill="#e2e8f0" />
                      <rect x="57" y="18" width="8" height="22" rx="1.5" fill="#2563eb" />
                      <rect x="70" y="10" width="8" height="30" rx="1.5" fill="#2563eb" />
                      <rect x="83" y="5" width="8" height="35" rx="1.5" fill="#2563eb" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2: Manage */}
              <div className="outcome-card card-manage">
                <div className="outcome-header">
                  <div className="outcome-icon bg-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="outcome-titles">
                    <h3>Manage</h3>
                    <p>People, properties and compliance.</p>
                  </div>
                </div>
                <div className="outcome-metrics">
                  <div className="metric-left">
                    <span className="metric-lbl">Compliance score</span>
                    <span className="metric-val">98.8%</span>
                    <span className="metric-trend green">↑ 3.2%</span>
                  </div>
                  <div className="metric-chart">
                    {/* SVG Line Chart */}
                    <svg viewBox="0 0 100 40" className="chart-svg">
                      <path d="M 5 35 Q 25 32 45 20 T 85 8 T 95 5" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 5 35 Q 25 32 45 20 T 85 8 T 95 5 L 95 40 L 5 40 Z" fill="url(#greenChartGrad)" opacity="0.1" />
                      <defs>
                        <linearGradient id="greenChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16a34a" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3: Automate */}
              <div className="outcome-card card-automate">
                <div className="outcome-header">
                  <div className="outcome-icon bg-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <div className="outcome-titles">
                    <h3>Automate</h3>
                    <p>Reduce administration by up to 80%.</p>
                  </div>
                </div>
                <div className="outcome-metrics">
                  <div className="metric-left">
                    <span className="metric-lbl">Tasks automated</span>
                    <span className="metric-val">1,248</span>
                    <span className="metric-trend green">↑ 24%</span>
                  </div>
                  <div className="metric-chart">
                    {/* SVG Bar Chart (Orange) */}
                    <svg viewBox="0 0 100 40" className="chart-svg">
                      <rect x="5" y="28" width="8" height="12" rx="1.5" fill="#e2e8f0" />
                      <rect x="18" y="22" width="8" height="18" rx="1.5" fill="#e2e8f0" />
                      <rect x="31" y="26" width="8" height="14" rx="1.5" fill="#e2e8f0" />
                      <rect x="44" y="15" width="8" height="25" rx="1.5" fill="#e2e8f0" />
                      <rect x="57" y="18" width="8" height="22" rx="1.5" fill="#ea580c" />
                      <rect x="70" y="8" width="8" height="32" rx="1.5" fill="#ea580c" />
                      <rect x="83" y="4" width="8" height="36" rx="1.5" fill="#ea580c" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4: Analyse */}
              <div className="outcome-card card-analyse">
                <div className="outcome-header">
                  <div className="outcome-icon bg-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                  </div>
                  <div className="outcome-titles">
                    <h3>Analyse</h3>
                    <p>Real-time dashboards and insights.</p>
                  </div>
                </div>
                <div className="outcome-metrics">
                  <div className="metric-left">
                    <span className="metric-lbl">Decisions made</span>
                    <span className="metric-val">624</span>
                    <span className="metric-trend green">↑ 15%</span>
                  </div>
                  <div className="metric-chart">
                    {/* SVG Line Chart (Purple) */}
                    <svg viewBox="0 0 100 40" className="chart-svg">
                      <path d="M 5 30 Q 25 34 45 25 T 85 10 T 95 6" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 5 30 Q 25 34 45 25 T 85 10 T 95 6 L 95 40 L 5 40 Z" fill="url(#purpleChartGrad)" opacity="0.1" />
                      <defs>
                        <linearGradient id="purpleChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Trust Indicators Ribbon */}
        <section className="trust-stats-section">
          <div className="trust-stats-container">
            <div className="trust-stat-col">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <div className="trust-stat-text">
                <strong>Trusted by</strong>
                <span>500+ organisations worldwide</span>
              </div>
            </div>
            <div className="trust-stat-col">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div className="trust-stat-text">
                <strong>99.9%</strong>
                <span>Platform uptime</span>
              </div>
            </div>
            <div className="trust-stat-col">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className="trust-stat-text">
                <strong>500+</strong>
                <span>Active organisations</span>
              </div>
            </div>
            <div className="trust-stat-col">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="trust-stat-text">
                <strong>2M+</strong>
                <span>Users on platform</span>
              </div>
            </div>
            <div className="trust-stat-col">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="trust-stat-text">
                <strong>24/7</strong>
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 6. Footer Section */}
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
                <p>Book a demo and see Qor8 in action.</p>
                <button className="promo-btn">
                  Request a demo
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

    </div>
  );
}
