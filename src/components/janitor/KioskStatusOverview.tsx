"use client";

// import Link from "next/link";
import { ArrowRight, BottleWine, FileText, Package, Clock3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Kiosk } from "@/types/JanitorOverview";

interface Props {
  kiosks: Kiosk[];
}

const kioskConfig: Record<
  Kiosk["type"],
  {
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
  }
> = {
  Plastic: {
    icon: BottleWine,
    color: "text-[#F97316]",
    bg: "bg-[#F97316]/10",
    border: "border-[#F97316]/30",
  },
  Paper: {
    icon: FileText,
    color: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]/10",
    border: "border-[#3B82F6]/30",
  },
  Metal: {
    icon: Package,
    color: "text-[#EF4444]",
    bg: "bg-[#EF4444]/10",
    border: "border-[#EF4444]/30",
  },
};

const statusConfig = {
  good: {
    label: "Good Condition",
    color: "text-[#0BCB51]",
    dot: "bg-[#0BCB51]",
    progress: "bg-[#0BCB51]",
  },

  "half-full": {
    label: "Half Full",
    color: "text-orange-400",
    dot: "bg-orange-400",
    progress: "bg-orange-400",
  },

  full: {
    label: "Full",
    color: "text-red-400",
    dot: "bg-red-500",
    progress: "bg-red-500",
  },

  maintenance: {
    label: "Under Maintenance",
    color: "text-[#B2B2B2]",
    dot: "bg-[#7A7A7A]",
    progress: "bg-[#7A7A7A]",
  },
};

export default function KioskStatusOverview({
  kiosks,
}: Props) {
  return (
    <section className="overflow-hidden">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Recycling Kiosk Status
          </h2>

          <p className="mt-1 text-sm text-[#B2B2B2]">
            Live monitoring of recycling kiosks assigned to your shift.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {kiosks.map((kiosk) => {
          const config = kioskConfig[kiosk.type];
          const status = statusConfig[kiosk.status];

          const Icon = config.icon;

          return (
            <div
              key={kiosk.id}
              className={`group min-w-0 rounded-2xl border ${config.border} bg-[#191919] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(11,203,81,0.12)]`}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${config.bg}`}
                >
                  <Icon
                    size={28}
                    className={config.color}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 animate-pulse rounded-full ${status.dot}`}
                  />

                  <span
                    className={`text-xs font-semibold ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {kiosk.name}
              </h3>

              <p className="mt-1 text-sm text-[#8A8A8A]">
                {kiosk.location}
              </p>

              {/* Fill Level */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs text-[#8A8A8A]">
                    Fill Level
                  </p>

                  <p
                    className={`mt-1 text-5xl font-bold ${status.color}`}
                  >
                    {kiosk.fillLevel}%
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="flex items-center justify-end gap-1 text-[#8A8A8A]">
                    <Clock3 size={13} />

                    <span className="text-xs">
                      {kiosk.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#2A2A2A]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${status.progress}`}
                  style={{
                    width: `${kiosk.fillLevel}%`,
                  }}
                />
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#8A8A8A]">
                    Kiosk ID
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    {kiosk.id}
                  </p>
                </div>

                {/* <Link
                  href={kiosk.href}
                  className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] px-4 py-2 text-sm text-[#B2B2B2] transition-all hover:border-[#0BCB51] hover:text-white"
                >
                  View

                  <ArrowRight size={16} />
                </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
