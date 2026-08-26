import DashboardNavbar from "@/components/dashboard/dashboardnavbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <section className="flex-1 min-w-0 pt-16 lg:pt-0 lg:ml-60">
        <div className="w-full">
          <DashboardNavbar />
          <div className="px-0 sm:px-0 lg:px-6 ">
            <div className="py-6 lg:py-4">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
