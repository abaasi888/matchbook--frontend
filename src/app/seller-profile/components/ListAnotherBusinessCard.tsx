import Link from "next/link";

export default function ListAnotherBusinessCard() {
  return (
    <Link href="/seller-profile/new" className="list-another-card">
      <div className="list-another-card__plus-circle">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>

      <h3 className="list-another-card__title">List another business</h3>

      <p className="list-another-card__desc">
        Add another business, and keep its buyer conversations separate.
      </p>
    </Link>
  );
}

