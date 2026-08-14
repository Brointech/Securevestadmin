"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  House,
  X,
  CircleUser,
  Accessibility,
  TableOfContents,
  Cog,
  Siren,
  Settings,
  Menu,
  Search,
} from "lucide-react";

type Tab = "all" | "verified" | "pending" | "suspended";

const tabs = [
  {
    id: "all",
    label: "All",
    icon: Menu,
  },
  {
    id: "verified",
    label: "Verfied",
    icon: House,
  },
  {
    id: "pending",
    label: "Pending Kyc",
    icon: Settings,
  },
  {
    id: "suspended",
    label: "Suspended",
    icon: Siren,
  },
] as const;

export default function User() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  return (
    <>
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
        <section className="mb-8 -mt-10">
          <div className="flex flex-col gap-5">
            <div className="mb-8">
              <h2 className="text-black text-22 sm:text-2xl font-semibold">
                Users
              </h2>
              <p className="mt-1 text-[12px] text-gray-700">
                Manage banners, promotions, articles, onboarding messages and
                product content.
              </p>
            </div>
            {/* SEARCH */}
            {/* <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
              />
              <input
                type="text"
                placeholder="Search by name, phone, or account number"
                className="w-full text-gray-500 rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-primary"
              />
            </div> */}
          </div>
        </section>

        {/* Tabs */}
        <div className="hidden mb-8 md:flex flex-wrap gap-3  border-gray-200 pb-4">
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

        {/* Recent Transactions */}
        <section className="mt-8 w-full rounded-2xl border border-1 border-gray-300 ">
          <div className="overflow-x-auto">
            <table className="min-w-[100px] lg:w-full xl:w-full">
              <thead>
                <tr className="border-b border-gray-300  ">
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                    User
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                    Phone
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                    KYC Tier
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-300 text-gray-600  ">
                  <td className="px-6 py-3 font-medium whitespace-nowrap">
                    Ada Chukwu
                  </td>

                  <td className="px-6 py-3 whitespace-nowrap">08123329873</td>

                  <td className="px-6 py-3 whitespace-nowrap   text-black font-medium">
                    Tier 3
                  </td>

                  <td className="px-6 py-3">
                    <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
                      Verified
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 text-gray-600 ">
                  <td className="px-6 py-3 font-medium">Emeka Obi</td>
                  <td className="px-6 py-3"> 08123321928</td>
                  <td className="px-6 py-3 text-black font-medium"> Tier 2</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-300  text-gray-600 ">
                  <td className="px-6 py-3 font-medium">Bisi Lawal</td>
                  <td className="px-6 py-3"> 08139849873</td>
                  <td className="px-6 py-3 text-black font-medium">Tier 1</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-amber-200 px-4 py-1 text-sm text-black">
                      Pending Kyc
                    </span>
                  </td>
                </tr>

                <tr className="text-gray-600 ">
                  <td className="px-6 py-3 font-medium">Tunde Bakare</td>
                  <td className="px-6 py-3"> 08129853885</td>
                  <td className="px-6 py-3 text-black font-medium">Tier 3</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-gray-900/10  px-4 py-1 text-sm text-black">
                      Verified
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
