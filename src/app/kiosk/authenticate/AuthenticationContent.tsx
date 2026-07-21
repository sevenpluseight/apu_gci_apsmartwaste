"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import KioskLayout from "@/components/kiosk/KioskLayout";
import CardReader from "@/components/kiosk/CardReader";

type KioskRole = "APSpace User" | "Cleaner";

export default function AuthenticateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedRole = searchParams.get("role");

  const role: KioskRole =
    requestedRole === "Cleaner" ? "Cleaner" : "APSpace User";

  const [isCardDetected, setIsCardDetected] = useState(false);

  const getNextRoute = () =>
    role === "Cleaner"
      ? "/kiosk/janitor/verifying"
      : "/kiosk/student/verifying";

  useEffect(() => {
    const cardDetectionTimer = setTimeout(() => {
      setIsCardDetected(true);
    }, 4500);

    const verificationTimer = setTimeout(() => {
      router.push(getNextRoute());
    }, 5000);

    return () => {
      clearTimeout(cardDetectionTimer);
      clearTimeout(verificationTimer);
    };
  }, [role, router]);

  return (
    <KioskLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white">
          Insert Your APCard
        </h2>

        <p className="mt-3 text-[#B2B2B2]">
          The kiosk will identify your account and open the appropriate
          interface.
        </p>

        <CardReader isCardDetected={isCardDetected} />

        <p className="mt-5 text-xs text-[#6F6F6F]">
          Prototype mode: selecting an interface simulates the role detected
          from the APCard.
        </p>
      </div>
    </KioskLayout>
  );
}
