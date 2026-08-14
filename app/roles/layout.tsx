import Sidebar from "@/components/dashboard/sidebar";
import DashboardNavbar from "@/components/dashboard/dashboardnavbar";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen bg-gray-100">
      <Sidebar />

      <section className="min-w-0 pt-16 lg:pt-0 lg:ml-60">
        <div className="w-full max-w-[1280px]">
          <DashboardNavbar />

          <div className=" px-4 sm:px-6 lg:px-6">
            <div className="py-6 lg:py-4">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
