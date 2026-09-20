export default function BusinessSummary() {
  return (
    <section className="business-summary">
      <div className="business-summary__left">
        <div className="business-summary__title-row">
          <h1 className="business-summary__title">Specialty Coffee Roastery</h1>
          <span className="business-summary__badge">Name hidden pre-NDA</span>
        </div>

        <p className="business-summary__subtitle">
          Portland, Oregon
          <span className="business-summary__subtitle-separator">•</span>
          Full Acquisition
        </p>

        <div className="business-summary__about-box">
          <h2 className="business-summary__about-title">About the Business</h2>
          <p className="business-summary__about-text">
            lorem ipsum dolor sit amet consectetur adipiscing elit omnis fuga
            quo laboris magna blanditiis est harum magna aliqua ipsum qui maxime
            lorem odio atque laboris veniam excepteur molestias tempor vel sunt
            lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <div className="business-summary__right">
        <div className="business-summary__metric">
          <div className="business-summary__metric-label">Asking Price</div>
          <div className="business-summary__metric-value">$750K</div>
        </div>

        <div className="business-summary__metric">
          <div className="business-summary__metric-label">Annual Revenue</div>
          <div className="business-summary__metric-value">$800–900K</div>
        </div>

        <div className="business-summary__metric">
          <div className="business-summary__metric-label">Annual Profit</div>
          <div className="business-summary__metric-value">$200K</div>
        </div>
      </div>
    </section>
  );
}