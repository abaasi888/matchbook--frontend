export default function BusinessInformation() {
  return (
    <section className="business-info-section">
      <h2 className="business-info__heading">Business Information</h2>

      <div className="business-info__card">
        <div className="business-info__left">
          <div className="business-info__label-group">
            <div className="business-info__icon-box">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth="2.5" />
                <line x1="15" y1="6" x2="15.01" y2="6" strokeWidth="2.5" />
                <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="2.5" />
                <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="2.5" />
                <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth="2.5" />
                <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth="2.5" />
                <path d="M10 22v-4h4v4" />
              </svg>
            </div>
            <span className="business-info__label">Industry</span>
          </div>

          <span className="business-info__value">
            Specialty Food &amp; Beverage
          </span>
        </div>

        <div className="business-info__right">
          <div className="business-info__operates-box">
            <h3 className="business-info__operates-title">How it operates</h3>
            <p className="business-info__operates-text">
              Owner-operated, ~35 hrs/week on roasting and operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}