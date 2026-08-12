"use client";

import Header from "@/components/dashboard/header";
import SavingsTabs from "@/components/dashboard/savingstabs";
import DashboardLayout from "./layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="mt-6">
        <SavingsTabs />
      </div>
    </DashboardLayout>
  );
}
