"use client";

import SecurityLayout from "./layout";

import SecurityComponent from "@/components/securityalert/page";

export default function SecurityAlert() {
  return (
    <>
      {/* <Header /> */}
      <div className="mt-6">
        <SecurityComponent />
      </div>
    </>
  );
}
