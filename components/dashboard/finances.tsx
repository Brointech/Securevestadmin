"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Landmark,
  Coins,
  PiggyBank,
  ShieldCheck,
  MoreVertical,
  TrendingUp,
  Activity,
  AlertTriangle,
} from "lucide-react";

type EntryType =
  | "Fee Revenue"
  | "Interest Payout"
  | "Reserve Transfer"
  | "Reconciliation";
type EntryStatus = "Cleared" | "Pending" | "Flagged";

interface FinanceEntry {
  id: string;
  description: string;
  type: EntryType;
  amount: number;
  status: EntryStatus;
  date: string;
}

const entries: FinanceEntry[] = [
  {
    id: "FIN-4401",
    description: "Withdrawal fees — Aug 24",
    type: "Fee Revenue",
    amount: 84500,
    status: "Cleared",
    date: "2026-08-25 09:00",
  },
  {
    id: "FIN-4402",
    description: "Interest payout — Fixed Savings plans",
    type: "Interest Payout",
    amount: 312000,
    status: "Pending",
    date: "2026-08-25 09:30",
  },
  {
    id: "FIN-4403",
    description: "Transfer to reserve account",
    type: "Reserve Transfer",
    amount: 1500000,
    status: "Cleared",
    date: "2026-08-24 17:10",
  },
  {
    id: "FIN-4404",
    description: "Wallet ledger vs bank statement mismatch",
    type: "Reconciliation",
    amount: 18200,
    status: "Flagged",
    date: "2026-08-24 11:45",
  },
  {
    id: "FIN-4405",
    description: "Subscription/premium plan fees — Aug",
    type: "Fee Revenue",
    amount: 46000,
    status: "Cleared",
    date: "2026-08-23 08:15",
  },
  {
    id: "FIN-4406",
    description: "Interest payout — Target Savings plans",
    type: "Interest Payout",
    amount: 129500,
    status: "Cleared",
    date: "2026-08-22 10:00",
  },
];

export default function Finance() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const matchesSearch =
        entry.description.toLowerCase().includes(search.toLowerCase()) ||
        entry.id.toLowerCase().includes(search.toLowerCase());

      const matchesType = type === "All" || entry.type === type;
      const matchesStatus = status === "All" || entry.status === status;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [search, type, status]);

  const stats = {
    revenue: entries
      .filter((e) => e.type === "Fee Revenue" && e.status === "Cleared")
      .reduce((sum, e) => sum + e.amount, 0),
    interestOwed: entries
      .filter((e) => e.type === "Interest Payout")
      .reduce((sum, e) => sum + e.amount, 0),
    reserve: entries
      .filter((e) => e.type === "Reserve Transfer" && e.status === "Cleared")
      .reduce((sum, e) => sum + e.amount, 0),
    flagged: entries.filter((e) => e.status === "Flagged").length,
  };

  return (
    <div className="space-y-8 mb-4 w-full px-0 sm:px-0 lg:px-2">
      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 sm:-mt-6">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-gray-600">Revenue (Cleared)</p>
            <Coins className="text-green-600" />
          </div>

          <h2 className="mt-4 text-black text-2xl sm:text-3xl font-bold break-all">
            ₦{stats.revenue.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Interest Owed</p>

            <PiggyBank className="text-primary" />
          </div>

          <h2 className="mt-4 text-black text-2xl sm:text-3xl font-bold break-all">
            ₦{stats.interestOwed.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Reserve Balance</p>

            <Landmark className="text-blue-600" />
          </div>

          <h2 className="mt-4 text-black text-2xl sm:text-3xl font-bold break-all">
            ₦{stats.reserve.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Flagged Entries</p>

            <AlertTriangle className="text-red-500" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">
            {stats.flagged}
          </h2>
        </div>
      </section>

      {/* FILTERS */}
      <section className="rounded-xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by description or reference..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 text-gray-600 py-3 pl-11 pr-4 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block max-w-[190px] min-w-0 rounded-xl border border-gray-300 text-gray-600 text-sm px-4 py-3 outline-none overflow-x-hidden"
            >
              <option>All</option>
              <option>Fee Revenue</option>
              <option>Interest Payout</option>
              <option>Reserve Transfer</option>
              <option>Reconciliation</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block max-w-[160px] min-w-0 rounded-xl border border-gray-300 text-gray-600 text-sm px-4 py-3 outline-none overflow-x-hidden"
            >
              <option>All</option>
              <option>Cleared</option>
              <option>Pending</option>
              <option>Flagged</option>
            </select>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full">
            <thead className="border-b">
              <tr className="text-gray-600">
                <th className="px-6 py-4 text-left text-xs uppercase">
                  Reference
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Description
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">Type</th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Amount
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">Date</th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-6 py-5 font-medium text-gray-600">
                    {entry.id}
                  </td>

                  <td className="px-6 py-5 text-gray-600 max-w-[220px]">
                    {entry.description}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          entry.type === "Fee Revenue"
                            ? "bg-green-50 text-green-700"
                            : entry.type === "Interest Payout"
                              ? "bg-purple-50 text-purple-700"
                              : entry.type === "Reserve Transfer"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-orange-50 text-orange-700"
                        }`}
                    >
                      {entry.type}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-black font-medium whitespace-nowrap">
                    ₦{entry.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          entry.status === "Cleared"
                            ? "bg-green-100 text-green-700"
                            : entry.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                    >
                      {entry.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600 whitespace-nowrap">
                    {entry.date}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No entries match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Bottom Widgets */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Revenue by Source */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <TrendingUp className="text-primary" />

                <h3 className="text-lg font-bold text-gray-600">
                  Revenue by Source
                </h3>
              </div>

              <div className="space-y-5">
                {entries
                  .filter((e) => e.type === "Fee Revenue")
                  .sort((a, b) => b.amount - a.amount)
                  .map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <p className="font-semibold text-gray-600 truncate">
                        {entry.description}
                      </p>

                      <span className="font-bold text-primary whitespace-nowrap">
                        ₦{entry.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Pending Interest Payouts */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <PiggyBank className="text-yellow-500" />

                <h3 className="text-lg font-bold text-gray-600">
                  Pending Interest Payouts
                </h3>
              </div>

              <div className="space-y-4">
                {entries
                  .filter(
                    (e) =>
                      e.type === "Interest Payout" && e.status === "Pending",
                  )
                  .map((entry) => (
                    <div key={entry.id} className="rounded-xl border p-4">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-gray-600 truncate">
                          {entry.description}
                        </h4>

                        <span className="font-bold text-gray-600 whitespace-nowrap">
                          ₦{entry.amount.toLocaleString()}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">{entry.id}</p>

                      <div className="mt-4 flex gap-3">
                        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
                          Release
                        </button>

                        <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
                          Hold
                        </button>
                      </div>
                    </div>
                  ))}

                {entries.filter(
                  (e) => e.type === "Interest Payout" && e.status === "Pending",
                ).length === 0 && (
                  <p className="text-sm text-gray-500">
                    No pending interest payouts.
                  </p>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Activity className="text-primary" />

                <h3 className="text-lg font-bold text-gray-600">
                  Recent Activity
                </h3>
              </div>

              <div className="space-y-5">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    ₦1,500,000 transferred to reserve account
                  </p>

                  <span className="text-sm text-gray-500">10 mins ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Interest payout of ₦312,000 queued for Fixed Savings
                  </p>

                  <span className="text-sm text-gray-500">35 mins ago</span>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-medium text-gray-600">
                    Ledger mismatch of ₦18,200 flagged for review
                  </p>

                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    ₦84,500 in withdrawal fees cleared
                  </p>

                  <span className="text-sm text-gray-500">Today</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
