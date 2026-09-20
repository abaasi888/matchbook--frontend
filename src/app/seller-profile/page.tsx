import Link from "next/link";

import Sidebar from "@/app/components/Sidebar";
import AddBusiness from "@/app/components/AddBusiness";

export default function Home() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main>
        <h2>Your Business Listings</h2>

        <Link href="/seller-profile/new" className="add-business-button">
          Create New Business
        </Link>
      </main>
    </div>
  );
}