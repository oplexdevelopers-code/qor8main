/** "Built to deliver outcomes that matter" — four metric cards with inline SVG charts. */
export function Outcomes() {
  return (
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
  );
}
