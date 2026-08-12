"use client";

import ContenttComponent from "@/components/contentt/page";
import ContentLayout from "./layout";

export default function Contentt() {
  return (
    <ContentLayout>
      {/* <Header /> */}

      <div className="mt-6">
        <ContenttComponent />
      </div>
    </ContentLayout>
  );
}
