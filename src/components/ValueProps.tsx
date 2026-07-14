/** Value propositions: "Everything you need" feature cards and the
 *  People First Listen → Understand → Build steps. */
export function ValueProps() {
  return (
    <section className="value-props-section">
      <div className="value-prop">
        <h2 className="section-title">Everything you need. Ready from day one.</h2>
        <div className="value-cards">
          <div className="value-card">
            <div className="value-card-icon icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
            </div>
            <h3>Dedicated mobile app</h3>
            <p>Every Qor8 product ships with its own iOS &amp; Android app, so your teams can work anywhere.</p>
          </div>
          <div className="value-card">
            <div className="value-card-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M21 9H9" /></svg>
            </div>
            <h3>Powerful Command Centre</h3>
            <p>Complete oversight and control of your organisation from one secure dashboard.</p>
          </div>
          <div className="value-card">
            <div className="value-card-icon icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
            </div>
            <h3>Built to grow with you</h3>
            <p>Start with one product, then build your complete Qor8 ecosystem as your organisation grows.</p>
          </div>
        </div>
      </div>

      <div className="value-prop">
        <h2 className="section-title">People First. Technology Second.</h2>
        <p className="value-prop-text">
          We don&rsquo;t build software and then look for customers.
        </p>
        <div className="value-steps">
          <div className="value-step">
            <span className="value-step-num">1</span>
            <h3>Listen</h3>
            <p>We start by listening to organisations and how they really work.</p>
          </div>
          <div className="value-step-arrow" aria-hidden="true">&rarr;</div>
          <div className="value-step">
            <span className="value-step-num">2</span>
            <h3>Understand</h3>
            <p>We dig into the challenges your people face every day.</p>
          </div>
          <div className="value-step-arrow" aria-hidden="true">&rarr;</div>
          <div className="value-step">
            <span className="value-step-num">3</span>
            <h3>Build</h3>
            <p>Only then do we create technology that helps people work smarter, move faster and focus on what they do best&mdash;with complete confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
