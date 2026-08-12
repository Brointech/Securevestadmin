"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  Clock3,
  Eye,
  MoreVertical,
  Download,
} from "lucide-react";

type Status = "Completed" | "Pending" | "Failed";
type TransactionType = "Deposit" | "Withdrawal";

interface Transaction {
  id: string;
  customer: string;
  merchant: string;
  type: TransactionType;
  amount: number;
  status: Status;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: "TXN-1001",
    customer: "Samuel Adu",
    merchant: "ABC Supermarket",
    type: "Deposit",
    amount: 50000,
    status: "Completed",
    date: "06 Aug 2026",
  },
  {
    id: "TXN-1002",
    customer: "Ada Chukwu",
    merchant: "Prime Electronics",
    type: "Withdrawal",
    amount: 120000,
    status: "Pending",
    date: "06 Aug 2026",
  },
  {
    id: "TXN-1003",
    customer: "Emeka Obi",
    merchant: "Tech Hub",
    type: "Deposit",
    amount: 250000,
    status: "Completed",
    date: "05 Aug 2026",
  },
  {
    id: "TXN-1004",
    customer: "Bisi Lawal",
    merchant: "Fresh Foods",
    type: "Withdrawal",
    amount: 40000,
    status: "Failed",
    date: "05 Aug 2026",
  },
  {
    id: "TXN-1005",
    customer: "Tunde Bakare",
    merchant: "Global Pharmacy",
    type: "Deposit",
    amount: 850000,
    status: "Completed",
    date: "04 Aug 2026",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  // Modal (Part 2)
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const searchMatch =
        transaction.customer.toLowerCase().includes(search.toLowerCase()) ||
        transaction.id.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" || transaction.status === statusFilter;

      const typeMatch = typeFilter === "All" || transaction.type === typeFilter;

      return searchMatch && statusMatch && typeMatch;
    });
  }, [search, statusFilter, typeFilter]);

  const stats = {
    total: transactions.length,
    deposits: transactions
      .filter((t) => t.type === "Deposit")
      .reduce((a, b) => a + b.amount, 0),

    withdrawals: transactions
      .filter((t) => t.type === "Withdrawal")
      .reduce((a, b) => a + b.amount, 0),

    pending: transactions.filter((t) => t.status === "Pending").length,
  };

  return (
    <div className="space-y-8">
      {/* PAGE TITLE */}
      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-2xl font-bold text-black">Transactions</h2>

        <p className="text-gray-500 mt-1">Monitor all savings transactions.</p>
      </div>

      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Transactions</p>

            <Wallet className="text-primary" />
          </div>

          <h2 className="mt-4 text-3xl font-bold">{stats.total}</h2>
        </div>
        {/* <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-left text-gray-600">TOTAL MERCHANTS</p>

            <Wallet className="text-gray-600" />
          </div>

          <h2 className="mt-4 text-gray-600 text-3xl font-bold">
            {stats.total}
          </h2>
        </div> */}

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between ">
            <p className="text-gray-500 text-sm">Deposits</p>

            <ArrowDownCircle className="text-green-600" />
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            ₦{stats.deposits.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Withdrawals</p>

            <ArrowUpCircle className="text-red-500" />
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            ₦{stats.withdrawals.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Pending</p>

            <Clock3 className="text-yellow-500" />
          </div>

          <h2 className="mt-4 text-3xl font-bold">{stats.pending}</h2>
        </div>
      </section>

      {/* FILTERS */}

      <section className="rounded-xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search transaction..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border px-4 py-3"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-xl border px-4 py-3"
            >
              <option>All</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
            </select>

            {/* <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-white">
              <Download size={18} />
              Export CSV
            </button> */}
          </div>
        </div>
      </section>

      {/* TABLE */}

      <section className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[1050px] w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase">
                  Transaction ID
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase">
                  Merchant
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
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-5 font-medium">{transaction.id}</td>

                  <td className="px-6 py-5">{transaction.customer}</td>

                  <td className="px-6 py-5">{transaction.merchant}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        transaction.type === "Deposit"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    ₦{transaction.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : transaction.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">{transaction.date}</td>

                  <td className="px-6 py-5">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setDetailsOpen(true);
                        }}
                        className="rounded-lg p-2 hover:bg-gray-100"
                      >
                        <Eye size={18} />
                      </button>

                      <button className="rounded-lg p-2 hover:bg-gray-100">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
