"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  LockKeyhole,
  ShieldAlert,
  UserRound,
} from "lucide-react";

const activities = [
  {
    time: "10:42 AM",
    date: "Aug 7, 2026",
    event: "Large transfer flagged (₦2,000,000)",
    description: "Transaction exceeds daily transfer limit",
    actor: "System",
    status: "Open",
    type: "alert",
  },
  {
    time: "09:18 AM",
    date: "Aug 7, 2026",
    event: "Account frozen — repeated failed PIN",
    description: "5 failed authentication attempts detected",
    actor: "Compliance — B. Adeyemi",
    status: "Resolved",
    type: "security",
  },
  {
    time: "08:05 AM",
    date: "Aug 7, 2026",
    event: "KYC document approved",
    description: "Identity verification completed successfully",
    actor: "Compliance — B. Adeyemi",
    status: "Resolved",
    type: "success",
  },
  {
    time: "07:22 AM",
    date: "Aug 7, 2026",
    event: "New admin login",
    description: "IP: 197.210.43.12 • Lagos, NG",
    actor: "B. Adeyemi",
    status: "Success",
    type: "login",
  },
  {
    time: "06:41 AM",
    date: "Aug 7, 2026",
    event: "Password changed",
    description: "Admin account password was updated",
    actor: "B. Adeyemi",
    status: "Success",
    type: "password",
  },
  {
    time: "05:56 AM",
    date: "Aug 7, 2026",
    event: "Suspicious login attempt blocked",
    description: "Unrecognized device detected",
    actor: "System",
    status: "Blocked",
    type: "alert",
  },
];

function ActivityIcon({ type }: { type: string }) {
  const base = "flex h-9 w-9 shrink-0 items-center justify-center rounded-full";

  switch (type) {
    case "alert":
      return (
        <div className={`${base} bg-red-50 text-red-500`}>
          <AlertTriangle size={17} />
        </div>
      );

    case "security":
      return (
        <div className={`${base} bg-orange-50 text-orange-500`}>
          <LockKeyhole size={17} />
        </div>
      );

    case "success":
      return (
        <div className={`${base} bg-emerald-50 text-emerald-600`}>
          <CheckCircle2 size={17} />
        </div>
      );

    case "login":
      return (
        <div className={`${base} bg-blue-50 text-blue-500`}>
          <UserRound size={17} />
        </div>
      );

    case "password":
      return (
        <div className={`${base} bg-amber-50 text-amber-500`}>
          <ShieldAlert size={17} />
        </div>
      );

    default:
      return (
        <div className={`${base} bg-gray-50 text-gray-500`}>
          <FileCheck2 size={17} />
        </div>
      );
  }
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Open: "bg-red-50 text-red-600 border border-red-100",
    Resolved: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    Success: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    Blocked: "bg-orange-50 text-orange-600 border border-orange-100",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${
        styles[status] || "bg-gray-50 text-gray-600 border border-gray-100"
      }`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export default function SecurityActivityPage() {
  return (
    <main className="min-h-screen w-full bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
        {/* PAGE HEADER */}
        <header className="mb-7 -mt-10 flex w-full items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Security & activity log
            </h1>

            <p className="mt-1.5 max-w-xl text-[13px] leading-5 text-gray-600 sm:text-[14px]">
              Monitor security events, authentication activity and important
              administrative actions.
            </p>
          </div>
        </header>

        {/* SUMMARY CARDS */}
        <section className="mb-7 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {/* OPEN ALERTS */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
            <div className="flex min-h-[80px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <ShieldAlert size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Open alerts
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-red-500">7</p>

                  <p className="mt-1 text-sm font-medium text-red-500">
                    Needs review
                  </p>
                </div>
              </div>

              {/* <button
                type="button"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                View all
                <ArrowRight size={15} />
              </button> */}
            </div>
          </div>

          {/* FAILED LOGINS */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
            <div className="flex min-h-[80px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <LockKeyhole size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Failed logins (24h)
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    23
                  </p>

                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    Normal range
                  </p>
                </div>
              </div>

              {/* <button
                type="button"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
              >
                View all
                <ArrowRight size={15} />
              </button> */}
            </div>
          </div>
        </section>

        {/* ACTIVITY SECTION */}
        <section className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* TABLE HEADER */}
          <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Recent activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Latest security and administrative events
              </p>
            </div>

            {/* <button
              type="button"
              className="w-fit rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Export log
            </button> */}
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-x-auto md:block">
            <table className="w-full min-w-[850px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="whitespace-nowrap px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-800">
                    Time
                  </th>

                  <th className="whitespace-nowrap px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-800">
                    Event
                  </th>

                  <th className="whitespace-nowrap px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-800">
                    Actor
                  </th>

                  <th className="whitespace-nowrap px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-800">
                    Status
                  </th>

                  <th className="w-10 px-6 py-4" />
                </tr>
              </thead>

              <tbody>
                {activities.map((activity, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 transition last:border-0 hover:bg-slate-50/60"
                  >
                    {/* TIME */}
                    <td className="px-6 py-5 align-top">
                      <p className="whitespace-nowrap text-sm font-semibold text-slate-900">
                        {activity.time}
                      </p>

                      <p className="mt-1 whitespace-nowrap text-xs text-slate-400">
                        {activity.date}
                      </p>
                    </td>

                    {/* EVENT */}
                    <td className="px-6 py-5">
                      <div className="flex min-w-[300px] items-center gap-3">
                        <ActivityIcon type={activity.type} />

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900">
                            {activity.event}
                          </p>

                          {/* <p className="mt-1 text-xs text-slate-500">
                            {activity.description}
                          </p> */}
                        </div>
                      </div>
                    </td>

                    {/* ACTOR */}
                    <td className="px-6 py-5">
                      <p className="whitespace-nowrap text-sm font-medium text-slate-700">
                        {activity.actor}
                      </p>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <StatusBadge status={activity.status} />
                    </td>

                    {/* ARROW */}
                    {/* <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label={`View ${activity.event}`}
                      >
                        <ArrowRight size={17} />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="divide-y divide-slate-100 md:hidden">
            {activities.map((activity, index) => (
              <article
                key={index}
                className="p-4 transition hover:bg-slate-50 sm:p-5"
              >
                {/* TOP */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <ActivityIcon type={activity.type} />

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-400">
                        {activity.time}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {activity.date}
                      </p>
                    </div>
                  </div>

                  <StatusBadge status={activity.status} />
                </div>

                {/* EVENT */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold leading-5 text-slate-900">
                    {activity.event}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {activity.description}
                  </p>
                </div>

                {/* ACTOR */}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                      Actor
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-700">
                      {activity.actor}
                    </p>
                  </div>

                  {/* <button
                    type="button"
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50"
                  >
                    <ArrowRight size={16} />
                  </button> */}
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          {/* <div className="flex flex-col gap-4 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-slate-500 sm:text-sm">
              Showing <span className="font-medium text-slate-700">1–6</span> of{" "}
              <span className="font-medium text-slate-700">25</span> results
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-sm font-medium text-white"
              >
                1
              </button>

              <button
                type="button"
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-600 transition hover:bg-slate-100 sm:flex"
              >
                2
              </button>

              <button
                type="button"
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-600 transition hover:bg-slate-100 sm:flex"
              >
                3
              </button>

              <span className="flex h-9 w-9 items-center justify-center text-sm text-slate-400">
                ...
              </span>

              <button
                type="button"
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-600 transition hover:bg-slate-100 sm:flex"
              >
                5
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
