import { Qor8Logo } from './Qor8Logo';

/** Primary hero: headline, CTAs, trusted-by row, and the desktop + phone mockups. */
export function Hero() {
  return (
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
  );
}
