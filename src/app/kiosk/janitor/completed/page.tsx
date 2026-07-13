"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import KioskLayout from "@/components/kiosk/KioskLayout";
import JanitorCompletedScreen from "@/components/kiosk/JanitorCompletedScreen";

export default function JanitorCompletedPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((previous) => Math.max(previous - 1, 0));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/kiosk");
    }, 8000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <KioskLayout>
      <JanitorCompletedScreen countdown={countdown} />
    </KioskLayout>
  );
}
