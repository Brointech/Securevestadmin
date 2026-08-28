// import Link from "next/link";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
//       <h1 className="text-3xl xs:text-center sm:text-left font-extrabold tracking-tight mb-4">
//         Admin Dashboard
//       </h1>
//       <p className="text-slate-400 max-w-md text-center mb-8">
//         Monitor real-time metrics, system performance, and user activity metrics
//         from a single interface.
//       </p>
//       <Link
//         href="/dashboard"
//         className="px-6 py-3 bg-bacground hover:bg-primary-hover rounded-lg font-medium transition-colors shadow-lg"
//       >
//         Enter Dashboard →
//       </Link>
//     </div>
//   );
// }

"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRightToLine } from "lucide-react";

/**
 * SecureVest — Login page
 * Structure cloned from https://online.durapayment.com/ :
 *   Top bar: logo + "Create account" link
 *   "Welcome back" heading + subtext
 *   Email, password, forgot-password link, Login CTA
 *   Footer: "Don't have an account?" + regulator/partner badge
 * Shares the same visual language as CreateAccountPage.tsx
 */

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    form?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: { email?: string; password?: string } = {};

    if (!isValidEmail(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!password) {
      nextErrors.password = "Enter your password.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      // Replace this block with your real auth endpoint, e.g.:
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });
      // if (!res.ok) throw new Error("Invalid email or password.");
      // const data = await res.json();
      // storeSessionToken(data.token); // e.g. cookie or auth context

      await new Promise((resolve) => setTimeout(resolve, 900)); // placeholder delay

      router.push("/dashboard"); // send the user into the app on success
    } catch (err) {
      setErrors({
        form: err instanceof Error ? err.message : "Login failed. Try again.",
      });
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary-background flex flex-col">
      {/* Top bar */}
      <header className="w-full px-6 sm:px-20 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/*============================ LOGO ==========================*/}
          {/* <span className="w-8 h-8 rounded-lg bg-primary-background flex items-center justify-center">
            <span className="text-white text-sm font-bold">SV</span>
          </span> */}
          <span className="text-primary font-semibold text-lg tracking-tight">
            SecureVest
          </span>
        </Link>

        {/*======================= Create account ========================*/}
        {/* <Link
          href="/register"
          className="text-sm font-medium text-[#0B2A5B] hover:underline"
        >
          Create account
        </Link> */}
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
        <div className="w-full max-w-[640px] bg-white rounded-2xl shadow-[0_2px_24px_rgba(11,42,91,0.06)] border border-[#EDF0F5] p-6 sm:p-9">
          <h1 className="text-xl sm:text-2xl font-semibold text-primary-text leading-snug">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-[#5B6472]">
            Sign in to continue to your SecureVest admin dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {errors.form && (
              <p className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-600">
                {errors.form}
              </p>
            )}

            {/*======================== Email ======================================*/}
            <div>
              <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0B2A5B] placeholder:text-[#B0B7C3] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B] ${
                  errors.email ? "border-red-400" : "border-[#DEE3EC]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/*========================== Password ===================================*/}
            <div>
              <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full rounded-xl border bg-white px-4 py-3 pr-11 text-sm text-[#0B2A5B] placeholder:text-[#B0B7C3] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B] ${
                    errors.password ? "border-red-400" : "border-[#DEE3EC]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A93A3] hover:text-[#0B2A5B]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="text-base" />
                  ) : (
                    <Eye className="text-base" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {/*======================= Forgot password ========================*/}
            {/* <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#0B2A5B] hover:underline"
              >
                Forgot password?
              </Link>
            </div> */}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-primary-background text-white text-sm font-semibold py-3.5 hover:bg-primary-background/90 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
            >
              {submitting ? "Signing in..." : "Login"}
              {!submitting && <ArrowRightToLine className="text-base" />}
            </button>
          </form>

          {/*======================= Create an account ========================*/}
          {/* <p className="mt-6 text-center text-sm text-[#5B6472]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#0B2A5B] font-medium hover:underline"
            >
              Create account
            </Link>
          </p> */}
        </div>
      </main>

      {/*============================= Footer badge ================================*/}
      <footer className="w-full flex items-center justify-center gap-2 pb-8 text-xs text-[#2d2e2e]">
        <span>
          Our banking partners are licensed by <b>CBN</b>
        </span>
      </footer>
    </div>
  );
}
