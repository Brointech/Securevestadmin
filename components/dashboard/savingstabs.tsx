"use client";

import { useState } from "react";
import { LayoutGrid, Store, ReceiptText, Wallet } from "lucide-react";
import Overview from "@/components/dashboard/overview";

import Merchants from "@/components/dashboard/savers";
import Transactions from "@/components/dashboard/transactions";
import Finances from "@/components/dashboard/finances";
import VerificationRequired from "@/components/dashboard/verification";
import Savers from "@/components/dashboard/savers";

type Tab = "overview" | "savers" | "transactions" | "finances";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutGrid,
  },
  {
    id: "savers",
    label: "Savers",
    icon: Store,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: ReceiptText,
  },
  {
    id: "finances",
    label: "Finances",
    icon: Wallet,
  },
] as const;

export default function SavingsTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <>
      {/* Tabs */}
      <div className="w-full px-0 sm:px-0 lg:px-2">
        {/* Verification Status */}
        <VerificationRequired />

        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-2 -mt-0">
          Savings Dashboard
        </h2>
        <p className="font-medium text-gray-600 text-sm mb-6">
          Monitor your transactions and access insights to grow your business.
        </p>
        <div className="hidden mb-8 md:flex flex-wrap gap-3 border-gray-200 pb-4 ">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition
                ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Dropdown */}
        <div className="mb-6 w-full md:hidden overflow-x-hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as Tab)}
            className="block w-[120px] min-w-0 rounded-lg border border-gray-300 bg-white px-4 py-3 text-l font-medium text-gray-700 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300 overflow-hidden"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Content */}
      {activeTab === "overview" && <Overview />}
      {activeTab === "savers" && <Savers />}
      {activeTab === "transactions" && <Transactions />}
      {activeTab === "finances" && <Finances />}
    </>
  );
}
