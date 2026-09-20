"use client";

import { useState, useEffect, useRef } from "react";

export interface BusinessListingCardProps {
  id: string;
  industry: string;
  name: string;
  description: string;
  location: string;
  status?: string;
  defaultMenuOpen?: boolean;
}

export default function BusinessListingCard({
  industry,
  name,
  description,
  location,
  status = "Active",
  defaultMenuOpen = false,
}: BusinessListingCardProps) {
  const [menuOpen, setMenuOpen] = useState(defaultMenuOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <article className="listing-card">
      <div className="listing-card__thumb">
        <span className="listing-card__badge">{status}</span>

        <div className="listing-card__menu-container" ref={menuRef}>
          <button
            type="button"
            className="listing-card__menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Listing options"
            aria-expanded={menuOpen}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>

          {menuOpen && (
            <div className="listing-card__dropdown" role="menu">
              <button
                type="button"
                className="listing-card__dropdown-item"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
                <span>Unlist</span>
              </button>

              <button
                type="button"
                className="listing-card__dropdown-item listing-card__dropdown-item--danger"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="listing-card__body">
        <div className="listing-card__industry">{industry}</div>
        <h3 className="listing-card__title">{name}</h3>
        <p className="listing-card__desc">{description}</p>

        <div className="listing-card__location">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{location}</span>
        </div>
      </div>
    </article>
  );
}

