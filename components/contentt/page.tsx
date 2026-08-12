"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Megaphone,
  BookOpen,
  FileText,
  CalendarDays,
} from "lucide-react";

type ContentStatus = "Live" | "Scheduled" | "Draft";

type ContentItem = {
  title: string;
  type: string;
  placement: string;
  status: ContentStatus;
  updated: string;
};

const contentItems: ContentItem[] = [
  {
    title: "Lock savings for 12-Months, earn 12% p.a",
    type: "Promotion",
    placement: "Home screen",
    status: "Live",
    updated: "Aug 10, 2026",
  },
  {
    title: "Welcome to SecureVest",
    type: "Onboarding",
    placement: "Onboarding",
    status: "Live",
    updated: "Aug 9, 2026",
  },
  {
    title: "Build Your Emergency Fund",
    type: "Educational",
    placement: "Savings",
    status: "Live",
    updated: "Aug 8, 2026",
  },
  {
    title: "New Flexible Savings Product",
    type: "Product",
    placement: "Savings",
    status: "Scheduled",
    updated: "Aug 7, 2026",
  },
  {
    title: "How SecureVest Savings Works",
    type: "Article",
    placement: "Help Centre",
    status: "Draft",
    updated: "Aug 6, 2026",
  },
  {
    title: "Understanding Your Savings Goals",
    type: "Educational",
    placement: "Learn",
    status: "Draft",
    updated: "Aug 5, 2026",
  },
];

function StatusBadge({ status }: { status: ContentStatus }) {
  const styles = {
    Live: "bg-[#174D3A] text-[#58D39A]",
    Scheduled: "bg-[#4A3B17] text-[#E8A33D]",
    Draft: "bg-black text-white",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function ContentPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All types");
  const [statusFilter, setStatusFilter] = useState("All status");

  const filteredContent = contentItems.filter((item) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      item.title.toLowerCase().includes(searchValue) ||
      item.placement.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue);

    const matchesType = typeFilter === "All types" || item.type === typeFilter;

    const matchesStatus =
      statusFilter === "All status" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <main className="min-h-screen w-full overflow-x-hidden text-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
        {/* ====================== PAGE HEADER ============================================== */}
        <div className="-mt-10 mb-7 flex w-full items-center justify-between gap-4">
          <div className=" min-w-0">
            <h1 className="text-[24px] font-semibold text-black tracking-tight sm:text-[27px]">
              Content Management
            </h1>
            <p className="mt-1.5 max-w-xl text-[13px] leading-5 text-gray-600 sm:text-[14px]">
              Manage the content displayed across the SecureVest platform.
            </p>

            {/* <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E8A33D] px-4 py-2.5 text-sm font-semibold text-[#08291F] transition-colors hover:bg-[#f0b04e] sm:w-auto"
            >
              <Plus size={17} strokeWidth={2.2} />
              Create content
            </button> */}
          </div>
        </div>
        {/* ============================ CONTENT STATISTICS ========================================== */}
        <section className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {/* Total */}
          <div className="rounded-xl border border-white/10  p-4 sm:p-5 shadow-sm bg-white">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[14px] text-gray-700">Total content</span>

              <FileText size={17} className="text-gray-600" />
            </div>

            <p className="text-[24px] text-gray-700 font-semibold">24</p>

            <p className="mt-1 text-[11px] text-gray-700">Across SecureVest</p>
          </div>

          {/* Published */}
          <div className="rounded-xl border border-white/10 shadow-sm bg-white p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[14px] text-gray-700">Published</span>

              <Megaphone size={17} className="text-gray-700" />
            </div>

            <p className="text-[24px] font-semibold text-gray-700">18</p>

            <p className="mt-1 text-[11px] text-[#58D39A]">Currently live</p>
          </div>

          {/* Drafts */}
          <div className="rounded-xl border border-white/10 shadow-sm bg-white p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[14px] text-gray-700">Drafts</span>

              <BookOpen size={17} className="text-gray-700" />
            </div>

            <p className="text-[24px] font-semibold text-gray-700">4</p>

            <p className="mt-1 text-[11px] text-gray-700">
              Awaiting publishing
            </p>
          </div>

          {/* Scheduled */}
          <div className="rounded-xl border border-white/10 shadow-sm bg-white p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[14px] text-gray-700">Scheduled</span>

              <CalendarDays size={17} className="text-gray-700" />
            </div>

            <p className="text-[24px] font-semibold text-gray-700">2</p>

            <p className="mt-1 text-[11px] text-[#E8A33D]">Upcoming</p>
          </div>
        </section>

        {/* ========================== FEATURED CONTENT  ===================================== */}
        <section className="mb-8 rounded-2xl border border-white/10 bg-white p-4 sm:p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                Featured content
              </p>

              <h2 className="mt-1 text-[16px] font-medium text-white">
                Home screen promotion
              </h2>
            </div>

            {/* <StatusBadge status="Live" /> */}
          </div>

          <div className="rounded-xl bg-[#205642] px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[17px] font-medium leading-7 sm:text-[18px]">
              "Build your savings with SecureVest and reach your financial goals
              faster."
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-white/50">
              <span>Home screen</span>

              <span>•</span>

              <span>Promotion</span>

              <span>•</span>

              <span>Updated Aug 20, 2026</span>
            </div>
          </div>
        </section>

        {/* =============================== ALL CONTENT ================================ */}
        <section className="mb-2 rounded-2xl border border-white/10 bg-white p-4 sm:p-5 md:p-6">
          {/* Section heading */}
          <div className="mb-4">
            <h2 className="text-[17px] font-semibold text-gray-700">
              All content
            </h2>
            <p className="mt-1 text-[12px] text-gray-700">
              Manage banners, promotions, articles, onboarding messages and
              product content.
            </p>
          </div>

          {/* ================================= FILTERS ==================================== */}
          <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
            {/* Search */}
            <div className="flex min-w-0 items-center gap-2 rounded-lg border shadow-sm  border-gray-300 px-3.5 py-2.5">
              <Search size={17} className="shrink-0 text-gray-700" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search content..."
                className="min-w-0 w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-700"
              />
            </div>

            {/****************** Type filter *********************/}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 shadow-sm px-3.5 py-2.5 text-sm text-gray-700 outline-none transition focus:border-white/20"
            >
              <option>All types</option>
              <option>Promotion</option>
              <option>Banner</option>
              <option>Onboarding</option>
              <option>Educational</option>
              <option>Product</option>
              <option>Article</option>
              <option>FAQ</option>
              <option>Announcement</option>
            </select>

            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-700 shadow-sm outline-none transition focus:border-white/20"
            >
              <option>All status</option>
              <option>Live</option>
              <option>Scheduled</option>
              <option>Draft</option>
            </select>
          </div>

          {/* ========================== CONTENT TABLE ==================================== */}
          <div className="w-full overflow-hidden rounded-xl border border-white/10">
            {/* Only the table scrolls horizontally on small screens. The entire page will NOT overflow*/}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-700 sm:px-5">
                      Content
                    </th>

                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-700">
                      Type
                    </th>

                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-700">
                      Placement
                    </th>

                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-700">
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-700">
                      Updated
                    </th>

                    <th className="w-[55px] px-4 py-3.5" />
                  </tr>
                </thead>

                <tbody>
                  {filteredContent.map((item) => (
                    <tr
                      key={item.title}
                      className="border-b border-gray-300 last:border-b-0 transition-colors hover:bg-white/[0.025]"
                    >
                      {/* Content */}
                      <td className="px-4 py-4 sm:px-5">
                        <p className="max-w-[290px] text-[14px] font-medium leading-5 text-gray-700">
                          {item.title}
                        </p>
                      </td>

                      {/* Type */}
                      <td className="px-4 py-4 text-[13px] text-gray-700">
                        {item.type}
                      </td>

                      {/* Placement */}
                      <td className="px-4 py-4 text-[13px] text-gray-700">
                        {item.placement}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-4 text-gray-700">
                        <StatusBadge status={item.status} />
                      </td>

                      {/* Updated */}
                      <td className="px-4 py-4 text-[12px] text-gray-700">
                        {item.updated}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-700 transition hover:bg-white/10"
                          aria-label={`Actions for ${item.title}`}
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {/* Empty state */}
                  {filteredContent.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-12 text-center text-sm text-white/40"
                      >
                        No content found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
