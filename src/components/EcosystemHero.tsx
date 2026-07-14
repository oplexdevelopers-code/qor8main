import { OrbitEcosystem } from './OrbitEcosystem';
import './EcosystemHero.css';

/**
 * Adoption section — makes the argument that every Qor8 application is a
 * complete business application (not a module): start with one, add more
 * as the organisation grows. Distinct from the apps-grid section that
 * shows the ecosystem's breadth. The orbit stage illustrates apps joining
 * the platform one by one. Class names are scoped with an `eco-hero-`
 * prefix so they don't collide with the primary hero's styles.
 */
export function EcosystemHero() {
  return (
    <section className="eco-hero-section" aria-label="Start small, scale anytime">
      <div className="eco-hero-inner">
      <div className="eco-hero-left">
        <div className="eco-hero-badge">
          Complete by design
        </div>
        <h2 className="eco-hero-headline">
          Start with one application.<br />
          <span style={{ color: 'var(--color-brand-blue)' }}>Grow into an ecosystem.</span>
        </h2>
        <h3 className="eco-hero-subtitle">
          <span style={{ color: 'var(--color-brand-blue)' }}>We don&rsquo;t build software modules.</span>{' '}
          <span style={{ color: 'var(--color-brand-purple)' }}>We build complete business applications.</span>
        </h3>
        <p className="eco-hero-paragraph">
          Every Qor8 application stands on its own. Each includes its own
          dedicated mobile app, powerful Command Centre, and a complete set
          of features from day one. Start with the application that solves
          your biggest challenge today, knowing every future Qor8
          application is designed to work alongside it as your organisation
          grows.
        </p>
        <div className="eco-hero-ctas">
          <button className="eco-hero-primary-cta" id="eco-view-pricing-cta">
            View pricing
            <span style={{ marginLeft: '8px' }}>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="eco-hero-right">
        <OrbitEcosystem />
      </div>
      </div>
    </section>
  );
}

export default EcosystemHero;
