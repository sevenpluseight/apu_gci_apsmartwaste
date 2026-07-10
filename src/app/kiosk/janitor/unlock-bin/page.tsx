"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import KioskLayout from "@/components/kiosk/KioskLayout";
import JanitorUnlockBinScreen from "@/components/kiosk/JanitorUnlockBinScreen";

import type { MaintenanceStatus } from "@/types/MaintenanceStatus";

export default function JanitorUnlockPage() {
  const router = useRouter();

  const [status, setStatus] =
    useState<MaintenanceStatus>("unlocking");

  const openingTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const closingTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    openingTimerRef.current = setTimeout(() => {
      setStatus("opened");
    }, 2000);

    return () => {
      if (openingTimerRef.current) {
        clearTimeout(openingTimerRef.current);
      }

      if (closingTimerRef.current) {
        clearTimeout(closingTimerRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    if (status !== "opened") return;

    setStatus("locking");

    closingTimerRef.current = setTimeout(() => {
      router.push("/kiosk/janitor/completed");
    }, 1800);
  };

  return (
    <KioskLayout>
      <JanitorUnlockBinScreen
        status={status}
        onClose={handleClose}
      />
    </KioskLayout>
  );
}
