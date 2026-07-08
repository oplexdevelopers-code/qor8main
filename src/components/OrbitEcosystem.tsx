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

interface OrbitNode {
  name: string;
  color: string;
  icon: React.ReactNode;
  angle: number;
}

interface OrbitEcosystemProps {
  activeNodes?: string[];
  activeTabId?: string;
}

export const OrbitEcosystem: React.FC<OrbitEcosystemProps> = ({
  activeNodes = [],
  activeTabId = 'all',
}) => {
  const nodes: OrbitNode[] = [
    { name: 'Qor8 HR', color: 'var(--color-brand-purple)', icon: ICONS.hr, angle: -90 },
    { name: 'Qor8 Care', color: 'var(--color-brand-green)', icon: ICONS.care, angle: -45 },
    { name: 'Qor8 Prop', color: 'var(--color-brand-green)', icon: ICONS.prop, angle: 0 },
    { name: 'Qor8 Mind', color: 'var(--color-brand-purple)', icon: ICONS.mind, angle: 45 },
    { name: 'Qor8 Verify', color: 'var(--color-brand-teal)', icon: ICONS.verify, angle: 90 },
    { name: 'Qor8 Fix', color: 'var(--color-brand-orange)', icon: ICONS.fix, angle: 135 },
    { name: 'Qor8 Time', color: 'var(--color-brand-blue)', icon: ICONS.time, angle: 180 },
    { name: 'Qor8 Link', color: 'var(--color-brand-blue)', icon: ICONS.link, angle: -135 },
  ];

  return (
    <div className="orbit-container" key={activeTabId}>
      {/* Aurora Rainbow Wave Background */}
      <div className="orbit-aurora" aria-hidden="true" />

      {/* Outer Orbit Path Ring */}
      <div className="orbit-ring" aria-hidden="true" />

      {/* Center Logo Area */}
      <div className="orbit-center">
        <div className="orbit-center-glow" aria-hidden="true" />
        <div className="orbit-center-content">
          <svg viewBox="0 0 40 40" fill="none" aria-label="Qor8 Core Symbol">
            <rect x="6" y="6" width="24" height="4" rx="2" transform="rotate(-28 6 6)" fill="var(--color-brand-purple)" />
            <rect x="6" y="14" width="26" height="4" rx="2" transform="rotate(-28 6 14)" fill="var(--color-brand-blue)" />
            <rect x="6" y="22" width="26" height="4" rx="2" transform="rotate(-28 6 22)" fill="var(--color-brand-teal)" />
            <rect x="6" y="30" width="24" height="4" rx="2" transform="rotate(-28 6 30)" fill="var(--color-brand-orange)" />
          </svg>
        </div>
      </div>

      {/* Orbiting Nodes */}
      {nodes.map((node, index) => {
        const radius = 40; // 40% of container size
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        const isHighlighted = activeNodes.length > 0 && activeNodes.includes(node.name);
        const isDimmed = activeNodes.length > 0 && !activeNodes.includes(node.name);

        return (
          <div
            key={index}
            className={`orbit-node-wrapper ${isHighlighted ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
            style={{
              '--x-offset': `${x}%`,
              '--y-offset': `${y}%`,
            } as React.CSSProperties}
          >
            <div
              className="orbit-node-icon"
              style={{
                backgroundColor: node.color,
                boxShadow: isHighlighted 
                  ? `0 0 20px ${node.color}, 0 4px 14px ${node.color}4d`
                  : `0 8px 20px ${node.color}26`,
              }}
              title={node.name}
            >
              {node.icon}
            </div>
            <span className="orbit-node-label">{node.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default OrbitEcosystem;
