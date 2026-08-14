// import Sidebar from "@/components/dashboard/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="flex min-h-screen bg-gray-100">
//       <Sidebar />

//       <section className="flex-1 lg:ml-27 min-w-0">
//         <div className="space-y-6 lg:ml-2 px-4 sm:px-6 lg:px-7 mt-8 lg:mt-3 overflow-x-hidden">
//           {children}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Sidebar from "@/components/dashboard/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="flex min-h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main */}
//       <section className="flex-1 lg:ml-27 min-w-0">
//         {/* Dashboard Container */}
//         <div className="w-full max-w-[1792px] mx-auto px-4 sm:px-6 lg:px-8 box-border">
//           <div className="space-y-6 py-6 lg:py-4">{children}</div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import Sidebar from "@/components/dashboard/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="min-h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Dashboard Area */}
//       <section className="min-w-0 lg:ml-24">
//         <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
//           <div className="space-y-6 py-6 lg:py-4">{children}</div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Sidebar from "@/components/dashboard/sidebar";
import { PanelLeft } from "lucide-react";
import DashboardNavbar from "@/components/dashboard/dashboardnavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <section className="min-w-0 pt-16 lg:pt-0 lg:ml-60">
        <div className="w-full max-w-[1280px]">
          <DashboardNavbar />
          {/* Dashboard Content */}

          <div className="w-full px-4 sm:px-6 lg:px-4">
            <div className="w-full py-6 lg:py-4">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { PanelLeft } from "lucide-react";
// import Sidebar from "@/components/dashboard/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="min-h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Dashboard Area */}
//       <section className="min-w-0 sm:ml-[150px]">
//         <div className="w-full max-w-[1280px]">
//           {/* Dashboard Header */}
//           <header className="flex h-[82px] w-full items-center border-b border-gray-200 bg-gray-100 px-4 sm:px-6 lg:px-0">
//             <button
//               type="button"
//               className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-200"
//               aria-label="Toggle sidebar"
//             >
//               <PanelLeft size={22} />
//             </button>

//             <h1 className="truncate text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
//               Hello, Samuel Enterprises
//             </h1>
//           </header>

//           {/* Dashboard Content */}
//           <div className="w-full px-4 sm:px-6 lg:px-0">
//             <div className="w-full py-6 lg:py-4">{children}</div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
