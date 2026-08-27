"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Mail } from "lucide-react";

/**
 * SecureVest — Forgot Password page
 * Same visual system as LoginPage.tsx / CreateAccountPage.tsx.
 * Flow: enter email -> "Send reset link" -> confirmation state.
 * Links back to /login.
 */

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      // Replace with your real endpoint, e.g.:
      // const res = await fetch("/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) throw new Error("Couldn't send reset link. Try again.");

      await new Promise((resolve) => setTimeout(resolve, 900)); // placeholder delay
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      {/* Top bar */}
      <header className="w-full px-6 sm:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#0B2A5B] flex items-center justify-center">
            <span className="text-white text-sm font-bold">SV</span>
          </span>
          <span className="text-[#0B2A5B] font-semibold text-lg tracking-tight">
            SecureVest
          </span>
        </Link>
        <Link
          href="/login"
          className="text-sm font-medium text-[#0B2A5B] hover:underline"
        >
          Back to login
        </Link>
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
        <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-[0_2px_24px_rgba(11,42,91,0.06)] border border-[#EDF0F5] p-6 sm:p-9">
          {!sent ? (
            <>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#0B2A5B] leading-snug">
                Forgot your password?
              </h1>
              <p className="mt-2 text-sm text-[#5B6472]">
                Enter the email linked to your account and we&apos;ll send you a
                link to reset it.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[#DEE3EC] bg-white px-4 py-3 text-sm text-[#0B2A5B] placeholder:text-[#B0B7C3] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B]"
                  />
                  {error && (
                    <p className="mt-1.5 text-xs text-red-500">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#0B2A5B] text-white text-sm font-semibold py-3.5 hover:bg-[#0B2A5B]/90 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? "Sending..." : "Send reset link"}
                  {!submitting && <ArrowRight className="text-base" />}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-[#0B2A5B]/[0.08] flex items-center justify-center mb-4">
                <Mail className="text-[#0B2A5B] text-xl" />
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#0B2A5B] leading-snug">
                Check your inbox
              </h1>
              <p className="mt-2 text-sm text-[#5B6472]">
                If an account exists for{" "}
                <span className="font-medium text-[#0B2A5B]">{email}</span>, a
                password reset link is on its way. It may take a few minutes to
                arrive.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setEmail("");
                }}
                className="mt-6 w-full rounded-xl border border-[#DEE3EC] text-[#0B2A5B] text-sm font-semibold py-3.5 hover:bg-[#0B2A5B]/[0.04] transition-colors"
              >
                Use a different email
              </button>
            </>
          )}

          <Link
            href="/login"
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-[#5B6472] hover:text-[#0B2A5B] transition-colors"
          >
            <ArrowLeft className="text-base" />
            Back to login
          </Link>
        </div>
      </main>

      {/* Footer badge */}
      <footer className="w-full flex items-center justify-center gap-2 pb-8 text-xs text-[#8A93A3]">
        <span>Our banking partners are licensed and regulated</span>
      </footer>
    </div>
  );
}
