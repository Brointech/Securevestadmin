// "use client";

// import { useState } from "react";
// import { House, Siren, Settings, Menu } from "lucide-react";

// import Verified from "@/components/user/verified";

// type Tab = "all" | "verified" | "pending" | "suspended";

// const tabs = [
//   {
//     id: "all",
//     label: "All",
//     icon: Menu,
//   },
//   {
//     id: "verified",
//     label: "Verified",
//     icon: House,
//   },
//   {
//     id: "pending",
//     label: "Pending Kyc",
//     icon: Settings,
//   },
//   {
//     id: "suspended",
//     label: "Suspended",
//     icon: Siren,
//   },
// ] as const;

// export default function User() {
//   const [activeTab, setActiveTab] = useState<Tab>("all");
//   return (
//     <>
//       <div className="">
//         <section className="mb-8 -mt-10">
//           <div className="flex flex-col gap-5">
//             <div className="mb-8">
//               <h2 className="text-black text-22 sm:text-2xl font-semibold">
//                 Users
//               </h2>
//               <p className="mt-1 text-[12px] text-gray-700">
//                 Manage banners, promotions, articles, onboarding messages and
//                 product content.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* Tabs */}
//         <div className="hidden mb-8 md:flex flex-wrap gap-3  border-gray-200 pb-4">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;

//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition
//                 ${
//                   activeTab === tab.id
//                     ? "bg-primary text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 <Icon size={18} />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Recent Transactions */}
//         <section className="mt-8 w-full rounded-2xl border border-1 border-gray-300 ">
//           <div className="overflow-x-auto">
//             <table className="min-w-[100px] lg:w-full xl:w-full">
//               <thead>
//                 <tr className="border-b border-gray-300  ">
//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     User
//                   </th>
//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     Phone
//                   </th>
//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     KYC Tier
//                   </th>
//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     Status
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr className="border-b border-gray-300 text-gray-600  ">
//                   <td className="px-6 py-3 font-medium whitespace-nowrap">
//                     Ada Chukwu
//                   </td>

//                   <td className="px-6 py-3 whitespace-nowrap">08123329873</td>

//                   <td className="px-6 py-3 whitespace-nowrap   text-black font-medium">
//                     Tier 3
//                   </td>

//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 text-gray-600 ">
//                   <td className="px-6 py-3 font-medium">Emeka Obi</td>
//                   <td className="px-6 py-3"> 08123321928</td>
//                   <td className="px-6 py-3 text-black font-medium"> Tier 2</td>
//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>

//                 <tr className="border-b border-gray-300  text-gray-600 ">
//                   <td className="px-6 py-3 font-medium">Bisi Lawal</td>
//                   <td className="px-6 py-3"> 08139849873</td>
//                   <td className="px-6 py-3 text-black font-medium">Tier 1</td>
//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-amber-200 px-4 py-1 text-sm text-black">
//                       Pending Kyc
//                     </span>
//                   </td>
//                 </tr>

//                 <tr className="text-gray-600 ">
//                   <td className="px-6 py-3 font-medium">Tunde Bakare</td>
//                   <td className="px-6 py-3"> 08129853885</td>
//                   <td className="px-6 py-3 text-black font-medium">Tier 3</td>
//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10  px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>

//       {/* Content */}
//       {/* {activeTab === "all" && <User />} */}
//       {activeTab === "verified" && <Verified />}
//       {/* {activeTab === "pending" && <Transactions />}
//       {activeTab === "suspended" && <Finances />} */}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import { House, Siren, Settings, Menu } from "lucide-react";

// import Verified from "@/components/user/verified";

// type Tab = "all" | "verified" | "pending" | "suspended";

// const tabs = [
//   {
//     id: "all",
//     label: "All",
//     icon: Menu,
//   },
//   {
//     id: "verified",
//     label: "Verified",
//     icon: House,
//   },
//   {
//     id: "pending",
//     label: "Pending KYC",
//     icon: Settings,
//   },
//   {
//     id: "suspended",
//     label: "Suspended",
//     icon: Siren,
//   },
// ] as const;

// export default function User() {
//   const [activeTab, setActiveTab] = useState<Tab>("all");

//   return (
//     <div className="">
//       {/* Header */}
//       <section className="-mt-4">
//         <div className="flex flex-col gap-5">
//           <div className="mb-8">
//             <h2 className="text-black text-2xl font-semibold">Users</h2>

//             <p className="mt-1 text-[13px] text-gray-700">
//               Manage users, KYC verification and account status.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Tabs */}
//       <div className="mb-8 hidden flex-wrap gap-3 border-gray-200 pb-4 md:flex">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;

//           return (
//             <button
//               key={tab.id}
//               type="button"
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
//                 activeTab === tab.id
//                   ? "bg-primary text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               <Icon size={18} />
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* =========================
//           ALL USERS
//       ========================== */}
//       {activeTab === "all" && (
//         <section className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-300 bg-white">
//           <div className="w-full overflow-x-auto">
//             <table className="w-full min-w-[700px]">
//               <thead>
//                 <tr className="border-b border-gray-300">
//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     User
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     Phone
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     KYC Tier
//                   </th>

//                   <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
//                     Status
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {/* Ada */}
//                 <tr className="border-b border-gray-300 text-gray-600">
//                   <td className="whitespace-nowrap px-6 py-3 font-medium">
//                     Ada Chukwu
//                   </td>

//                   <td className="whitespace-nowrap px-6 py-3">08123329873</td>

//                   <td className="whitespace-nowrap px-6 py-3 font-medium text-black">
//                     Tier 3
//                   </td>

//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>

//                 {/* Emeka */}
//                 <tr className="border-b border-gray-300 text-gray-600">
//                   <td className="whitespace-nowrap px-6 py-3 font-medium">
//                     Emeka Obi
//                   </td>

//                   <td className="whitespace-nowrap px-6 py-3">08123321928</td>

//                   <td className="whitespace-nowrap px-6 py-3 font-medium text-black">
//                     Tier 2
//                   </td>

//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>

//                 {/* Bisi */}
//                 <tr className="border-b border-gray-300 text-gray-600">
//                   <td className="whitespace-nowrap px-6 py-3 font-medium">
//                     Bisi Lawal
//                   </td>

//                   <td className="whitespace-nowrap px-6 py-3">08139849873</td>

//                   <td className="whitespace-nowrap px-6 py-3 font-medium text-black">
//                     Tier 1
//                   </td>

//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-amber-200 px-4 py-1 text-sm text-black">
//                       Pending KYC
//                     </span>
//                   </td>
//                 </tr>

//                 {/* Tunde */}
//                 <tr className="text-gray-600">
//                   <td className="whitespace-nowrap px-6 py-3 font-medium">
//                     Tunde Bakare
//                   </td>

//                   <td className="whitespace-nowrap px-6 py-3">08129853885</td>

//                   <td className="whitespace-nowrap px-6 py-3 font-medium text-black">
//                     Tier 3
//                   </td>

//                   <td className="px-6 py-3">
//                     <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
//                       Verified
//                     </span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>
//       )}

//       {/* =========================
//           VERIFIED USERS
//       ========================== */}
//       {activeTab === "verified" && (
//         <div className="mt-8">
//           <Verified />
//         </div>
//       )}

//       {/* =========================
//           PENDING KYC
//       ========================== */}
//       {activeTab === "pending" && (
//         <section className="mt-8 w-full rounded-2xl border border-gray-300 bg-white p-8">
//           <h3 className="text-lg font-semibold text-black">Pending KYC</h3>

//           <p className="mt-2 text-sm text-gray-500">
//             Pending KYC users will appear here.
//           </p>
//         </section>
//       )}

//       {/* =========================
//           SUSPENDED USERS
//       ========================== */}
//       {activeTab === "suspended" && (
//         <section className="mt-8 w-full rounded-2xl border border-gray-300 bg-white p-8">
//           <h3 className="text-lg font-semibold text-black">Suspended Users</h3>

//           <p className="mt-2 text-sm text-gray-500">
//             Suspended users will appear here.
//           </p>
//         </section>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { House, Siren, Settings, Menu } from "lucide-react";

type Tab = "all" | "verified" | "pending" | "suspended";

const tabs = [
  {
    id: "all",
    label: "All",
    icon: Menu,
  },
  {
    id: "verified",
    label: "Verified",
    icon: House,
  },
  {
    id: "pending",
    label: "Pending KYC",
    icon: Settings,
  },
  {
    id: "suspended",
    label: "Suspended",
    icon: Siren,
  },
] as const;

type UserStatus = "Verified" | "Pending KYC" | "Suspended";

type UserData = {
  name: string;
  phone: string;
  tier: string;
  status: UserStatus;
};

const users: UserData[] = [
  {
    name: "Ada Chukwu",
    phone: "08123329873",
    tier: "Tier 3",
    status: "Verified",
  },
  {
    name: "Emeka Obi",
    phone: "08123321928",
    tier: "Tier 2",
    status: "Verified",
  },
  {
    name: "Bisi Lawal",
    phone: "08139849873",
    tier: "Tier 1",
    status: "Pending KYC",
  },
  {
    name: "Tunde Bakare",
    phone: "08129853885",
    tier: "Tier 3",
    status: "Verified",
  },
  {
    name: "Chinedu Okafor",
    phone: "08034567891",
    tier: "Tier 1",
    status: "Pending KYC",
  },
  {
    name: "Blessing Adeyemi",
    phone: "08145678902",
    tier: "Tier 2",
    status: "Suspended",
  },
];

export default function User() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  // Filter users according to the selected tab
  const filteredUsers = users.filter((user) => {
    if (activeTab === "all") {
      return true;
    }

    if (activeTab === "verified") {
      return user.status === "Verified";
    }

    if (activeTab === "pending") {
      return user.status === "Pending KYC";
    }

    if (activeTab === "suspended") {
      return user.status === "Suspended";
    }

    return true;
  });

  return (
    <div className="w-full px-0 sm:px-0 lg:px-0">
      {/* Header */}
      <section className="-mt-4">
        <div className="flex flex-col gap-5">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black">Users</h2>

            <p className="mt-1 text-[13px] text-gray-700">
              Manage users, KYC verification and account status.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="mb-8 hidden flex-wrap gap-3 border-gray-200 pb-4 md:flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Tab Select */}
      <div className="mb-6 md:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value as Tab)}
          className="w-[120px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Users Section */}
      <section className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-300 bg-white">
        <div className="border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-black">
                {activeTab === "all" && "All Users"}
                {activeTab === "verified" && "Verified Users"}
                {activeTab === "pending" && "Pending KYC"}
                {activeTab === "suspended" && "Suspended Users"}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {filteredUsers.length}{" "}
                {filteredUsers.length === 1 ? "user" : "users"}
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  User
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  Phone
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  KYC Tier
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr
                    key={user.phone}
                    className={`text-gray-600 ${
                      index !== filteredUsers.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                      {user.name}
                    </td>

                    <td className="whitespace-nowrap px-6 py-3">
                      {user.phone}
                    </td>

                    <td className="whitespace-nowrap px-6 py-3 font-medium text-black">
                      {user.tier}
                    </td>

                    <td className="px-6 py-3">
                      <span
                        className={`rounded-full px-4 py-1 text-sm text-black ${
                          user.status === "Verified"
                            ? "bg-gray-900/10"
                            : user.status === "Pending KYC"
                              ? "bg-amber-200"
                              : "bg-red-200"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    No users found in this section.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
