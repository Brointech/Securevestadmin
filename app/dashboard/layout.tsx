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

import Sidebar from "@/components/dashboard/sidebar";

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
      <section className="min-w-0 lg:ml-24">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 py-6 lg:py-4">{children}</div>
        </div>
      </section>
    </main>
  );
}
