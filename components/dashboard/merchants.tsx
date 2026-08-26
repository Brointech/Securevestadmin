"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Store,
  CheckCircle2,
  Clock3,
  Ban,
  Eye,
  MoreVertical,
  TrendingUp,
  UserCheck,
  Activity,
  X,
  Mail,
  Phone,
  Users,
  Wallet,
} from "lucide-react";

type Status = "Active" | "Pending" | "Suspended";

interface Merchant {
  id: number;
  name: string;
  email: string;
  phone: string;
  customers: number;
  savings: number;
  status: Status;
}

const merchants: Merchant[] = [
  {
    id: 1001,
    name: "ABC Supermarket",
    email: "abc@gmail.com",
    phone: "08031234567",
    customers: 182,
    savings: 12500000,
    status: "Active",
  },
  {
    id: 1002,
    name: "Fresh Foods",
    email: "fresh@gmail.com",
    phone: "08035556666",
    customers: 96,
    savings: 7800000,
    status: "Pending",
  },
  {
    id: 1003,
    name: "Tech Hub",
    email: "tech@gmail.com",
    phone: "08036667777",
    customers: 245,
    savings: 23400000,
    status: "Active",
  },
  {
    id: 1004,
    name: "Global Pharmacy",
    email: "pharmacy@gmail.com",
    phone: "08034445555",
    customers: 45,
    savings: 1800000,
    status: "Suspended",
  },
  {
    id: 1005,
    name: "Prime Electronics",
    email: "prime@gmail.com",
    phone: "08037778888",
    customers: 134,
    savings: 9700000,
    status: "Active",
  },
];

export default function Merchants() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return merchants.filter((merchant) => {
      const matchesSearch =
        merchant.name.toLowerCase().includes(search.toLowerCase()) ||
        merchant.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "All" || merchant.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = {
    total: merchants.length,
    active: merchants.filter((m) => m.status === "Active").length,
    pending: merchants.filter((m) => m.status === "Pending").length,
    suspended: merchants.filter((m) => m.status === "Suspended").length,
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(
    null,
  );
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    email: "",
    phone: "",
    category: "",
    savingsPlan: "",
    status: "Active",
  });

  return (
    <div className="space-y-8 mb-4 w-full px-0 sm:px-0 lg:px-2">
      {/* PAGE TITLE */}
      {/* <div className="rounded-xl border bg-white p-4">
        <h2 className="  text-2xl font-bold text-black">Merchant Management</h2>
        <p className="mt-1 text-gray-600">Manage all savings merchants.</p>
      </div> */}
      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 sm:-mt-6">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-gray-600">Total Merchants</p>
            <Store className="text-gray-600" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">{stats.total}</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Active</p>

            <CheckCircle2 className="text-gray-600" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">{stats.active}</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Pending</p>

            <Clock3 className="text-gray-600" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">
            {stats.pending}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Suspended</p>

            <Ban className="text-red-500" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">
            {stats.suspended}
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
              placeholder="Search merchants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 text-gray-600 py-3 pl-11 pr-4 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block max-w-[160px] min-w-0  rounded-xl border border-gray-300 text-gray-600 text-sm px-4 py-3 outline-none overflow-x-hidden"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>

            {/* <button className="rounded-xl bg-primary px-6 py-3 text-white hover:opacity-90">
              + Add Merchant
            </button> */}

            <button
              onClick={() => setOpenModal(true)}
              className="rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
            >
              + Add Merchant
            </button>
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
                  Merchant
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">Phone</th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Customers
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Savings
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((merchant) => (
                <tr
                  key={merchant.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <p className="font-semibold text-gray-600">
                      {merchant.name}
                    </p>

                    <p className="text-sm text-gray-500">{merchant.email}</p>
                  </td>

                  <td className="px-6 py-5 text-gray-600">{merchant.phone}</td>

                  <td className="px-6 py-5 text-gray-600">
                    {merchant.customers}
                  </td>

                  <td className="px-6 py-5 text-black font-medium">
                    ₦{merchant.savings.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          merchant.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : merchant.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                    >
                      {merchant.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      {/* <button className=" rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                        <Eye size={18} />
                      </button> */}

                      <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bottom Widgets */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Top Merchants */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <TrendingUp className="text-primary" />

                <h3 className="text-lg font-bold text-gray-600">
                  Top Performing Merchants
                </h3>
              </div>

              <div className="space-y-5">
                {merchants
                  .sort((a, b) => b.savings - a.savings)
                  .slice(0, 5)
                  .map((merchant, index) => (
                    <div
                      key={merchant.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-gray-600">
                          {index + 1}. {merchant.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {merchant.customers} Customers
                        </p>
                      </div>

                      <span className="font-bold text-primary">
                        ₦{merchant.savings.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Pending Approvals */}

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <UserCheck className="text-yellow-500" />

                <h3 className="text-lg font-bold text-gray-600">
                  Pending Approvals
                </h3>
              </div>

              <div className="space-y-4">
                {merchants
                  .filter((merchant) => merchant.status === "Pending")
                  .map((merchant) => (
                    <div key={merchant.id} className="rounded-xl border p-4">
                      <h4 className="font-semibold text-gray-600">
                        {merchant.name}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        {merchant.email}
                      </p>

                      <div className="mt-4 flex gap-3">
                        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
                          Approve
                        </button>

                        <button className="rounded-lg bg-red-500 px-4 py-2 text-white">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
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
                    ABC Supermarket created a Fixed Savings Plan
                  </p>

                  <span className="text-sm text-gray-500">10 mins ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Fresh Foods submitted KYC documents
                  </p>

                  <span className="text-sm text-gray-500">35 mins ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Prime Electronics updated profile
                  </p>

                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Tech Hub onboarded 12 customers
                  </p>

                  <span className="text-sm text-gray-500">Today</span>
                </div>
              </div>
            </div>
          </section>

          {/* ADD MERCHANT */}
          {openModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-600">
                    Add Merchant
                  </h2>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-2xl text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-600 font-medium">
                      Business Name
                    </label>

                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600 font-medium">
                      Business Email
                    </label>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm  text-gray-600 font-medium">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border p-3 outline-none border-gray-400 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600 font-medium">
                      Category
                    </label>

                    <input
                      type="text"
                      value={form.category}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          category: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600 font-medium">
                      Savings Plan
                    </label>

                    <select
                      value={form.savingsPlan}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          savingsPlan: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-400 text-gray-600 p-3 outline-none focus:border-primary"
                    >
                      <option value="">Select Plan</option>
                      <option>Regular Savings</option>
                      <option>Fixed Savings</option>
                      <option>Target Savings</option>
                      <option>Locked Savings</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600 font-medium">
                      Status
                    </label>

                    <select
                      value={form.status}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          status: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-gray-400 text-gray-600 p-3 outline-none focus:border-primary"
                    >
                      <option>Active</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="rounded-xl border px-6 py-3 border-gray-400 text-gray-600"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      console.log(form);

                      setOpenModal(false);
                    }}
                    className="rounded-xl bg-primary px-6 py-3 text-white"
                  >
                    Create Merchant
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
