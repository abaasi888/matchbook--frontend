export default function ProfileTabs() {
  const tabs = [
    { label: "Overview", active: true },
    { label: "Business Information", active: false },
    { label: "Sale Goals", active: false },
    { label: "Lease & Assets", active: false },
    { label: "Finances", active: false },
    { label: "Legal & Licensing", active: false },
  ];

  return (
    <div className="profile-tabs">
      <nav className="profile-tabs__nav">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`profile-tabs__tab ${
              tab.active ? "profile-tabs__tab--active" : ""
            }`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}