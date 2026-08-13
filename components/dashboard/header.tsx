"use client";

import { Bell, Download, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full mt-10 sm:mt-0 ">
      <div className="flex items-center overflow-x-hidden gap-2 mt-2 rounded-xl bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="shrink-0">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Overview
          </h2>
        </div>

        {/* Right */}
        <div className="flex w-[200px] lg:w-[600px] items-center gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div
            className="
          flex
          h-11
          w-full
          items-center
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          shadow-sm
          sm:flex-1
          lg:w-80
          xl:w-96
        "
          >
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Notification + Avatar */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            {/* Notification */}
            <button
              className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-sm
            transition
            hover:bg-gray-50
          "
            >
              <Bell className="h-5 w-5 text-gray-600" />

              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* Avatar */}
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="h-11 w-11 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
