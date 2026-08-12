"use client";

import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  change,
  positive = true,
}: Props) {
  return (
    <div className="w-full min-w-0 bg-white rounded-xl p-4 -mt-6">
      <p className="truncate text-gray-500 text-[13px]">{title}</p>

      <div className="flex items-center justify-between gap-4 mt-3">
        <h2 className="text-3xl font-bold text-gray-600">{value}</h2>
      </div>
    </div>
  );
}
