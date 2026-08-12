"use cleint";

import { Wallet, CreditCard, UserPlus, Users } from "lucide-react";
import StatsCard from "@/components/dashboard/statscard";

export default function Overview() {
  return (
    <>
      {" "}
      <section className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="TOTAL USERS"
          value="₦0"
          change="+3.3%"
          positive
          icon={Wallet}
        />

        <StatsCard
          title="TRANSACTION VOLUME"
          value="₦0"
          change="-3.3%"
          icon={CreditCard}
        />

        <StatsCard
          title="ACTIVE CARDS"
          value="0"
          change="+3.3%"
          positive
          icon={UserPlus}
        />

        <StatsCard
          title="FLAGGED ALERTS"
          value="0"
          change="+3.3%"
          positive
          icon={Users}
        />
      </section>
      {/* Recent Transactions */}
      <section className="mt-8 w-full rounded-2xl border border-1 border-gray-300 mb-6 ">
        <div className="overflow-x-auto">
          <table className="min-w-[100px] lg:w-full xl:w-full">
            <thead>
              <tr className="border-b border-gray-300  ">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  User
                </th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  Savings Type
                </th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  Amount
                </th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800/80">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300 text-gray-600  ">
                <td className="px-6 py-3 font-medium whitespace-nowrap">
                  Ada Chukwu
                </td>

                <td className="px-6 py-3 whitespace-nowrap">Regular Savings</td>

                <td className="px-6 py-3 whitespace-nowrap   text-black font-medium">
                  ₦15,000.00
                </td>

                <td className="px-6 py-3">
                  <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-300 text-gray-600 ">
                <td className="px-6 py-3 font-medium">Emeka Obi</td>
                <td className="px-6 py-3">Fixed Savings</td>
                <td className="px-6 py-3 text-black font-medium">
                  {" "}
                  ₦50,000.00
                </td>
                <td className="px-6 py-3">
                  <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-300  text-gray-600 ">
                <td className="px-6 py-3 font-medium">Bisi Lawal</td>
                <td className="px-6 py-3">Locked Savings — 12 months</td>
                <td className="px-6 py-3 text-black font-medium">
                  ₦200,000.00
                </td>
                <td className="px-6 py-3">
                  <span className="rounded-full bg-gray-900/10 px-4 py-1 text-sm text-black">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="text-gray-600 ">
                <td className="px-6 py-3 font-medium">Tunde Bakare</td>
                <td className="px-6 py-3">Long-term Savings</td>
                <td className="px-6 py-3 text-black font-medium">
                  ₦4,400,000.00
                </td>
                <td className="px-6 py-3">
                  <span className="rounded-full bg-gray-900/10  px-4 py-1 text-sm text-black">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
