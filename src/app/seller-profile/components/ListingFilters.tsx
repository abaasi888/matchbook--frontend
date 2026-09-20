"use client";

export type FilterTab = "active" | "drafts";

interface ListingFiltersProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  activeCount?: number;
  draftsCount?: number;
}

export default function ListingFilters({
  activeTab,
  onTabChange,
  activeCount = 2,
  draftsCount = 1,
}: ListingFiltersProps) {
  return (
    <div className="listings-filters" role="tablist" aria-label="Listing status filters">
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "active"}
        className={`listings-filters__tab ${
          activeTab === "active" ? "listings-filters__tab--active" : ""
        }`}
        onClick={() => onTabChange("active")}
      >
        <span>Active</span>
        <span
          className={`listings-filters__badge ${
            activeTab === "active"
              ? "listings-filters__badge--active"
              : "listings-filters__badge--inactive"
          }`}
        >
          {activeCount}
        </span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "drafts"}
        className={`listings-filters__tab ${
          activeTab === "drafts" ? "listings-filters__tab--active" : ""
        }`}
        onClick={() => onTabChange("drafts")}
      >
        <span>Drafts</span>
        <span
          className={`listings-filters__badge ${
            activeTab === "drafts"
              ? "listings-filters__badge--active"
              : "listings-filters__badge--inactive"
          }`}
        >
          {draftsCount}
        </span>
      </button>
    </div>
  );
}

