"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  Globe,
  KeyRound,
  LockKeyhole,
  Mail,
  Monitor,
  Save,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";

type ToggleProps = {
  enabled: boolean;
  onChange: () => void;
};

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={enabled}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled ? "bg-emerald-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(true);

  const tabs = [
    {
      name: "General",
      icon: Globe,
    },
    {
      name: "Profile",
      icon: UserRound,
    },
    {
      name: "Security",
      icon: ShieldCheck,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Sessions",
      icon: Monitor,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] px-0 py-6 sm:px-0 sm:py-8 lg:px-0 xl:px-0">
        {/* PAGE HEADER */}
        <header className="mb-7 -mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Settings
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-5 text-gray-600 sm:text-[14px]">
            Manage your administrator account, security preferences and system
            configuration.
          </p>
        </header>

        {/* SETTINGS LAYOUT */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* SETTINGS NAVIGATION */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <nav className="flex gap-1 overflow-x-auto lg:block lg:overflow-visible">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;

                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex min-w-fit items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition lg:w-full ${
                      isActive
                        ? "bg-gray-300 text-slate-600"
                        : "text-slate-600 hover:bg-gray-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon size={18} />

                    <span>{tab.name}</span>

                    {isActive && (
                      <ChevronRight
                        size={16}
                        className="ml-auto hidden lg:block"
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* SETTINGS CONTENT */}
          <div className="min-w-0">
            {/* GENERAL */}
            {activeTab === "General" && (
              <section className="space-y-6">
                {/* GENERAL SETTINGS */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">
                      General settings
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Configure basic settings for your admin dashboard.
                    </p>
                  </div>

                  <div className="space-y-6 p-5 sm:p-6">
                    {/* PLATFORM NAME */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Platform name
                        </label>

                        <p className="mt-1 text-xs text-slate-400">
                          Displayed across the admin panel.
                        </p>
                      </div>

                      <input
                        type="text"
                        defaultValue="SecureVest Admin"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    {/* TIMEZONE */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Timezone
                        </label>

                        <p className="mt-1 text-xs text-slate-400">
                          Used for activity timestamps.
                        </p>
                      </div>

                      <select
                        defaultValue="Africa/Lagos"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      >
                        <option value="Africa/Lagos">Africa/Lagos (WAT)</option>
                        <option value="Europe/London">
                          Europe/London (GMT)
                        </option>
                        <option value="America/New_York">
                          America/New_York (EST)
                        </option>
                      </select>
                    </div>

                    {/* CURRENCY */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Default currency
                        </label>

                        <p className="mt-1 text-xs text-slate-400">
                          Primary currency used by the platform.
                        </p>
                      </div>

                      <select
                        defaultValue="NGN"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      >
                        <option value="NGN">Nigerian Naira (₦)</option>
                        <option value="USD">US Dollar ($)</option>
                        <option value="GBP">British Pound (£)</option>
                        <option value="EUR">Euro (€)</option>
                      </select>
                    </div>

                    {/* LANGUAGE */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Language
                        </label>

                        <p className="mt-1 text-xs text-slate-400">
                          Dashboard display language.
                        </p>
                      </div>

                      <select
                        defaultValue="English"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      >
                        <option>English</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ADMIN INFORMATION */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">
                      Administrator information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Information associated with your administrator account.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        First name
                      </label>

                      <input
                        type="text"
                        defaultValue="B."
                        className="h-11 w-full rounded-xl border text-gray-500 border-slate-200 px-4 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Last name
                      </label>

                      <input
                        type="text"
                        defaultValue="Adeyemi"
                        className="h-11 w-full rounded-xl border text-gray-500 border-slate-200 px-4 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-500">
                        Email address
                      </label>

                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                          type="email"
                          defaultValue="admin@securevest.com"
                          className="h-11 w-full rounded-xl border text-gray-500 border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PROFILE */}
            {activeTab === "Profile" && (
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                  <h2 className="text-base font-semibold text-slate-900">
                    Admin profile
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage your administrator profile information.
                  </p>
                </div>

                <div className="space-y-6 p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-700">
                      BA
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        B. Adeyemi
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Super Administrator
                      </p>

                      <button
                        type="button"
                        className="mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        Change profile picture
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        First name
                      </label>

                      <input
                        type="text"
                        defaultValue="B."
                        className="h-11 w-full rounded-xl border border-slate-200 px-4   text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Last name
                      </label>

                      <input
                        type="text"
                        defaultValue="Adeyemi"
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email
                      </label>

                      <input
                        type="email"
                        defaultValue="admin@securevest.com"
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Phone number
                      </label>

                      <input
                        type="tel"
                        defaultValue="+234 800 000 0000"
                        className="h-11 w-full rounded-xl border border-slate-200 px-4  text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* SECURITY */}
            {activeTab === "Security" && (
              <section className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">
                      Security settings
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Protect your administrator account and platform access.
                    </p>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {/* 2FA */}
                    <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                      <div className="flex min-w-0 gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          <ShieldCheck size={19} />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            Two-factor authentication
                          </h3>

                          <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                            Require an additional verification code when
                            administrators sign in.
                          </p>
                        </div>
                      </div>

                      <Toggle
                        enabled={twoFactor}
                        onChange={() => setTwoFactor(!twoFactor)}
                      />
                    </div>

                    {/* SESSION */}
                    <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                      <div className="flex min-w-0 gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <LockKeyhole size={19} />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            Automatic session timeout
                          </h3>

                          <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                            Automatically sign out inactive administrators after
                            a period of inactivity.
                          </p>
                        </div>
                      </div>

                      <Toggle
                        enabled={sessionTimeout}
                        onChange={() => setSessionTimeout(!sessionTimeout)}
                      />
                    </div>
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">
                      Password
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Update your administrator password.
                    </p>
                  </div>

                  <div className="space-y-5 p-5 sm:p-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Current password
                      </label>

                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          New password
                        </label>

                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="h-11 w-full rounded-xl border border-slate-200 px-4  text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Confirm password
                        </label>

                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="h-11 w-full rounded-xl border border-slate-200 px-4 text-gray-600 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-gray-600 text-sm font-medium text-white transition hover:bg-emerald-700"
                    >
                      <KeyRound size={16} />
                      Update password
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* NOTIFICATIONS */}
            {activeTab === "Notifications" && (
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                  <h2 className="text-base font-semibold text-slate-900">
                    Notification preferences
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Choose which events should send notifications to
                    administrators.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {/* EMAIL */}
                  <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Mail size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Email notifications
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Receive important platform updates by email.
                        </p>
                      </div>
                    </div>

                    <Toggle
                      enabled={emailAlerts}
                      onChange={() => setEmailAlerts(!emailAlerts)}
                    />
                  </div>

                  {/* SECURITY */}
                  <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                        <ShieldCheck size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Security alerts
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Get notified when suspicious activity is detected.
                        </p>
                      </div>
                    </div>

                    <Toggle
                      enabled={securityAlerts}
                      onChange={() => setSecurityAlerts(!securityAlerts)}
                    />
                  </div>

                  {/* LOGIN */}
                  <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Smartphone size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          New login alerts
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Notify administrators whenever a new device logs in.
                        </p>
                      </div>
                    </div>

                    <Toggle
                      enabled={loginAlerts}
                      onChange={() => setLoginAlerts(!loginAlerts)}
                    />
                  </div>

                  {/* WEEKLY */}
                  <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                        <Bell size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Weekly reports
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Receive a weekly summary of platform activity.
                        </p>
                      </div>
                    </div>

                    <Toggle
                      enabled={weeklyReports}
                      onChange={() => setWeeklyReports(!weeklyReports)}
                    />
                  </div>
                </div>
              </section>
            )}

            {/* SESSIONS */}
            {activeTab === "Sessions" && (
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                  <h2 className="text-base font-semibold text-slate-900">
                    Active sessions
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review devices currently signed in to your administrator
                    account.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {/* CURRENT SESSION */}
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Monitor size={20} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-slate-900">
                            Windows • Chrome
                          </h3>

                          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
                            Current session
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          Lagos, Nigeria • Active now
                        </p>

                        {/* <p className="mt-1 text-xs text-slate-400">
                          IP: 197.210.43.12
                        </p> */}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-fit text-sm font-medium text-slate-500 hover:text-red-600"
                    >
                      Current session
                    </button>
                  </div>

                  {/* MOBILE SESSION */}
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <Smartphone size={20} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          iPhone • Safari
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          Lagos, Nigeria • 2 hours ago
                        </p>

                        {/* <p className="mt-1 text-xs text-slate-400">
                          IP: 197.210.43.20
                        </p> */}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-fit rounded-lg border border-red-100 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Revoke session
                    </button>
                  </div>

                  {/* OTHER SESSION */}
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <Monitor size={20} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Windows • Edge
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          Abuja, Nigeria • Yesterday
                        </p>

                        {/* <p className="mt-1 text-xs text-slate-400">
                          IP: 102.89.45.18
                        </p> */}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-fit rounded-lg border border-red-100 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Revoke session
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 p-5 sm:p-6">
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Sign out of all other sessions
                  </button>
                </div>
              </section>
            )}

            {/* SAVE BAR */}
            <div className="mt-6 flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-xs text-slate-400">
                Changes will take effect immediately after saving.
              </p>

              <div className="flex w-full gap-3 sm:w-auto">
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex-none"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 sm:flex-none"
                >
                  <Save size={16} />
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
