import React from 'react';
import './PlatformDiagram.css';

// Compact stroke-based icon set, matching the visual language used across
// the rest of the site (2.5 stroke, round caps).
const ICONS = {
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.505 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  export: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  logs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
};

// Qor8's four-stripe core mark, shared with Qor8Logo / OrbitEcosystem's
// center emblem — reused here as the diagram's central hub icon.
const CoreMark: React.FC = () => (
  <svg viewBox="0 -8 40 42" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="26" height="4" rx="2" transform="rotate(-28 6 6)" fill="var(--color-brand-purple)" />
    <rect x="6" y="14" width="26" height="4" rx="2" transform="rotate(-28 6 14)" fill="var(--color-brand-blue)" />
    <rect x="6" y="22" width="26" height="4" rx="2" transform="rotate(-28 6 22)" fill="var(--color-brand-teal)" />
    <rect x="6" y="30" width="24" height="4" rx="2" transform="rotate(-28 6 30)" fill="var(--color-brand-orange)" />
  </svg>
);

const CLUSTER_ICONS = [
  { icon: ICONS.mobile, accent: '0, 85, 255' },
  { icon: ICONS.shield, accent: '124, 58, 237' },
  { icon: ICONS.chart, accent: '13, 148, 136' },
  { icon: ICONS.zap, accent: '234, 88, 12' },
];

// The five top-row modules — icon + caption "sitting" on the diagram the
// same way OrbitEcosystem's rail icons do, rather than bordered pill boxes.
const MODULES = [
  { icon: ICONS.logs, label: 'Logs', accent: '13, 148, 136' },
  { icon: ICONS.mobile, label: 'Mobile App', accent: '0, 85, 255' },
  { icon: ICONS.lock, label: 'Security', accent: '234, 88, 12' },
  { icon: ICONS.zap, label: 'Automation', accent: '22, 163, 74' },
  { icon: ICONS.shield, label: 'Admin Control Centre', accent: '124, 58, 237' },
];

// Icons flip in batches of up to 3 rather than all five at once — a
// negative delay half a cycle apart makes the second batch's flip land
// mid-loop instead of coinciding with the first batch's, like a rolling
// wave (Stripe uses this same "stagger by group" trick on their site).
const FLIP_BATCH_SIZE = 3;
const FLIP_CYCLE_SECONDS = 7;
const getFlipDelay = (idx: number) =>
  `${Math.floor(idx / FLIP_BATCH_SIZE) * -(FLIP_CYCLE_SECONDS / 2)}s`;

// Bounding boxes for the five modules above — same slots the old
// dashed/solid pill row used, on the desktop (1000x460) stage.
const MODULE_SLOTS_DESKTOP = [
  { left: '16.4%', top: '14%', width: '12.8%', height: '12.2%' },
  { left: '33.2%', top: '14%', width: '12.8%', height: '12.2%' },
  { left: '50%', top: '14%', width: '12.8%', height: '12.2%' },
  { left: '66.8%', top: '14%', width: '12.8%', height: '12.2%' },
  { left: '83.6%', top: '14%', width: '12.8%', height: '12.2%' },
];

// Same five modules, positioned across the mobile (380x620) stage's two
// rows (3 + 2) instead of one wide row.
const MODULE_SLOTS_MOBILE = [
  { left: '5.26%', top: '0%', width: '27.37%', height: '9.03%' },
  { left: '35.79%', top: '0%', width: '27.37%', height: '9.03%' },
  { left: '66.32%', top: '0%', width: '28.42%', height: '9.03%' },
  { left: '5.26%', top: '10.97%', width: '42.11%', height: '9.03%' },
  { left: '50.53%', top: '10.97%', width: '44.21%', height: '9.03%' },
];


export const PlatformDiagram: React.FC = () => {
  return (
    <div className="platform-diagram-container">
      <div className="platform-diagram-card">
        <div className="platform-diagram-dot-grid" aria-hidden="true" />

        <p className="platform-diagram-heading">
          <span className="platform-diagram-heading-strong">
            Every Qor8 product has been engineered as a fully featured enterprise platform—not a limited module or a stripped-down application.
          </span>{' '}
          <span className="platform-diagram-heading-muted">
            Each solution includes its own dedicated mobile app, comprehensive Administrator Control Centre and everything your organisation needs to operate efficiently, intelligently and with confidence.
          </span>
        </p>

        {/* Desktop node diagram — fixed 1000x460 coordinate space; every
            node below is positioned as a percentage of that space so it
            scales as one unit together with the connector SVG, which
            shares the same viewBox. */}
        <div className="platform-diagram-stage" aria-hidden="true">
          <svg className="platform-diagram-lines" viewBox="0 0 1000 460" preserveAspectRatio="none">
            <path d="M396,134 L396,150 L332,150 L332,170" />
            <path d="M900,134 L900,150 L836,150 L836,170" />
            <path d="M332,210 L332,270 L470,270 L470,240" />
            <path d="M836,210 L836,270 L530,270 L530,240" />
            <path d="M140,300 L170,300" />
            <path d="M330,300 L440,300" />
            <path d="M560,300 L670,300" />
            <path d="M830,300 L860,300" />
            <path d="M500,360 L500,380" />
          </svg>

          {/* Top row: five feature modules, rendered as icon + caption
              "sitting" on the diagram like the rail icons. */}
          {MODULES.map((mod, idx) => (
            <div
              key={mod.label}
              className="diagram-module"
              style={{ ...MODULE_SLOTS_DESKTOP[idx], '--accent-rgb': mod.accent, '--flip-delay': getFlipDelay(idx) } as React.CSSProperties}
            >
              <span className="diagram-module-icon">{mod.icon}</span>
              <span className="diagram-module-label">{mod.label}</span>
            </div>
          ))}

          {/* Mid row: how the platform stays in sync with those modules. */}
          <div className="diagram-node diagram-node-mid" style={{ left: '25.7%', top: '37%', width: '15%', height: '8.7%' }}>
            <span className="diagram-node-icon">{ICONS.code}</span>
            <span className="diagram-node-label">SDK &amp; APIs</span>
          </div>
          <div className="diagram-node diagram-node-mid" style={{ left: '76.1%', top: '37%', width: '15%', height: '8.7%' }}>
            <span className="diagram-node-icon">{ICONS.lock}</span>
            <span className="diagram-node-label">Access Control</span>
          </div>

          {/* Left branch: connected third-party apps. */}
          <div className="diagram-icon-cluster" style={{ left: '4%', top: '54.3%', width: '10%', height: '21.7%' }}>
            {CLUSTER_ICONS.map((item, idx) => (
              <span key={idx} className="diagram-cluster-icon" style={{ '--accent-rgb': item.accent } as React.CSSProperties}>
                {item.icon}
              </span>
            ))}
          </div>
          <div className="diagram-node diagram-node-mid diagram-node-link" style={{ left: '17%', top: '60.9%', width: '16%', height: '8.7%' }}>
            <span className="diagram-node-label">Integrations</span>
            <span className="diagram-node-link-icon">{ICONS.link}</span>
          </div>

          {/* Right branch: what flows back out. */}
          <div className="diagram-node diagram-node-mid" style={{ left: '67%', top: '60.9%', width: '16%', height: '8.7%' }}>
            <span className="diagram-node-label">Reporting &amp; Analytics</span>
          </div>
          <div className="diagram-icon-single" style={{ left: '86%', top: '58.7%', width: '8%', height: '13%', '--accent-rgb': '22, 163, 74' } as React.CSSProperties}>
            {ICONS.export}
          </div>

          {/* Hub */}
          <div className="diagram-hub" style={{ left: '44%', top: '52.2%', width: '12%', height: '26.1%' }}>
            <CoreMark />
          </div>

          {/* Bottom node */}
          <div className="diagram-node diagram-node-mid" style={{ left: '43%', top: '82.6%', width: '14%', height: '9.6%' }}>
            <span className="diagram-node-icon">{ICONS.zap}</span>
            <span className="diagram-node-label">Orchestration</span>
          </div>
        </div>

        {/* Mobile node diagram — same idea as the desktop stage, laid out
            in a taller, narrower 380x620 coordinate space instead of a
            wide one, so it stays a real diagram instead of collapsing to
            a plain list. */}
        <div className="platform-diagram-stage-mobile" aria-hidden="true">
          <svg className="platform-diagram-lines" viewBox="0 0 380 620" preserveAspectRatio="none">
            <path d="M188,56 L188,140 L95,140 L95,176" />
            <path d="M276,124 L276,150 L285,150 L285,176" />
            <path d="M95,224 L95,270 L160,270 L160,311" />
            <path d="M285,224 L285,270 L220,270 L220,311" />
            <path d="M110,376 L125,376" />
            <path d="M255,376 L270,376" />
            <path d="M190,441 L190,466" />
            <path d="M190,510 L190,536 L110,536 L110,561" />
            <path d="M190,536 L270,536 L270,561" />
          </svg>

          {MODULES.map((mod, idx) => (
            <div
              key={mod.label}
              className="diagram-module"
              style={{ ...MODULE_SLOTS_MOBILE[idx], '--accent-rgb': mod.accent, '--flip-delay': getFlipDelay(idx) } as React.CSSProperties}
            >
              <span className="diagram-module-icon">{mod.icon}</span>
              <span className="diagram-module-label">{mod.label}</span>
            </div>
          ))}

          <div className="diagram-node diagram-node-mid" style={{ left: '5.26%', top: '28.39%', width: '39.47%', height: '7.74%' }}>
            <span className="diagram-node-icon">{ICONS.code}</span>
            <span className="diagram-node-label">SDK &amp; APIs</span>
          </div>
          <div className="diagram-node diagram-node-mid" style={{ left: '55.26%', top: '28.39%', width: '39.47%', height: '7.74%' }}>
            <span className="diagram-node-icon">{ICONS.lock}</span>
            <span className="diagram-node-label">Access Control</span>
          </div>

          <div className="diagram-icon-cluster" style={{ left: '5.26%', top: '53.39%', width: '23.68%', height: '14.52%' }}>
            {CLUSTER_ICONS.map((item, idx) => (
              <span key={idx} className="diagram-cluster-icon" style={{ '--accent-rgb': item.accent } as React.CSSProperties}>
                {item.icon}
              </span>
            ))}
          </div>

          <div className="diagram-node diagram-node-mid" style={{ left: '71.05%', top: '57.42%', width: '23.68%', height: '6.45%' }}>
            <span className="diagram-node-label">Reporting</span>
          </div>

          <div className="diagram-hub" style={{ left: '32.89%', top: '50.16%', width: '34.21%', height: '20.97%' }}>
            <CoreMark />
          </div>

          <div className="diagram-node diagram-node-mid" style={{ left: '31.58%', top: '75.16%', width: '36.84%', height: '7.1%' }}>
            <span className="diagram-node-icon">{ICONS.zap}</span>
            <span className="diagram-node-label">Orchestration</span>
          </div>

          <div className="diagram-node diagram-node-mid" style={{ left: '15.79%', top: '90.48%', width: '26.32%', height: '6.45%' }}>
            <span className="diagram-node-label">iOS</span>
          </div>
          <div className="diagram-node diagram-node-mid" style={{ left: '57.89%', top: '90.48%', width: '26.32%', height: '6.45%' }}>
            <span className="diagram-node-label">Android</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDiagram;
