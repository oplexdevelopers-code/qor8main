import React from 'react';
import { Qor8Logo } from './Qor8Logo';
import { APPS_LIST } from '../data/apps';

/** "Eight enterprise applications" grid — each card is a product button
 *  that opens a spec panel with a Subscribe CTA. */
export function AppsSection() {
  const [selectedApp, setSelectedApp] = React.useState<string | null>(null);
  const activeApp = APPS_LIST.find((app) => app.id === selectedApp);

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        <h2 className="section-title">
          Eight enterprise applications. One connected ecosystem.
        </h2>

        {/* Apps Grid — each card is a product button; click for spec list */}
        <div className="apps-grid">
          {APPS_LIST.map((app) => (
            <button
              key={app.id}
              type="button"
              className={`app-card ${selectedApp === app.id ? 'selected' : ''}`}
              style={{ '--accent-color': app.color } as React.CSSProperties}
              onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
              aria-expanded={selectedApp === app.id}
            >
              <div className="app-card-icon-container">
                {app.icon}
              </div>
              <h3 className="app-card-title">{app.name}</h3>
              <p className="app-card-subtitle">{app.label}</p>
            </button>
          ))}
        </div>

        {/* Spec panel for the selected product */}
        {activeApp && (
          <div className="app-spec-panel" style={{ '--accent-color': activeApp.color } as React.CSSProperties}>
            <div className="app-spec-header">
              <div className="app-card-icon-container">{activeApp.icon}</div>
              <div>
                <h3 className="app-spec-title">{activeApp.name}</h3>
                <p className="app-spec-label">{activeApp.label}</p>
              </div>
            </div>
            <ul className="app-spec-list">
              {activeApp.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <button className="subscribe-btn" type="button">
              Subscribe now
              <span style={{ marginLeft: '8px' }}>&rarr;</span>
            </button>
          </div>
        )}

        {/* Connecting Mesh Lines and Timeline Grid */}
        <div className="timeline-connector-section">
          <div className="timeline-line">
            {APPS_LIST.map((app) => (
              <div key={app.id} className="timeline-dot"></div>
            ))}
          </div>

          <div className="connection-mesh-container">
            <svg className="connecting-lines-svg" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(15, 23, 42, 0.06)" />
                  <stop offset="100%" stopColor="rgba(37, 99, 235, 0.5)" />
                </linearGradient>
              </defs>
              {/* One line per app, from its dot X coord down to the center badge */}
              {APPS_LIST.map((app, i) => {
                const x = 62.5 + 125 * i; // 8 evenly spaced columns over viewBox width 1000
                return (
                  <path
                    key={app.id}
                    d={`M ${x} 0 Q ${x} ${70 + Math.min(i, 7 - i) * 10} 500 110`}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeDasharray={i % 2 === 0 ? '3 3' : undefined}
                  />
                );
              })}
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
  );
}
