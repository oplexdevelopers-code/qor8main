import React, { useState, useRef } from 'react';
import { Qor8Logo } from './components/Qor8Logo';
import { OrbitEcosystem } from './components/OrbitEcosystem';
import { SpeakingAvatarWebGL } from './components/SpeakingAvatarWebGL';
import { ProductCoverflow } from './components/ProductCoverflow';
import { ProductStack } from './components/ProductStack';
import { StripeInteractiveShowcase } from './components/StripeInteractiveShowcase';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css';

// SVG paths for product card squircles
const PRODUCT_ICONS = {
  chatShield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  ),
  docShield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10 13l2 2 4-4" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  clockPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  gearShield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  shieldCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  handsHeart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  shoppingCart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

const ALL_PRODUCTS = [
  {
    id: 'link1',
    title: 'Qor8 Link',
    subtitle: 'Secure Communications',
    description: 'Private messaging, announcements, collaboration, tasks and secure file sharing for your teams.',
    icon: PRODUCT_ICONS.chatShield,
    iconBgColor: 'var(--color-brand-blue)',
    titleColor: 'var(--color-brand-blue)',
    accentRgb: '0, 85, 255',
  },
  {
    id: 'core',
    title: 'Qor8 Core',
    subtitle: 'Business & Personal Management',
    description: 'Documents, tasks, workflows, approvals, records and reminders — all in one place.',
    icon: PRODUCT_ICONS.docShield,
    iconBgColor: 'var(--color-brand-blue)',
    titleColor: 'var(--color-brand-blue)',
    accentRgb: '0, 85, 255',
    isNew: true,
  },
  {
    id: 'hr',
    title: 'Qor8 HR',
    subtitle: 'Workforce Operations',
    description: 'Manage employees, onboarding, compliance, training, leave and performance.',
    icon: PRODUCT_ICONS.people,
    iconBgColor: 'var(--color-brand-purple)',
    titleColor: 'var(--color-brand-purple)',
    accentRgb: '140, 80, 255',
  },
  {
    id: 'time',
    title: 'Qor8 Time',
    subtitle: 'Time & Attendance',
    description: 'Clock in/out, rotas, GPS verification, shifts, timesheets, overtime and scheduling.',
    icon: PRODUCT_ICONS.clockPin,
    iconBgColor: 'var(--color-brand-blue)',
    titleColor: 'var(--color-brand-blue)',
    accentRgb: '0, 85, 255',
  },
  {
    id: 'link2',
    title: 'Qor8 Link',
    subtitle: 'Secure Communications',
    description: 'Private messaging, announcements, collaboration, tasks and secure file sharing for your teams.',
    icon: PRODUCT_ICONS.chatShield,
    iconBgColor: 'var(--color-brand-purple)',
    titleColor: 'var(--color-brand-purple)',
    accentRgb: '140, 80, 255',
  },
  {
    id: 'prop',
    title: 'Qor8 Prop',
    subtitle: 'Property & Asset Management',
    description: 'Manage properties, tenancies, inspections, maintenance and asset performance.',
    icon: PRODUCT_ICONS.building,
    iconBgColor: 'var(--color-brand-green)',
    titleColor: 'var(--color-brand-green)',
    accentRgb: '16, 185, 129',
  },
  {
    id: 'fix',
    title: 'Qor8 Fix',
    subtitle: 'Issue & Maintenance Management',
    description: 'Report, assign, track and resolve issues with contractors, budgets and compliance.',
    icon: PRODUCT_ICONS.gearShield,
    iconBgColor: 'var(--color-brand-orange)',
    titleColor: 'var(--color-brand-orange)',
    accentRgb: '255, 120, 0',
  },
  {
    id: 'verify',
    title: 'Qor8 Verify',
    subtitle: 'Identity Verification',
    description: 'Verify identity, documents, proof of address and compliance credentials.',
    icon: PRODUCT_ICONS.shieldCheck,
    iconBgColor: 'var(--color-brand-teal)',
    titleColor: 'var(--color-brand-teal)',
    accentRgb: '0, 200, 165',
  },
  {
    id: 'mind',
    title: 'Qor8 Mind',
    subtitle: 'Mental Wellbeing',
    description: 'AI-powered wellbeing support, stress management, resilience tools and guidance.',
    icon: PRODUCT_ICONS.brain,
    iconBgColor: 'var(--color-brand-purple)',
    titleColor: 'var(--color-brand-purple)',
    accentRgb: '140, 80, 255',
  },
  {
    id: 'care',
    title: 'Qor8 Care',
    subtitle: 'Care & Support',
    description: 'Compassionate care and support services for people and communities.',
    icon: PRODUCT_ICONS.handsHeart,
    iconBgColor: 'var(--color-brand-green)',
    titleColor: 'var(--color-brand-green)',
    accentRgb: '16, 185, 129',
  },
  {
    id: 'buy',
    title: 'Qor8 Buy',
    subtitle: 'Procurement & Purchasing',
    description: 'Control purchasing, suppliers, approvals, orders, invoices and spend management.',
    icon: PRODUCT_ICONS.shoppingCart,
    iconBgColor: 'var(--color-brand-orange)',
    titleColor: 'var(--color-brand-orange)',
    accentRgb: '255, 120, 0',
  },
];

const PILLARS = [
  {
    id: 'secure',
    title: 'Secure by Design',
    description: 'Security built into every application.',
    accentRgb: '0, 85, 255',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 12 14 15 11" />
      </svg>
    ),
  },
  {
    id: 'connected',
    title: 'Connected by Nature',
    description: 'Every solution works seamlessly together.',
    accentRgb: '124, 58, 237',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: 'standalone',
    title: 'Standalone by Design',
    description: 'Every application operates independently.',
    accentRgb: '13, 148, 136',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Powered',
    description: 'Access anywhere. Always available.',
    accentRgb: '22, 163, 74',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'scale',
    title: 'Built to Scale',
    description: 'Designed for organisations of every size.',
    accentRgb: '234, 88, 12',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

interface SolutionTab {
  id: 'all' | 'comms' | 'operations' | 'assets';
  label: string;
  activeNodes: string[];
  activeCardIds: string[];
}

const SOLUTION_TABS: SolutionTab[] = [
  {
    id: 'all',
    label: 'All Solutions',
    activeNodes: [],
    activeCardIds: ['link1', 'core', 'hr', 'time', 'link2', 'prop', 'fix', 'verify', 'mind', 'care', 'buy'],
  },
  {
    id: 'comms',
    label: 'Communications',
    activeNodes: ['Qor8 Link', 'Qor8 Time'],
    activeCardIds: ['link1', 'link2', 'time'],
  },
  {
    id: 'operations',
    label: 'Workforce & Operations',
    activeNodes: ['Qor8 HR', 'Qor8 Time', 'Qor8 Verify', 'Qor8 Fix'],
    activeCardIds: ['core', 'hr', 'time', 'verify', 'fix'],
  },
  {
    id: 'assets',
    label: 'Assets & Care',
    activeNodes: ['Qor8 Prop', 'Qor8 Care', 'Qor8 Mind', 'Qor8 Buy', 'Qor8 Fix'],
    activeCardIds: ['prop', 'fix', 'mind', 'care', 'buy'],
  },
];

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>('all');
  const [activePillarId, setActivePillarId] = useState<string | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 140;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.05,
    freezeOnceVisible: true,
  });

  const activeTab = SOLUTION_TABS.find(t => t.id === activeTabId) || SOLUTION_TABS[0];
  const visibleProducts = ALL_PRODUCTS.filter(card => activeTabId === 'all' || activeTab.activeCardIds.includes(card.id));

  return (
    <div className="app-page">
      {/* 1. Header Navigation Banner */}
      <header className="app-header">
        <div className="header-content">
          <Qor8Logo size={34} />
          
          <nav className="header-nav" aria-label="Main Navigation">
            <div className="nav-item">
              <span>Products</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-arrow"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className="nav-item">
              <span>Solutions</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-arrow"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className="nav-item">
              <span>Resources</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-arrow"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className="nav-item">
              <span>Company</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-arrow"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>

          <div className="header-right">
            <button className="search-button" aria-label="Search site">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <a href="#signin" className="signin-link" aria-label="Sign in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
            <button className="demo-button" id="header-demo-button">Request a demo</button>
          </div>
        </div>
      </header>

      {/* 2. Hero Segment */}
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-left">
            <div className="power-badge">
              The Power of Qor8
            </div>
            <h1 className="hero-headline">
              One Ecosystem.<br />
              <span style={{ color: 'var(--color-brand-blue)' }}>Total Control.</span>
            </h1>
            <h2 className="hero-subtitle">
              <span style={{ color: 'var(--color-brand-blue)' }}>Secure.</span>{' '}
              <span style={{ color: 'var(--color-brand-purple)' }}>Connected.</span>{' '}
              <span style={{ color: 'var(--color-brand-teal)' }}>Independent.</span>
            </h2>
            <p className="hero-paragraph">
              Qor8 brings together your people, communications, operations, compliance, wellbeing 
              and property management into one connected ecosystem.
            </p>
            <div className="hero-ctas">
              <button className="primary-cta" id="explore-solutions-cta">
                Explore solutions
                <span style={{ marginLeft: '8px' }}>&rarr;</span>
              </button>
              <button className="secondary-cta" id="watch-overview-cta">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px', marginRight: '6px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch overview
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className={`stage-wrapper orbit-stage ${activeTabId === 'all' ? 'active' : ''}`}>
              <OrbitEcosystem activeNodes={activeTab.activeNodes} activeTabId={activeTabId} />
            </div>
            <div className={`stage-wrapper avatar-stage ${activeTabId !== 'all' ? 'active' : ''}`}>
              {activeTabId !== 'all' && (
                <SpeakingAvatarWebGL activeTabId={activeTabId} />
              )}
            </div>
          </div>
        </section>

        {/* 3. Product Cards & Tabs Segment */}
        <section 
          id="products-showcase" 
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className={`reveal-on-scroll grid-section ${isIntersecting ? 'revealed' : ''}`}
          aria-label="Qor8 Products Matrix"
        >
          {/* Tabs Filter Bar Centered Directly Above Card Grid */}
          <div className="hero-tabs-container">
            <div className="hero-tabs-scroll-wrapper">
              <button 
                className="tab-scroll-btn scroll-left" 
                onClick={() => scrollTabs('left')}
                aria-label="Scroll tabs left"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              
              <div ref={tabsRef} className="hero-tabs" aria-label="Solutions filter matrix">
                {SOLUTION_TABS.map(tab => (
                  <button 
                    key={tab.id}
                    id={`hero-tab-${tab.id}`}
                    className={`hero-tab-button ${activeTabId === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button 
                className="tab-scroll-btn scroll-right" 
                onClick={() => scrollTabs('right')}
                aria-label="Scroll tabs right"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Unified Product Grid Matrix: desktop 3D coverflow carousel, mobile wallet-card stack */}
          <ProductCoverflow products={visibleProducts} activeTabId={activeTabId} />
          <ProductStack products={visibleProducts} />
        </section>

        {/* 4. Stripe-style Interactive Showcase Dashboard (spans full width after cards) */}
        <section id="dashboard-showcase" className="grid-section" style={{ paddingBottom: 'var(--spacing-9)' }}>
          <StripeInteractiveShowcase activeTabId={activeTabId} />
        </section>

        {/* 5. Key Pillars Banner — floating glass capsule, Apple-style nav bar.
             All five show icon + title by default; clicking one expands its
             description while the rest collapse down to icon-only. */}
        <section className="pillars-section" aria-label="Core Pillars">
          <div className="pillars-grid">
            {PILLARS.map((pillar) => {
              const isExpanded = activePillarId === pillar.id;
              const isCollapsed = activePillarId !== null && !isExpanded;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  className={`pillar-card ${isExpanded ? 'expanded' : ''} ${isCollapsed ? 'collapsed' : ''}`}
                  id={`pillar-${pillar.id}`}
                  style={{ '--accent-rgb': pillar.accentRgb } as React.CSSProperties}
                  onClick={() => setActivePillarId(prev => (prev === pillar.id ? null : pillar.id))}
                  aria-expanded={isExpanded}
                >
                  <div className="pillar-icon">
                    {pillar.icon}
                  </div>
                  <div className="pillar-text">
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 6. Apple-style Q&A Accordion Section */}
        <QASection />
      </main>

      {/* 5. Trust Banner / Footer Section */}
      <footer className="app-footer" aria-label="Footer and security indicators">
        <div className="trust-banner">
          <div className="trust-content">
            
            <div className="trust-col" id="trust-indicator-security">
              <div className="trust-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="trust-text-wrapper">
                <h4 className="trust-title">Security. Privacy. Reliability.</h4>
                <p className="trust-desc">At the core of everything we build.</p>
              </div>
            </div>

            <div className="trust-col" id="trust-indicator-data">
              <div className="trust-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="trust-text-wrapper">
                <h4 className="trust-title">Your Data. Your Control.</h4>
                <p className="trust-desc">You own it. You control it.</p>
              </div>
            </div>

            <div className="trust-col" id="trust-indicator-future">
              <div className="trust-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="trust-text-wrapper">
                <h4 className="trust-title">Built for Today. Ready for Tomorrow.</h4>
                <p className="trust-desc">Future-ready technology. Built to evolve.</p>
              </div>
            </div>

            <div className="trust-col" id="trust-indicator-cloud">
              <div className="trust-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="trust-text-wrapper">
                <h4 className="trust-title">Cloud Secure. Always Available.</h4>
                <p className="trust-desc">Protected infrastructure. Global access.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright details & socials */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Qor8 Ltd. All rights reserved. &nbsp;|&nbsp; 
            <a href="#privacy" className="footer-link">Privacy Policy</a> &nbsp;|&nbsp; 
            <a href="#terms" className="footer-link">Terms of Service</a> &nbsp;|&nbsp; 
            <a href="#cookies" className="footer-link">Cookie Policy</a>
          </p>
          <div className="socials">
            <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </a>
            <a href="#youtube" className="social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ==========================================================================
   Apple-Style Frequently Asked Questions (Q&A) Component
   ========================================================================== */

interface QAItem {
  question: string;
  answer: string;
}

const QA_ITEMS: QAItem[] = [
  {
    question: "What makes the Qor8 ecosystem different from standard enterprise software?",
    answer: "Unlike traditional monolithic platforms or fragmented third-party apps, Qor8 is built on a unified 'connected by nature, standalone by design' architecture. This means each application operates fully independently with isolated sandboxed databases and permissions, yet shares global user directories, real-time sync systems, and security compliance checks natively through the Qor8 Link mesh."
  },
  {
    question: "Can we license and run individual Qor8 applications separately?",
    answer: "Absolutely. Qor8 is completely modular. You can deploy a single application like Qor8 HR or Qor8 Prop first, and then add secure messaging (Link), purchasing pipelines (Buy), or threat auditing (Verify) whenever your team is ready. They will immediately discover each other and integrate dynamically."
  },
  {
    question: "How does Qor8 enforce enterprise-grade security and zero-trust?",
    answer: "Security is embedded directly into the foundation. Every system process uses secure zero-trust credential routing, short-lived hardware-bound JWT sessions, and localized cryptographic data keys. Real-time compliance scans ensure that all access points, document verify tasks, and database queries are fully audited."
  },
  {
    question: "How do data synchronization and software updates work across the sandbox?",
    answer: "Applications operate in isolated containers to prevent database locks, cascading down-times, or version mismatches. Inter-app data synchronization is achieved in real-time using secure, event-driven webhooks and message queues, meaning updates to one app never affect the performance of another."
  },
  {
    question: "What kind of onboarding support and data migration services are available?",
    answer: "Every Qor8 deployment includes developer-led onboarding, custom API schema mapping, and automated database migration pipelines. The system also includes Qor8 Mind, our built-in diagnostics utility that helps guide your team through setup checks, compliance audits, and system configuration directly from the console."
  }
];

export function QASection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="qa-section" aria-label="Frequently Asked Questions">
      <div className="qa-container">
        <h2 className="qa-heading">Questions. Answers.</h2>
        <div className="qa-accordion">
          {QA_ITEMS.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className={`qa-item ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <button 
                  className="qa-question-btn"
                  aria-expanded={isExpanded}
                  aria-controls={`qa-answer-${index}`}
                >
                  <span className="qa-question-text">{item.question}</span>
                  <span className="qa-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="qa-chevron">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div 
                  id={`qa-answer-${index}`}
                  className="qa-answer-wrapper"
                  style={{
                    maxHeight: isExpanded ? '200px' : '0px',
                    opacity: isExpanded ? 1 : 0
                  }}
                  aria-hidden={!isExpanded}
                >
                  <p className="qa-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

