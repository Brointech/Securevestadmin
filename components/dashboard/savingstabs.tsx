"use client";

import { useState } from "react";
import { LayoutGrid, Store, ReceiptText, Wallet } from "lucide-react";
import Overview from "@/components/dashboard/overview";

import Merchants from "@/components/dashboard/merchants";
import Transactions from "@/components/dashboard/transactions";
import Finances from "@/components/dashboard/finances";

type Tab = "overview" | "merchants" | "transactions" | "finances";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutGrid,
  },
  {
    id: "merchants",
    label: "Merchants",
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
      <div className="hidden mb-8 md:flex flex-wrap gap-3 border-b border-gray-200 pb-4">
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
          className="block w-[120px] min-w-0 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 overflow-hidden"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      {activeTab === "overview" && <Overview />}
      {activeTab === "merchants" && <Merchants />}
      {/* {activeTab === "transactions" && <Transactions />} */}
      {activeTab === "finances" && <Finances />}
    </>
  );
}
