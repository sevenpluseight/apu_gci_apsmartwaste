"use client";

import MaintenanceInfo from "./MaintenanceInfo";
import MaintenanceKiosk from "./MaintenanceKiosk";
import MaintenanceStatusBadge from "./MaintenanceStatus";
import type { MaintenanceStatus } from "@/types/MaintenanceStatus";

interface JanitorUnlockBinScreenProps {
  status: MaintenanceStatus;
  onClose: () => void;
}

export default function JanitorUnlockBinScreen({
  status,
  onClose,
}: JanitorUnlockBinScreenProps) {
  return (
    <div className="grid h-full grid-cols-[1fr_390px] items-center gap-12">
      <MaintenanceInfo
        status={status}
        onClose={onClose}
      />

      <div className="flex flex-col items-center">
        <MaintenanceKiosk status={status} />
        <MaintenanceStatusBadge status={status} />
      </div>
    </div>
  );
}
