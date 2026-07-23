import React from 'react';

// SVG Icons for the 8 Qor8 apps — kept identical to the orbit icons in
// OrbitEcosystem.tsx (that component is the visual reference).
const APP_ICONS = {
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  fix: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  mind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

export interface Qor8App {
  id: string;
  name: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  specs: string[];
}

export const APPS_LIST: Qor8App[] = [
  {
    id: 'link', name: 'QorLink', label: 'Communications', color: 'var(--color-app-link)', icon: APP_ICONS.link,
    specs: ['Secure team messaging & channels', 'Broadcast announcements to any group', 'Read receipts & audit trail', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'time', name: 'QorTime', label: 'Time & Attendance', color: 'var(--color-app-time)', icon: APP_ICONS.time,
    specs: ['GPS & geofenced clock in/out', 'Rota planning & shift swaps', 'Overtime & absence tracking', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'hr', name: 'QorHR', label: 'Workforce', color: 'var(--color-app-hr)', icon: APP_ICONS.hr,
    specs: ['Employee records & onboarding', 'Training & certification tracking', 'Leave management & approvals', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'prop', name: 'QorProp', label: 'Property & Assets', color: 'var(--color-app-prop)', icon: APP_ICONS.prop,
    specs: ['Site, unit & asset registers', 'Inspections & compliance checks', 'Document & certificate storage', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'fix', name: 'QorFix', label: 'Maintenance', color: 'var(--color-app-fix)', icon: APP_ICONS.fix,
    specs: ['Reactive & planned maintenance', 'Job assignment with photo evidence', 'Contractor management & SLAs', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'mind', name: 'QorMind', label: 'Wellbeing', color: 'var(--color-app-mind)', icon: APP_ICONS.mind,
    specs: ['Confidential wellbeing check-ins', 'Team pulse surveys & insights', 'Signposting to support resources', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'care', name: 'QorCare', label: 'Care & Support', color: 'var(--color-app-care)', icon: APP_ICONS.care,
    specs: ['Care plans & daily notes', 'Medication administration records', 'Incident reporting & alerts', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
  {
    id: 'buy', name: 'QorBuy', label: 'Procurement', color: 'var(--color-app-buy)', icon: APP_ICONS.buy,
    specs: ['Purchase requests & approvals', 'Supplier catalogues & ordering', 'Budget tracking & spend reports', 'Dedicated iOS & Android app', 'Full Command Centre control'],
  },
];
