import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl xs:text-center sm:text-left font-extrabold tracking-tight mb-4">
        Admin Dashboard
      </h1>
      <p className="text-slate-400 max-w-md text-center mb-8">
        Monitor real-time metrics, system performance, and user activity metrics
        from a single interface.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-bacground hover:bg-primary-hover rounded-lg font-medium transition-colors shadow-lg"
      >
        Enter Dashboard →
      </Link>
    </div>
  );
}
