import React from 'react';

interface Qor8LogoProps {
  size?: number;
  showText?: boolean;
}

export const Qor8Logo: React.FC<Qor8LogoProps> = ({
  size = 36,
  showText = true,
}) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 -8 40 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Stripe 1 - Purple */}
        <rect x="6" y="6" width="26" height="4" rx="2" transform="rotate(-28 6 6)" fill="var(--color-brand-purple)" />
        {/* Stripe 2 - Blue */}
        <rect x="6" y="14" width="26" height="4" rx="2" transform="rotate(-28 6 14)" fill="var(--color-brand-blue)" />
        {/* Stripe 3 - Teal */}
        <rect x="6" y="22" width="26" height="4" rx="2" transform="rotate(-28 6 22)" fill="var(--color-brand-teal)" />
        {/* Stripe 4 - Orange */}
        <rect x="6" y="30" width="24" height="4" rx="2" transform="rotate(-28 6 30)" fill="var(--color-brand-orange)" />
      </svg>
      {showText && (
        <span
          style={{
            fontSize: `${size * 0.85}px`,
            fontWeight: 800,
            color: '#060f25',
            fontFamily: 'var(--font-family-display)',
            letterSpacing: '-0.04em',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Qor<span style={{ color: 'var(--color-brand-blue)' }}>8</span>
        </span>
      )}
    </div>
  );
};
