"use client";

import { PanelLeft } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="flex h-[62px] w-full items-center border-b border-gray-200 bg-gray-100">
      <div className="flex w-full items-center px-4 sm:px-6 lg:px-4">
        <button
          type="button"
          className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700"
          aria-label="Toggle sidebar"
        >
          <PanelLeft size={22} />
        </button>
        <h1 className="truncate text-xl font-bold text-gray-900 sm:text-2xl lg:text-xl">
          Hello, Samuel Enterprises
        </h1>
      </div>
    </header>
  );
}
