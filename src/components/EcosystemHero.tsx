import { OrbitEcosystem } from './OrbitEcosystem';
import './EcosystemHero.css';

/**
 * Modularity section — makes the adoption argument (start with a single
 * application, expand into the ecosystem when ready), which is distinct
 * from the apps-grid section below that shows the ecosystem's breadth.
 * The orbit stage illustrates apps joining the platform one by one.
 * Class names are scoped with an `eco-hero-` prefix so they don't collide
 * with the primary hero's styles.
 */
export function EcosystemHero() {
  return (
    <section className="eco-hero-section" aria-label="Start small, scale anytime">
      <div className="eco-hero-inner">
      <div className="eco-hero-left">
        <div className="eco-hero-badge">
          Modular by design
        </div>
        <h2 className="eco-hero-headline">
          Start with one application.<br />
          <span style={{ color: 'var(--color-brand-blue)' }}>Grow into an ecosystem.</span>
        </h2>
        <h3 className="eco-hero-subtitle">
          <span style={{ color: 'var(--color-brand-blue)' }}>License one.</span>{' '}
          <span style={{ color: 'var(--color-brand-purple)' }}>Add anytime.</span>{' '}
          <span style={{ color: 'var(--color-brand-teal)' }}>Nothing to migrate.</span>
        </h3>
        <p className="eco-hero-paragraph">
          Every Qor8 application is complete on its own. Deploy Qor8 HR or
          Qor8 Prop first, then add messaging, purchasing or maintenance
          when your team is ready — new applications discover each other
          and connect automatically, with no rework and no data migration.
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
