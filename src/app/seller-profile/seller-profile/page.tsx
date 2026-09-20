"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import ListingFilters, { FilterTab } from "@/app/components/ListingFilters";
import BusinessListingCard from "@/app/components/BusinessListingCard";
import ListAnotherBusinessCard from "@/app/components/ListAnotherBusinessCard";

const ACTIVE_LISTINGS = [
  {
    id: "1",
    industry: "INDUSTRY NAME",
    name: "Business name",
    description: "Short description of the business.",
    location: "City, State",
    status: "Active",
  },
  {
    id: "2",
    industry: "INDUSTRY NAME",
    name: "Business name",
    description: "Short description of the business.",
    location: "City, State",
    status: "Active",
  },
];

const DRAFT_LISTINGS = [
  {
    id: "draft-1",
    industry: "INDUSTRY NAME",
    name: "Business name",
    description: "Short description of the business.",
    location: "City, State",
    status: "Draft",
  },
];

export default function SellerProfileListingsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("active");

  const currentListings = activeTab === "active" ? ACTIVE_LISTINGS : DRAFT_LISTINGS;

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="seller-profile seller-profile--listings">
        <div className="seller-profile__content--wide">
          <header className="listings-header">
            <h1 className="listings-header__title">Your business listings</h1>
            <p className="listings-header__subtitle">
              Manage what buyers see, pause a listing, or add another business.
            </p>
          </header>

          <ListingFilters
            activeTab={activeTab}
            onTabChange={setActiveTab}
            activeCount={ACTIVE_LISTINGS.length}
            draftsCount={DRAFT_LISTINGS.length}
          />

          <div className="listings-grid">
            {currentListings.map((listing, index) => (
              <BusinessListingCard
                key={listing.id}
                id={listing.id}
                industry={listing.industry}
                name={listing.name}
                description={listing.description}
                location={listing.location}
                status={listing.status}
                defaultMenuOpen={index === 0}
              />
            ))}

            {activeTab === "active" && <ListAnotherBusinessCard />}
          </div>

          <div className="listings-footnote">
            <svg
              className="listings-footnote__icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Financial and contact details stay private until both sides approve an introduction.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
