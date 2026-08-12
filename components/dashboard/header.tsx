"use client";

import { Bell, Download, Search } from "lucide-react";

export default function Header() {
  return (
    //   <header>
    //     <div className="flex items-center justify-between gap-4 md:items-center md:justify-between xl:items-center xl:justify-between w-full rounded-xl bg-white p-4 shadow-sm overflow-hidden">
    //       {/* left Section */}
    //       <div className="">
    //         <h2 className="text-[18px] sm:text-2xl font-bold text-black text-text">
    //           Dashboard
    //         </h2>
    //       </div>

    //       {/* Right */}
    //       <div
    //         className="flex xs:flex-col items-center w-full sm:w-52 md:w-60
    //   h-10 sm:h-10 lg:h-11 xl:h-11 gap-2 sm:flex-row sm:items-center sm:justify-end lg:w-auto md:-mt-0 lg:-mt-0  lg:overflow-hidden"
    //       >
    //         {/* Search */}
    //         <div
    //           className="
    //   flex items-center gap-2
    //  xs:w-42
    //   sm:w-52
    //   lg:w-80
    //   xl:w-96
    //   rounded-xl
    //   border border-gray-100
    //   bg-white
    //   px-4 py-2.5
    //   shadow-sm

    // "
    //         >
    //           <Search size={18} className="flex-shrink-0 text-gray-400" />

    //           <input
    //             type="text"
    //             placeholder="Search..."
    //             className="
    //     w-full
    //     bg-transparent
    //     text-sm
    //     text-gray-700
    //     placeholder:text-gray-400
    //     outline-none
    //   "
    //           />
    //         </div>
    //         {/* Notification */}
    //         <div className="flex gap-4">
    //           <button className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 lg:h-11 xl:h-11  rounded-xl border border-gray-200 bg-white p-3 shadow-sm ">
    //             <Bell size={18} className="text-[#444647] sm:w-5 sm:h-5" />

    //             <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
    //           </button>

    //           {/* Avatar */}
    //           <img
    //             src="https://i.pravatar.cc/100"
    //             alt="admin"
    //             className="h-11 w-11 rounded-full object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    <header className="w-full sm:px-6 sm:py-8 lg:px-8 xl:px-10 -mt-10">
      <div className="flex items-center gap-12 mt-2 rounded-xl bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
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
