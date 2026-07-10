"use client";

import { LoaderCircle, Lock, ShieldCheck } from "lucide-react";
import type { MaintenanceStatus } from "@/types/MaintenanceStatus";

interface MaintenanceStatusProps {
  status: MaintenanceStatus;
}

export default function MaintenanceStatusBadge({
  status,
}: MaintenanceStatusProps) {
  const isUnlocking = status === "unlocking";
  const isOpened = status === "opened";
  const isLocking = status === "locking";

  return (
    <div
      className={`mt-5 flex min-w-80 items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
        isOpened
          ? "border-[#0BCB51]/30 bg-[#0BCB51]/10 text-[#0BCB51]"
          : "border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316]"
      }`}
    >
      {isUnlocking && (
        <>
          <LoaderCircle size={18} className="animate-spin" />
          Unlocking maintenance compartment...
        </>
      )}

      {isOpened && (
        <>
          <ShieldCheck size={18} />
          Maintenance access granted
        </>
      )}

      {isLocking && (
        <>
          <Lock size={18} />
          Closing and securing compartment...
        </>
      )}
    </div>
  );
}
