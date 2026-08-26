// "use client";

// import { useMemo, useState } from "react";
// import {
//   Search,
//   Wallet,
//   ArrowDownCircle,
//   ArrowUpCircle,
//   Clock3,
//   Eye,
//   MoreVertical,
//   Download,
// } from "lucide-react";

// type Status = "Completed" | "Pending" | "Failed";
// type TransactionType = "Deposit" | "Withdrawal";

// interface Transaction {
//   id: string;
//   customer: string;
//   merchant: string;
//   type: TransactionType;
//   amount: number;
//   status: Status;
//   date: string;
// }

// const transactions: Transaction[] = [
//   {
//     id: "TXN-1001",
//     customer: "Samuel Adu",
//     merchant: "ABC Supermarket",
//     type: "Deposit",
//     amount: 50000,
//     status: "Completed",
//     date: "06 Aug 2026",
//   },
//   {
//     id: "TXN-1002",
//     customer: "Ada Chukwu",
//     merchant: "Prime Electronics",
//     type: "Withdrawal",
//     amount: 120000,
//     status: "Pending",
//     date: "06 Aug 2026",
//   },
//   {
//     id: "TXN-1003",
//     customer: "Emeka Obi",
//     merchant: "Tech Hub",
//     type: "Deposit",
//     amount: 250000,
//     status: "Completed",
//     date: "05 Aug 2026",
//   },
//   {
//     id: "TXN-1004",
//     customer: "Bisi Lawal",
//     merchant: "Fresh Foods",
//     type: "Withdrawal",
//     amount: 40000,
//     status: "Failed",
//     date: "05 Aug 2026",
//   },
//   {
//     id: "TXN-1005",
//     customer: "Tunde Bakare",
//     merchant: "Global Pharmacy",
//     type: "Deposit",
//     amount: 850000,
//     status: "Completed",
//     date: "04 Aug 2026",
//   },
// ];

// export default function Transactions() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [typeFilter, setTypeFilter] = useState("All");

//   // Modal (Part 2)
//   const [selectedTransaction, setSelectedTransaction] =
//     useState<Transaction | null>(null);

//   const [detailsOpen, setDetailsOpen] = useState(false);

//   const filteredTransactions = useMemo(() => {
//     return transactions.filter((transaction) => {
//       const searchMatch =
//         transaction.customer.toLowerCase().includes(search.toLowerCase()) ||
//         transaction.id.toLowerCase().includes(search.toLowerCase());

//       const statusMatch =
//         statusFilter === "All" || transaction.status === statusFilter;

//       const typeMatch = typeFilter === "All" || transaction.type === typeFilter;

//       return searchMatch && statusMatch && typeMatch;
//     });
//   }, [search, statusFilter, typeFilter]);

//   const stats = {
//     total: transactions.length,
//     deposits: transactions
//       .filter((t) => t.type === "Deposit")
//       .reduce((a, b) => a + b.amount, 0),

//     withdrawals: transactions
//       .filter((t) => t.type === "Withdrawal")
//       .reduce((a, b) => a + b.amount, 0),

//     pending: transactions.filter((t) => t.status === "Pending").length,
//   };

//   return (
//     <div className="space-y-8">
//       {/* PAGE TITLE */}
//       <div className="rounded-xl border bg-white p-4">
//         <h2 className="text-2xl font-bold text-black">Transactions</h2>

//         <p className="text-gray-500 mt-1">Monitor all savings transactions.</p>
//       </div>

//       {/* STATS */}
//       <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//         <div className="rounded-xl bg-white p-3 shadow-sm">
//           <div className="flex items-center justify-between">
//             <p className="text-gray-500 text-sm">Transactions</p>

//             <Wallet className="text-primary" />
//           </div>

//           <h2 className="mt-4 text-3xl font-bold">{stats.total}</h2>
//         </div>
//         {/* <div className="rounded-xl bg-white p-5 shadow-sm">
//           <div className="flex items-center justify-between">
//             <p className="text-left text-gray-600">TOTAL MERCHANTS</p>

//             <Wallet className="text-gray-600" />
//           </div>

//           <h2 className="mt-4 text-gray-600 text-3xl font-bold">
//             {stats.total}
//           </h2>
//         </div> */}

//         <div className="rounded-xl bg-white p-4 shadow-sm">
//           <div className="flex items-center justify-between ">
//             <p className="text-gray-500 text-sm">Deposits</p>

//             <ArrowDownCircle className="text-green-600" />
//           </div>

//           <h2 className="mt-4 text-3xl font-bold">
//             ₦{stats.deposits.toLocaleString()}
//           </h2>
//         </div>

//         <div className="rounded-xl bg-white p-5 shadow-sm">
//           <div className="flex items-center justify-between">
//             <p className="text-gray-500 text-sm">Withdrawals</p>

//             <ArrowUpCircle className="text-red-500" />
//           </div>

//           <h2 className="mt-4 text-3xl font-bold">
//             ₦{stats.withdrawals.toLocaleString()}
//           </h2>
//         </div>

//         <div className="rounded-xl bg-white p-5 shadow-sm">
//           <div className="flex items-center justify-between">
//             <p className="text-gray-500 text-sm">Pending</p>

//             <Clock3 className="text-yellow-500" />
//           </div>

//           <h2 className="mt-4 text-3xl font-bold">{stats.pending}</h2>
//         </div>
//       </section>

//       {/* FILTERS */}

//       <section className="rounded-xl bg-white p-4 shadow-sm">
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div className="relative w-full lg:max-w-md">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//               size={18}
//             />

//             <input
//               type="text"
//               placeholder="Search transaction..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-primary"
//             />
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="rounded-xl border px-4 py-3"
//             >
//               <option>All</option>
//               <option>Completed</option>
//               <option>Pending</option>
//               <option>Failed</option>
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(e) => setTypeFilter(e.target.value)}
//               className="rounded-xl border px-4 py-3"
//             >
//               <option>All</option>
//               <option>Deposit</option>
//               <option>Withdrawal</option>
//             </select>

//             {/* <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-white">
//               <Download size={18} />
//               Export CSV
//             </button> */}
//           </div>
//         </div>
//       </section>

//       {/* TABLE */}

//       <section className="overflow-hidden rounded-xl bg-white shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="min-w-[1050px] w-full">
//             <thead className="border-b bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Transaction ID
//                 </th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Customer
//                 </th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Merchant
//                 </th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">Type</th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Amount
//                 </th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Status
//                 </th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">Date</th>

//                 <th className="px-6 py-4 text-left text-xs uppercase">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredTransactions.map((transaction) => (
//                 <tr key={transaction.id} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-5 font-medium">{transaction.id}</td>

//                   <td className="px-6 py-5">{transaction.customer}</td>

//                   <td className="px-6 py-5">{transaction.merchant}</td>

//                   <td className="px-6 py-5">
//                     <span
//                       className={`rounded-full px-3 py-1 text-xs font-medium ${
//                         transaction.type === "Deposit"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {transaction.type}
//                     </span>
//                   </td>

//                   <td className="px-6 py-5 font-semibold">
//                     ₦{transaction.amount.toLocaleString()}
//                   </td>

//                   <td className="px-6 py-5">
//                     <span
//                       className={`rounded-full px-3 py-1 text-xs font-medium
//                         ${
//                           transaction.status === "Completed"
//                             ? "bg-green-100 text-green-700"
//                             : transaction.status === "Pending"
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-red-100 text-red-700"
//                         }`}
//                     >
//                       {transaction.status}
//                     </span>
//                   </td>

//                   <td className="px-6 py-5">{transaction.date}</td>

//                   <td className="px-6 py-5">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           setSelectedTransaction(transaction);
//                           setDetailsOpen(true);
//                         }}
//                         className="rounded-lg p-2 hover:bg-gray-100"
//                       >
//                         <Eye size={18} />
//                       </button>

//                       <button className="rounded-lg p-2 hover:bg-gray-100">
//                         <MoreVertical size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Receipt,
  ArrowDownCircle,
  ArrowUpCircle,
  XCircle,
  MoreVertical,
  TrendingUp,
  Activity,
  Repeat,
} from "lucide-react";

type TxType = "Deposit" | "Withdrawal" | "Transfer";
type TxStatus = "Successful" | "Pending" | "Failed";

interface Transaction {
  id: string;
  saver: string;
  email: string;
  type: TxType;
  amount: number;
  status: TxStatus;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: "TXN-90231",
    saver: "Adaeze Okafor",
    email: "adaeze@gmail.com",
    type: "Deposit",
    amount: 250000,
    status: "Successful",
    date: "2026-08-25 09:14",
  },
  {
    id: "TXN-90232",
    saver: "Tunde Bello",
    email: "tunde@gmail.com",
    type: "Withdrawal",
    amount: 120000,
    status: "Pending",
    date: "2026-08-25 10:02",
  },
  {
    id: "TXN-90233",
    saver: "Ifeoma Nwosu",
    email: "ifeoma@gmail.com",
    type: "Deposit",
    amount: 500000,
    status: "Successful",
    date: "2026-08-24 16:47",
  },
  {
    id: "TXN-90234",
    saver: "Chinedu Eze",
    email: "chinedu@gmail.com",
    type: "Transfer",
    amount: 75000,
    status: "Failed",
    date: "2026-08-24 12:31",
  },
  {
    id: "TXN-90235",
    saver: "Fatima Bako",
    email: "fatima@gmail.com",
    type: "Withdrawal",
    amount: 300000,
    status: "Successful",
    date: "2026-08-23 08:20",
  },
  {
    id: "TXN-90236",
    saver: "Adaeze Okafor",
    email: "adaeze@gmail.com",
    type: "Transfer",
    amount: 45000,
    status: "Pending",
    date: "2026-08-23 14:55",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesSearch =
        tx.saver.toLowerCase().includes(search.toLowerCase()) ||
        tx.email.toLowerCase().includes(search.toLowerCase()) ||
        tx.id.toLowerCase().includes(search.toLowerCase());

      const matchesType = type === "All" || tx.type === type;
      const matchesStatus = status === "All" || tx.status === status;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [search, type, status]);

  const stats = {
    total: transactions.length,
    deposits: transactions
      .filter((t) => t.type === "Deposit" && t.status === "Successful")
      .reduce((sum, t) => sum + t.amount, 0),
    withdrawals: transactions
      .filter((t) => t.type === "Withdrawal" && t.status === "Successful")
      .reduce((sum, t) => sum + t.amount, 0),
    failed: transactions.filter((t) => t.status === "Failed").length,
  };

  return (
    <div className="space-y-8 mb-4 w-full px-0 sm:px-0 lg:px-2">
      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 sm:-mt-6">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-gray-600">Total Transactions</p>
            <Receipt className="text-gray-600" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">{stats.total}</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Total Deposits</p>

            <ArrowDownCircle className="text-green-600" />
          </div>

          <h2 className="mt-4 text-black text-2xl sm:text-3xl font-bold break-all">
            ₦{stats.deposits.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Total Withdrawals</p>

            <ArrowUpCircle className="text-yellow-600" />
          </div>

          <h2 className="mt-4 text-black text-2xl sm:text-3xl font-bold break-all">
            ₦{stats.withdrawals.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Failed</p>

            <XCircle className="text-red-500" />
          </div>

          <h2 className="mt-4 text-black text-3xl font-bold">{stats.failed}</h2>
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
              placeholder="Search by saver, email or reference..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 text-gray-600 py-3 pl-11 pr-4 outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block max-w-[160px] min-w-0 rounded-xl border border-gray-300 text-gray-600 text-sm px-4 py-3 outline-none overflow-x-hidden"
            >
              <option>All</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Transfer</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block max-w-[160px] min-w-0 rounded-xl border border-gray-300 text-gray-600 text-sm px-4 py-3 outline-none overflow-x-hidden"
            >
              <option>All</option>
              <option>Successful</option>
              <option>Pending</option>
              <option>Failed</option>
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

                <th className="px-6 py-4 text-left text-xs uppercase">Saver</th>

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
              {filtered.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-6 py-5 font-medium text-gray-600">
                    {tx.id}
                  </td>

                  <td className="px-6 py-5">
                    <p className="font-semibold text-gray-600">{tx.saver}</p>
                    <p className="text-sm text-gray-500">{tx.email}</p>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium
                        ${
                          tx.type === "Deposit"
                            ? "bg-green-50 text-green-700"
                            : tx.type === "Withdrawal"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                    >
                      {tx.type === "Deposit" && <ArrowDownCircle size={14} />}
                      {tx.type === "Withdrawal" && <ArrowUpCircle size={14} />}
                      {tx.type === "Transfer" && <Repeat size={14} />}
                      {tx.type}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-black font-medium">
                    ₦{tx.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          tx.status === "Successful"
                            ? "bg-green-100 text-green-700"
                            : tx.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                    >
                      {tx.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600 whitespace-nowrap">
                    {tx.date}
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
                    No transactions match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Bottom Widgets */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Largest Transactions */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <TrendingUp className="text-primary" />

                <h3 className="text-lg font-bold text-gray-600">
                  Largest Transactions
                </h3>
              </div>

              <div className="space-y-5">
                {[...transactions]
                  .sort((a, b) => b.amount - a.amount)
                  .slice(0, 5)
                  .map((tx, index) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-600 truncate">
                          {index + 1}. {tx.saver}
                        </p>

                        <p className="text-sm text-gray-500">{tx.type}</p>
                      </div>

                      <span className="font-bold text-primary whitespace-nowrap">
                        ₦{tx.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Pending Transactions */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <ArrowUpCircle className="text-yellow-500" />

                <h3 className="text-lg font-bold text-gray-600">
                  Pending Transactions
                </h3>
              </div>

              <div className="space-y-4">
                {transactions
                  .filter((tx) => tx.status === "Pending")
                  .map((tx) => (
                    <div key={tx.id} className="rounded-xl border p-4">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-gray-600 truncate">
                          {tx.saver}
                        </h4>

                        <span className="font-bold text-gray-600 whitespace-nowrap">
                          ₦{tx.amount.toLocaleString()}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        {tx.type} · {tx.id}
                      </p>

                      <div className="mt-4 flex gap-3">
                        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
                          Approve
                        </button>

                        <button className="rounded-lg bg-red-500 px-4 py-2 text-white">
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}

                {transactions.filter((tx) => tx.status === "Pending").length ===
                  0 && (
                  <p className="text-sm text-gray-500">
                    No pending transactions.
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
                    Adaeze Okafor deposited ₦250,000
                  </p>

                  <span className="text-sm text-gray-500">10 mins ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Tunde Bello requested a withdrawal of ₦120,000
                  </p>

                  <span className="text-sm text-gray-500">35 mins ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Chinedu Eze's transfer of ₦75,000 failed
                  </p>

                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium text-gray-600">
                    Ifeoma Nwosu deposited ₦500,000
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
