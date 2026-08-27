"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ArrowRightToLine } from "lucide-react";

/**
 * SecureVest — Create Account page
 * Structure cloned from https://online.durapayment.com/register :
 *   1. Country + email, "Verify" gate
 *   2. Business name (optional), account-type selection, referral code
 *   3. Submit -> "Let's get started"
 *   Footer: login link + regulator/partner badge
 */

const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "United Kingdom",
  "United States",
];

type AccountType = "individual" | "business";

export default function CreateAccountPage() {
  const [step, setStep] = useState<1 | 2>(1);

  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [accountType, setAccountType] = useState<AccountType>("individual");
  const [referralCode, setReferralCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  function handleVerify(e: FormEvent) {
    e.preventDefault();
    if (!country) {
      setEmailError("Select your country to continue.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError("");
    setStep(2);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Replace with real submit call
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      {/* Top bar */}
      <header className="w-full px-6 sm:px-20 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#0B2A5B] flex items-center justify-center">
            <span className="text-white text-sm font-bold">SV</span>
          </span>
          <span className="text-[#0B2A5B] font-semibold text-lg tracking-tight">
            SecureVest
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm text-[#5B6472] hover:text-[#0B2A5B] transition-colors"
        >
          Back to home
        </Link>
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
        <div className="w-full max-w-[660px] bg-white rounded-2xl shadow-[0_2px_24px_rgba(11,42,91,0.06)] border border-[#EDF0F5] p-6 sm:p-9">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className={`h-1.5 flex-1 rounded-full ${
                step >= 1 ? "bg-[#0B2A5B]" : "bg-[#E7EBF2]"
              }`}
            />
            <div
              className={`h-1.5 flex-1 rounded-full ${
                step >= 2 ? "bg-[#0B2A5B]" : "bg-[#E7EBF2]"
              }`}
            />
          </div>

          {step === 1 && (
            <>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#0B2A5B] leading-snug">
                What type of account would you like to create?
              </h1>
              <p className="mt-2 text-sm text-[#5B6472]">
                Choose the option that fits your organization.
              </p>

              <form onSubmit={handleVerify} className="mt-6 space-y-4">
                {/* Country select */}
                <div>
                  <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-[#DEE3EC] bg-white px-4 py-3 pr-10 text-sm text-[#0B2A5B] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B]"
                    >
                      <option value="">Select country</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8A93A3]" />
                  </div>
                </div>

                {/* Email */}
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
                  {emailError && (
                    <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0B2A5B] text-white text-sm font-semibold py-3.5 hover:bg-[#0B2A5B]/90 transition-colors flex items-center justify-center gap-2"
                >
                  Verify
                  <ArrowRightToLine className="text-base" />
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#5B6472] hover:text-[#0B2A5B] mb-4"
              >
                ← Back
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#0B2A5B] leading-snug">
                Tell us a bit more
              </h1>
              <p className="mt-2 text-sm text-[#5B6472]">
                This helps us set up the right account for you.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Business name */}
                <div>
                  <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                    Business name{" "}
                    <span className="text-[#8A93A3] font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter business name"
                    className="w-full rounded-xl border border-[#DEE3EC] bg-white px-4 py-3 text-sm text-[#0B2A5B] placeholder:text-[#B0B7C3] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B]"
                  />
                </div>

                {/* Account type */}
                <div>
                  <p className="text-sm font-medium text-[#0B2A5B] mb-2">
                    I&apos;m creating an account for:
                  </p>
                  <div className="space-y-3">
                    <AccountTypeCard
                      selected={accountType === "individual"}
                      onSelect={() => setAccountType("individual")}
                      title="Individual Account"
                      description="Designed for unregistered businesses. Anyone selling, building, or offering services without a formal CAC registration."
                    />
                    <AccountTypeCard
                      selected={accountType === "business"}
                      onSelect={() => setAccountType("business")}
                      title="Registered Business Account"
                      description="For CAC-registered businesses. Companies officially registered with the Corporate Affairs Commission and operating under formal structures."
                    />
                  </div>
                </div>

                {/* Referral code */}
                <div>
                  <label className="block text-sm font-medium text-[#0B2A5B] mb-1.5">
                    Referral code{" "}
                    <span className="text-[#8A93A3] font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    placeholder="Enter referral code"
                    className="w-full rounded-xl border border-[#DEE3EC] bg-white px-4 py-3 text-sm text-[#0B2A5B] placeholder:text-[#B0B7C3] focus:outline-none focus:ring-2 focus:ring-[#0B2A5B]/20 focus:border-[#0B2A5B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#0B2A5B] text-white text-sm font-semibold py-3.5 hover:bg-[#0B2A5B]/90 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? "Setting up..." : "Let's get started"}
                  {!submitting && <ArrowRightToLine className="text-base" />}
                </button>
              </form>
            </>
          )}

          <p className="mt-6 text-center text-sm text-[#5B6472]">
            Already have an account?{" "}
            <Link
              href="/dashboard"
              className="text-[#0B2A5B] font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </main>

      {/* Footer badge */}
      <footer className="w-full flex items-center justify-center gap-2 pb-8 text-xs text-[#8A93A3]">
        <span>Our banking partners are licensed and regulated</span>
      </footer>
    </div>
  );
}

function AccountTypeCard({
  selected,
  onSelect,
  title,
  description,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-xl border p-4 transition-colors flex items-start gap-3 ${
        selected
          ? "border-[#0B2A5B] bg-[#0B2A5B]/[0.04]"
          : "border-[#DEE3EC] bg-white hover:border-[#B7C1D6]"
      }`}
    >
      <span
        className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
          selected ? "bg-[#0B2A5B] border-[#0B2A5B]" : "border-[#C4CBD8]"
        }`}
      >
        {selected && <Check className="text-white text-xs" />}
      </span>
      <span>
        <span className="block text-sm font-semibold text-[#0B2A5B]">
          {title}
        </span>
        <span className="block mt-0.5 text-xs text-[#5B6472] leading-relaxed">
          {description}
        </span>
      </span>
    </button>
  );
}
