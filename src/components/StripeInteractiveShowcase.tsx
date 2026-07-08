import React, { useEffect, useState } from 'react';
import './StripeInteractiveShowcase.css';

interface ShowcaseProps {
  activeTabId: string;
}

interface HotspotCard {
  id: string;
  title: string;
  desc: string;
  code: string;
  top: string;
  left: string;
  delay: string;
  accent: string;
  animationClass: string;
}

const SHOWCASE_DATA: Record<string, {
  title: string;
  themeColor: string;
  sidebarBg: string;
  browserTitle: string;
  cards: HotspotCard[];
  metrics: { label: string; value: string; progress: number }[];
}> = {
  all: {
    title: "Qor8 Cloud Ecosystem Dashboard",
    themeColor: "var(--color-brand-blue)",
    sidebarBg: "rgba(15, 23, 42, 0.03)",
    browserTitle: "qor8-console.com/global",
    metrics: [
      { label: "Link Active Channels", value: "34 Channels", progress: 85 },
      { label: "Operations KYC Pass Rate", value: "99.8% Success", progress: 98 },
      { label: "Active Properties Registered", value: "1,204 Assets", progress: 74 }
    ],
    cards: [
      {
        id: "all-1",
        title: "Workspace Link",
        desc: "Encrypted direct messages, audio sessions, and organization rooms.",
        code: "qor8.link.createSession();",
        top: "15%",
        left: "8%",
        delay: "0.2s",
        accent: "var(--color-brand-blue)",
        animationClass: "float-1"
      },
      {
        id: "all-2",
        title: "Workforce Verify",
        desc: "Automate user ID verification and customer onboarding checks.",
        code: "qor8.verify.startCheck(user.id);",
        top: "40%",
        left: "70%",
        delay: "0.4s",
        accent: "var(--color-brand-teal)",
        animationClass: "float-2"
      },
      {
        id: "all-3",
        title: "Property Manager",
        desc: "Register facilities procurement logs and contractor maintenance orders.",
        code: "qor8.prop.logAsset(building.id);",
        top: "70%",
        left: "12%",
        delay: "0.6s",
        accent: "var(--color-brand-green)",
        animationClass: "float-3"
      }
    ]
  },
  comms: {
    title: "Qor8 Link Workspace Hub",
    themeColor: "var(--color-brand-blue)",
    sidebarBg: "rgba(0, 85, 255, 0.04)",
    browserTitle: "link.qor8.com/developer-channels",
    metrics: [
      { label: "Channel Decryption Latency", value: "12ms Secure", progress: 95 },
      { label: "Active Developer Sessions", value: "48 Active", progress: 80 },
      { label: "Secure Files Shared Today", value: "1,402 Files", progress: 88 }
    ],
    cards: [
      {
        id: "comms-1",
        title: "Encrypted Channels",
        desc: "Deploy custom keys for secure group discussion and logs.",
        code: "qor8.link.joinChannel('#ops-deploy');",
        top: "12%",
        left: "10%",
        delay: "0.2s",
        accent: "var(--color-brand-blue)",
        animationClass: "float-1"
      },
      {
        id: "comms-2",
        title: "Cryptographic File Locker",
        desc: "Upload environment variables and secrets with localized keys.",
        code: "qor8.link.shareFile('production.env');",
        top: "68%",
        left: "6%",
        delay: "0.4s",
        accent: "var(--color-brand-blue)",
        animationClass: "float-2"
      },
      {
        id: "comms-3",
        title: "GPS-Verified Clock-in",
        desc: "Trigger developer clock-ins and project logs directly from the terminal.",
        code: "qor8.time.startSession('feature-deployment');",
        top: "35%",
        left: "72%",
        delay: "0.6s",
        accent: "var(--color-brand-blue)",
        animationClass: "float-3"
      }
    ]
  },
  operations: {
    title: "Qor8 HR & Operations Command Center",
    themeColor: "var(--color-brand-purple)",
    sidebarBg: "rgba(140, 80, 255, 0.04)",
    browserTitle: "operations.qor8.com/staff-checkouts",
    metrics: [
      { label: "Staff Verification Pipeline", value: "0.8s Latency", progress: 97 },
      { label: "Verification Completion Rate", value: "99.92%", progress: 99 },
      { label: "Interactive Training Passes", value: "94% Score", progress: 92 }
    ],
    cards: [
      {
        id: "ops-1",
        title: "Auto-Rostering Shift Engine",
        desc: "Schedule developers automatically based on shift weights.",
        code: "qor8.hr.assignShift('ops-lead', '22-06');",
        top: "18%",
        left: "72%",
        delay: "0.2s",
        accent: "var(--color-brand-purple)",
        animationClass: "float-2"
      },
      {
        id: "ops-2",
        title: "Verified KYC Scanning",
        desc: "Authenticate customer credentials and face scans natively.",
        code: "qor8.verify.checkCredentials(user.id);",
        top: "10%",
        left: "8%",
        delay: "0.4s",
        accent: "var(--color-brand-teal)",
        animationClass: "float-1"
      },
      {
        id: "ops-3",
        title: "Cognitive Skill Building",
        desc: "Deploy interactive mental checkups and workflow health drills.",
        code: "qor8.mind.startCheckup('ops-verify');",
        top: "65%",
        left: "14%",
        delay: "0.6s",
        accent: "var(--color-brand-purple)",
        animationClass: "float-3"
      }
    ]
  },
  assets: {
    title: "Qor8 Asset Registry & Corporate Wellbeing",
    themeColor: "var(--color-brand-green)",
    sidebarBg: "rgba(16, 185, 129, 0.04)",
    browserTitle: "assets.qor8.com/facility-london-east",
    metrics: [
      { label: "Inspections Scheduled Today", value: "18 Audits", progress: 90 },
      { label: "Maintenance Tickets Solved", value: "102 Tickets", progress: 96 },
      { label: "Workspace Desk Reservations", value: "184 Reserved", progress: 82 }
    ],
    cards: [
      {
        id: "assets-1",
        title: "IT Hardware Fix Tickets",
        desc: "Automate technical issue tickets and dispatch IT personnel.",
        code: "qor8.fix.createTicket('server-fault');",
        top: "14%",
        left: "6%",
        delay: "0.2s",
        accent: "var(--color-brand-orange)",
        animationClass: "float-1"
      },
      {
        id: "assets-2",
        title: "Facility Inspections",
        desc: "Inspect corporate property and log procurement orders.",
        code: "qor8.prop.scheduleAudit('facility-101');",
        top: "68%",
        left: "12%",
        delay: "0.4s",
        accent: "var(--color-brand-green)",
        animationClass: "float-3"
      },
      {
        id: "assets-3",
        title: "Health & Wellbeing Desk Check-in",
        desc: "Book physical office desk slots and log sanitization passes.",
        code: "qor8.care.reserveDesk('desk-402', '09:00');",
        top: "35%",
        left: "70%",
        delay: "0.6s",
        accent: "var(--color-brand-green)",
        animationClass: "float-2"
      }
    ]
  }
};

export const StripeInteractiveShowcase: React.FC<ShowcaseProps> = ({ activeTabId }) => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    setResetKey(prev => prev + 1);
  }, [activeTabId]);

  const currentShowcase = SHOWCASE_DATA[activeTabId] || SHOWCASE_DATA.all;

  return (
    <div className="stripe-showcase-container" key={resetKey}>
      {/* Outer Banner Wrapper with Uniform Light Background */}
      <div className="showcase-banner">
        {/* Subtle high-tech background dot matrix layer */}
        <div className="showcase-dot-grid" />

        {/* Mock Browser Window Container */}
        <div className="mock-browser-container">
          <div className="mock-browser-header">
            <div className="browser-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-address-bar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="lock-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{currentShowcase.browserTitle}</span>
            </div>
          </div>

          <div className="mock-browser-body">
            {/* Mock Web Dashboard Content */}
            <div className="mock-dashboard-sidebar" style={{ backgroundColor: currentShowcase.sidebarBg }}>
              <div className="sidebar-logo">
                <div className="logo-squircle" style={{ backgroundColor: currentShowcase.themeColor }} />
                <span>Qor8 Console</span>
              </div>
              <div className="sidebar-menu">
                <div className="menu-item active" style={{ backgroundColor: currentShowcase.themeColor, opacity: 0.1 }} />
                <div className="menu-item" />
                <div className="menu-item" />
                <div className="menu-item" />
              </div>
            </div>

            <div className="mock-dashboard-content">
              <div className="dashboard-top-row">
                <div className="dashboard-title-mock" />
                <div className="dashboard-user-badge-mock" />
              </div>

              {/* Dynamic stats list rendering based on solution group */}
              <div className="dashboard-metrics-grid">
                {currentShowcase.metrics.map((metric, idx) => (
                  <div className="metric-box-mock" key={idx}>
                    <div className="metric-header-mock">
                      <span className="metric-label">{metric.label}</span>
                      <span className="metric-val">{metric.value}</span>
                    </div>
                    <div className="metric-progress-track">
                      <div 
                        className="metric-progress-bar" 
                        style={{ 
                          width: `${metric.progress}%`,
                          backgroundColor: idx === 0 
                            ? 'var(--color-brand-blue)' 
                            : idx === 1 
                              ? 'var(--color-brand-teal)' 
                              : 'var(--color-brand-green)'
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Beautiful Mock Line Chart Visualizer */}
              <div className="dashboard-chart-mock">
                <div className="chart-header-mock">
                  <div className="chart-legend-line" />
                  <div className="chart-legend-line short" />
                </div>
                <div className="chart-visuals-mock">
                  {/* Clean SVG Vector paths representing charts */}
                  <svg viewBox="0 0 400 120" className="svg-chart-lines">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0, 85, 255, 0.08)" />
                        <stop offset="100%" stopColor="rgba(0, 85, 255, 0.0)" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,80 Q50,40 100,60 T200,30 T300,90 T400,20 L400,120 L0,120 Z" 
                      fill="url(#chartGrad)" 
                    />
                    <path 
                      d="M0,80 Q50,40 100,60 T200,30 T300,90 T400,20" 
                      fill="none" 
                      stroke={currentShowcase.themeColor} 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="30" r="5" fill={currentShowcase.themeColor} stroke="#ffffff" strokeWidth="2" />
                    <circle cx="100" cy="60" r="4" fill={currentShowcase.themeColor} stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="300" cy="90" r="4" fill={currentShowcase.themeColor} stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distributed Floating Interactive Hotspot Cards Layer */}
        {currentShowcase.cards.map((card) => (
          <div 
            key={card.id}
            className={`floating-info-card ${card.animationClass}`}
            style={{
              top: card.top,
              left: card.left,
              animationDelay: card.delay,
              '--accent-color': card.accent
            } as React.CSSProperties}
          >
            <div className="info-card-header">
              <div className="card-badge-dot" style={{ backgroundColor: card.accent }} />
              <span className="card-title">{card.title}</span>
            </div>
            <p className="info-card-desc">{card.desc}</p>
            <div className="info-card-code">
              <code>{card.code}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StripeInteractiveShowcase;
