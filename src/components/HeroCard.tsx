import React from 'react';
import './HeroCard.css';

export interface HeroCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  titleColor?: string;
  accentRgb?: string;
  isNew?: boolean;
  isDimmed?: boolean;
  revealDelay?: string;
}

export const HeroCard = React.forwardRef<HTMLDivElement, HeroCardProps>(({
  id,
  title,
  subtitle,
  description,
  icon,
  iconBgColor,
  titleColor = 'var(--color-brand-blue)',
  accentRgb = '0, 85, 255',
  isNew = false,
  isDimmed = false,
  revealDelay = '0ms',
}, ref) => {
  return (
    <div
      ref={ref}
      id={`hero-card-${id}`}
      className={`hero-card-container ${isDimmed ? 'dimmed' : ''}`}
      style={{
        animationDelay: revealDelay,
        '--accent-rgb': accentRgb
      } as React.CSSProperties}
    >
      {isNew && (
        <span className="hero-card-badge-new" id={`card-new-badge-${id}`}>
          New
        </span>
      )}

      <div
        className="hero-card-icon-container"
        style={{
          background: iconBgColor,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="hero-card-content">
        <h3 className="hero-card-title" style={{ '--accent-color': titleColor } as React.CSSProperties}>
          {title}
        </h3>

        <h4 className="hero-card-subtitle">
          {subtitle}
        </h4>

        <p className="hero-card-desc">
          {description}
        </p>

        <div className="hero-card-arrow" aria-hidden="true">
          Learn more <span className="arrow-sym">&rarr;</span>
        </div>
      </div>
    </div>
  );
});
export default HeroCard;
