import Sidebar from "@/app/components/Sidebar";
import ConfidentialBanner from "@/app/components/ConfidentialBanner";
import HeroImage from "@/app/components/HeroImage";
import BusinessSummary from "@/app/components/BusinessSummary";
import ProfileTabs from "@/app/components/ProfileTabs";
import BusinessInformation from "@/app/components/BusinessInformation";

export default function Home() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="seller-profile">
        <div className="seller-profile__content">
          <div className="seller-profile__actions">
            <button type="button" className="edit-button">
              Edit
            </button>
          </div>

          <ConfidentialBanner />
          <HeroImage />
          <BusinessSummary />
          <ProfileTabs />
          <BusinessInformation />
        </div>
      </main>
    </div>
  );
}