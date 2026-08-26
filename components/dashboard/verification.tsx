"use client";

import { ShieldAlert } from "lucide-react";

export default function VerificationRequired() {
  return (
    <div className="mb-6 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF8E8]">
          <ShieldAlert size={18} className="text-[#E8A33D]" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-[#B56A00]">
            Verification required
          </h3>

          <p className="mt-0.5 text-sm leading-5 text-gray-700">
            Your account is unverified. Complete the verification process to
            unlock all features.
          </p>

          {/* Status */}
          <div className="mt-2">
            <span className="inline-flex rounded-full border border-[#F2D58A] bg-[#FFF9E6] px-2 py-0.5 text-[10px] font-medium text-[#B56A00]">
              Not verified
            </span>
          </div>

          {/* Button */}
          <button
            type="button"
            className="mt-3 rounded-lg border border-[#E8A33D] bg-white px-3 py-1.5 text-xs font-medium text-[#C27A12] transition hover:bg-[#FFF8E8]"
          >
            Complete verification →
          </button>
        </div>
      </div>
    </div>
  );
}
