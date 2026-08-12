import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <section className="flex-1 lg:ml-27 min-w-0 ">
        <div className="space-y-6 lg:ml-2 px-4 sm:px-6 lg:px-2 mt-8 lg:mt-3 overflow-x-hidden">
          {children}
        </div>
      </section>
    </main>
  );
}
