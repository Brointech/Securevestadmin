"use client";

import User from "@/components/user/page";
import UserLayout from "./layout";

export default function DashboardPage() {
  return (
    <>
      {/* <UserLayout> */}
      {/* <Header /> */}

      <div className="mt-6">
        <User />
      </div>
      {/* </UserLayout> */}
    </>
  );
}
