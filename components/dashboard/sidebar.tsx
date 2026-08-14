"use client";

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
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { icon: House, title: "Dashboard", href: "/dashboard" },
  { icon: CircleUser, title: "Users", href: "/user" },
  { icon: Accessibility, title: "Roles & Access", href: "/roles" },
  { icon: TableOfContents, title: "Content", href: "/contentt" },
  { icon: Siren, title: "Security & Alerts", href: "/securityalert" },
  { icon: Settings, title: "Settings", href: "/settingss" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-5 z-40">
        <button onClick={() => setOpen(true)}>
          <Menu size={26} className="text-gray-600" />
        </button>
        {/* <h2 className="font-semibold text-lg">Dashboard</h2> */}
        <div className="w-6" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 h-full w-60 bg-[#F5F5F5] border-r flex flex-col justify-between z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div>
          {/* Logo Area */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 p-4">
              <img src="/logo.png" alt="" className="" />

              <p className="text-black font-semibold flex gap-0">
                Secure <span className="text-gray-500">Vest</span>
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-gray-600 mr-3"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Menu */}
          <nav className="p-4 space-y-2">
            {menus.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center gap-3 w-full px-3 py-2 rounded-[7px] transition-all duration-200 group
                  ${
                    active
                      ? "bg-[#E1E1E1] text-black shadow-md "
                      : "text-black hover:bg-primary-light hover:text-black "
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                  )}

                  <item.icon
                    size={18}
                    className={
                      active
                        ? "text-[#14181A]"
                        : "text-black group-hover:text-black"
                    }
                  />

                  <span className="text-sm font-semibold">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
