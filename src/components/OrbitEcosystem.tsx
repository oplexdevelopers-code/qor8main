import React from 'react';
import './OrbitEcosystem.css';

// SVG paths for the product nodes matching the visual layout
const ICONS = {
  hr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  prop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  mind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  verify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  fix: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

// A single smooth quarter-pipe bend (not an S-curve) — vertical tangent at the
// bottom-left end, horizontal tangent at the top-right end. Shared by the
// visible rail stroke (SVG) and the icons' offset-path (CSS) — keep these two
// in sync (see .orbit-rail-node in OrbitEcosystem.css).
export const RAIL_PATH_D = 'M 40 430 C 40 160 220 20 420 20';

interface OrbitNode {
  name: string;
  accentRgb: string;
  icon: React.ReactNode;
}

interface OrbitEcosystemProps {
  activeNodes?: string[];
  activeTabId?: string;
}

// Full traverse duration for one icon's trip along the rail; stagger delays
// below are spaced evenly across this so icons continuously enter, cross,
// and exit — like a ticker/headlines strip — rather than all bunching up.
// Each icon is only actively crossing the rail for the first 40% of this
// duration (see rail-travel/rail-fade in OrbitEcosystem.css), so the real
// crossing time is ~40% of it — 18s keeps that a relaxed ~7s glide.
const TRAVEL_DURATION = 18;

export const OrbitEcosystem: React.FC<OrbitEcosystemProps> = ({
  activeNodes = [],
  activeTabId = 'all',
}) => {
  const nodes: OrbitNode[] = [
    { name: 'Qor8 Link', accentRgb: '0, 85, 255', icon: ICONS.link },
    { name: 'Qor8 Time', accentRgb: '0, 85, 255', icon: ICONS.time },
    { name: 'Qor8 HR', accentRgb: '124, 58, 237', icon: ICONS.hr },
    { name: 'Qor8 Fix', accentRgb: '234, 88, 12', icon: ICONS.fix },
    { name: 'Qor8 Verify', accentRgb: '13, 148, 136', icon: ICONS.verify },
    { name: 'Qor8 Mind', accentRgb: '124, 58, 237', icon: ICONS.mind },
    { name: 'Qor8 Prop', accentRgb: '22, 163, 74', icon: ICONS.prop },
    { name: 'Qor8 Care', accentRgb: '22, 163, 74', icon: ICONS.care },
  ];

  return (
    <div className="orbit-container" key={activeTabId}>
      {/* Aurora Rainbow Wave Background */}
      <div className="orbit-aurora" aria-hidden="true" />

      <div className="orbit-rail-stage">
        {/* The soft, thick curved rail the icons glide along */}
        <svg className="orbit-rail-svg" viewBox="0 0 440 440" aria-hidden="true">
          <defs>
            <linearGradient id="rail-fill" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.32)" />
              <stop offset="55%" stopColor="rgba(220, 217, 210, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.58)" />
            </linearGradient>
            <linearGradient id="rail-sheen" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="45%" stopColor="rgba(255, 255, 255, 0.95)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            {/* Fades the whole rail out at both ends instead of it just
                stopping at a hard round cap. */}
            <linearGradient id="rail-fade-grad" gradientUnits="userSpaceOnUse" x1="40" y1="430" x2="420" y2="20">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="14%" stopColor="white" stopOpacity="1" />
              <stop offset="86%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="rail-fade-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="440">
              <rect x="0" y="0" width="440" height="440" fill="url(#rail-fade-grad)" />
            </mask>
          </defs>
          <g mask="url(#rail-fade-mask)">
            {/* Soft ground shadow */}
            <path
              className="orbit-rail-shadow"
              d={RAIL_PATH_D}
              fill="none"
              stroke="rgba(15, 23, 42, 0.16)"
              strokeWidth="70"
              strokeLinecap="round"
            />
            {/* Frosted glass tube body */}
            <path d={RAIL_PATH_D} fill="none" stroke="url(#rail-fill)" strokeWidth="62" strokeLinecap="round" />
            {/* Faint far-edge rim for roundness */}
            <path
              className="orbit-rail-rim"
              d={RAIL_PATH_D}
              fill="none"
              stroke="rgba(15, 23, 42, 0.07)"
              strokeWidth="4"
              strokeLinecap="round"
              transform="translate(9, 9)"
            />
            {/* Glossy highlight streak */}
            <path
              className="orbit-rail-gloss"
              d={RAIL_PATH_D}
              fill="none"
              stroke="url(#rail-sheen)"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Central Emblem */}
        <div className="orbit-center">
          <div className="orbit-center-glow" aria-hidden="true" />
          <div className="orbit-center-content">
            <svg viewBox="0 -8 40 42" fill="none" aria-label="Qor8 Core Symbol">
              <rect x="6" y="6" width="26" height="4" rx="2" transform="rotate(-28 6 6)" fill="var(--color-brand-purple)" />
              <rect x="6" y="14" width="26" height="4" rx="2" transform="rotate(-28 6 14)" fill="var(--color-brand-blue)" />
              <rect x="6" y="22" width="26" height="4" rx="2" transform="rotate(-28 6 22)" fill="var(--color-brand-teal)" />
              <rect x="6" y="30" width="24" height="4" rx="2" transform="rotate(-28 6 30)" fill="var(--color-brand-orange)" />
            </svg>
          </div>
        </div>

        {/* Nodes travel the full rail like a headlines ticker — continuously
            entering from the bottom-left end, crossing, and exiting at the
            top-right, staggered so the strip never looks empty. */}
        {nodes.map((node, index) => {
          const isHighlighted = activeNodes.length > 0 && activeNodes.includes(node.name);
          const isDimmed = activeNodes.length > 0 && !activeNodes.includes(node.name);
          const delay = -((TRAVEL_DURATION / nodes.length) * index);

          return (
            <div
              key={index}
              className={`orbit-rail-node ${isHighlighted ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
              style={{
                '--accent-rgb': node.accentRgb,
                animationDuration: `${TRAVEL_DURATION}s`,
                animationDelay: `${delay}s`,
              } as React.CSSProperties}
            >
              <div className="orbit-rail-node-inner" style={{ animationDuration: `${TRAVEL_DURATION}s`, animationDelay: `${delay}s` } as React.CSSProperties}>
                <span className="orbit-rail-node-contact" aria-hidden="true" />
                <div className="orbit-rail-node-icon" title={node.name}>
                  {node.icon}
                </div>
                <span className="orbit-rail-node-label">{node.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OrbitEcosystem;
