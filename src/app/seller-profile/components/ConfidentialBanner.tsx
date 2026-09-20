export default function ConfidentialBanner() {
  return (
    <section className="confidential-banner">
      <div className="confidential-banner__icon-box">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <div className="confidential-banner__content">
        <h3 className="confidential-banner__title">
          What stays confidential
        </h3>

        <p className="confidential-banner__text">
          Business name, exact address, and detailed financial documents
          (tax returns, P&amp;Ls) stay hidden from buyers until they sign the
          NDA. Everything else on this page is visible to any qualified buyer
          browsing MatchBook.
        </p>
      </div>
    </section>
  );
}