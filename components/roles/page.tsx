"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  FileText,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";

// const navigation = [
//   {
//     name: "Dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     name: "Users",
//     icon: Users,
//   },
//   {
//     name: "Roles & Access",
//     icon: ShieldCheck,
//   },
//   {
//     name: "Content",
//     icon: FileText,
//   },
//   {
//     name: "Security & Alerts",
//     icon: Bell,
//   },
//   {
//     name: "Settings",
//     icon: Settings,
//   },
// ];

const permissions = [
  {
    permission: "View user accounts",
    support: true,
    compliance: true,
    admin: true,
  },
  {
    permission: "Freeze / unfreeze accounts",
    support: false,
    compliance: true,
    admin: true,
  },
  {
    permission: "Approve KYC documents",
    support: false,
    compliance: true,
    admin: true,
  },
  {
    permission: "Edit app content (CMS)",
    support: false,
    compliance: false,
    admin: true,
  },
  {
    permission: "Manage staff roles",
    support: false,
    compliance: false,
    admin: true,
  },
];

function PermissionValue({ allowed }: { allowed: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center text-[20px] font-medium ${
        allowed ? "text-gray-800/80" : "text-gray-800/80"
      }`}
      aria-label={allowed ? "Allowed" : "Not allowed"}
    >
      {allowed ? "✓" : "—"}
    </span>
  );
}

export default function Roles() {
  return (
    <div className="min-h-screen text-white">
      {/* Main Content */}
      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
          {/* Page Header */}
          <div className="mb-8 -mt-10 ">
            <h1 className="text-[24px] font-semibold text-black tracking-tight sm:text-[27px]">
              Roles & permissions
            </h1>
            <p className="mt-1 text-[12px] text-gray-700">
              Manage banners, promotions, articles, onboarding messages and
              product content.
            </p>
          </div>

          {/* Permission Table Card */}
          <section className="w-full overflow-hidden">
            {/* 
                The overflow is intentionally placed around the table.
                This keeps the whole page responsive on mobile.
              */}
            <div className="w-full overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="w-[48%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80 sm:px-4">
                      Permission
                    </th>

                    <th className="w-[16%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
                      Support
                    </th>

                    <th className="w-[16%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
                      Compliance
                    </th>

                    <th className="w-[20%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
                      Admin
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {permissions.map((item) => (
                    <tr
                      key={item.permission}
                      className="border-b border-gray-300 last:border-b-1"
                    >
                      <td className="px-4 py-[17px] text-[16px] font-medium text-gray-800/80 sm:py-[18px]">
                        {item.permission}
                      </td>

                      <td className="px-4 py-[17px] sm:py-[18px]">
                        <PermissionValue allowed={item.support} />
                      </td>

                      <td className="px-4 py-[17px] sm:py-[18px]">
                        <PermissionValue allowed={item.compliance} />
                      </td>

                      <td className="px-4 py-[17px] sm:py-[18px]">
                        <PermissionValue allowed={item.admin} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
