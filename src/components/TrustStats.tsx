const STATS = [
  {
    title: 'Trusted by',
    detail: '500+ organisations worldwide',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  },
  {
    title: '99.9%',
    detail: 'Platform uptime',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    title: '500+',
    detail: 'Active organisations',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    title: '2M+',
    detail: 'Users on platform',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: '24/7',
    detail: 'Expert support',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
];

/** Trust indicators ribbon — five stat cards. */
export function TrustStats() {
  return (
    <section className="trust-stats-section">
      <div className="trust-stats-container">
        {STATS.map((stat) => (
          <div className="trust-stat-col" key={stat.title}>
            <div className="trust-stat-icon">{stat.icon}</div>
            <div className="trust-stat-text">
              <strong>{stat.title}</strong>
              <span>{stat.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
