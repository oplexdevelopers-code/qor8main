import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ChecklistSection.css';

const CHECKLIST_ITEMS = [
  'Dedicated Mobile App',
  'Comprehensive Administrator Control Centre',
  'Feature-Rich Enterprise Functionality',
  'Real-Time Dashboards & Analytics',
  'Intelligent Automation',
  'Enterprise-Grade Security',
  'Simple, Intuitive User Experience',
  'Continuous Innovation & Product Enhancements',
];

const FIRST_DELAY_MS = 300;
const STAGGER_MS = 380;

// A dense fan of curved lines converging on a bright glow core — an
// abstract stand-in for the photo's glowing motion-trail graphic, colored
// with the brand gradient instead of pink, curving slightly like the
// reference rather than radiating as straight rays.
const LINE_COUNT = 70;
const FOCAL_X = 600;
const FOCAL_Y = 230;
const SPREAD = 560;

const LINES = Array.from({ length: LINE_COUNT }).map((_, i) => {
  const t = i / (LINE_COUNT - 1); // 0..1 top to bottom
  const y = FOCAL_Y + (t - 0.5) * SPREAD;
  const bow = (t - 0.5) * 90; // slight arc, more pronounced toward the ends
  const midX = FOCAL_X - 240;
  const midY = FOCAL_Y + (y - FOCAL_Y) * 0.55 + bow;
  const closeness = 1 - Math.abs(t - 0.5) * 2; // 1 at center, 0 at ends
  return {
    d: `M ${FOCAL_X} ${FOCAL_Y} Q ${midX} ${midY} -140 ${y}`,
    strokeWidth: 0.5 + closeness * 0.6,
    opacity: 0.12 + closeness * 0.3,
  };
});

export const ChecklistSection: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: false,
  });
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) {
      // Reset so the sequence replays in full next time this section
      // scrolls back into view, instead of only ever running once.
      setCompletedCount(0);
      return;
    }
    if (completedCount >= CHECKLIST_ITEMS.length) return;
    const delay = completedCount === 0 ? FIRST_DELAY_MS : STAGGER_MS;
    const timer = setTimeout(() => setCompletedCount((count) => count + 1), delay);
    return () => clearTimeout(timer);
  }, [isIntersecting, completedCount]);

  return (
    <section
      className="checklist-section"
      ref={elementRef as React.RefObject<HTMLElement>}
      aria-label="Everything included"
    >
      <svg className="checklist-lines" viewBox="0 0 640 460" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="checklist-lines-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-brand-purple)" />
            <stop offset="50%" stopColor="var(--color-brand-blue)" />
            <stop offset="100%" stopColor="var(--color-brand-orange)" />
          </linearGradient>
          <radialGradient id="checklist-lines-fade" cx="78%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="checklist-lines-mask">
            <rect x="0" y="0" width="640" height="460" fill="url(#checklist-lines-fade)" />
          </mask>
          <radialGradient id="checklist-glow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.9" />
            <stop offset="55%" stopColor="var(--color-brand-purple)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0" />
          </radialGradient>
          <filter id="checklist-glow-blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <g mask="url(#checklist-lines-mask)">
          <circle cx={FOCAL_X} cy={FOCAL_Y} r="70" fill="url(#checklist-glow-grad)" filter="url(#checklist-glow-blur)" />
          <g stroke="url(#checklist-lines-grad)" strokeLinecap="round" fill="none">
            {LINES.map((line, i) => (
              <path key={i} d={line.d} strokeWidth={line.strokeWidth} opacity={line.opacity} />
            ))}
          </g>
        </g>
      </svg>

      <ul className="checklist-list">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const done = idx < completedCount;
          const active = !done && idx === completedCount && isIntersecting;
          const status = done ? 'done' : active ? 'active' : 'pending';
          return (
            <li key={item} className={`checklist-item ${status}`}>
              <span className="checklist-status">
                <span className="checklist-spinner" aria-hidden="true" />
                <svg className="checklist-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="checklist-label">{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChecklistSection;
