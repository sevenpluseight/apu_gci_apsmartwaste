"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, LockOpen, UserRoundCheck } from "lucide-react";
import KioskLayout from "@/components/kiosk/KioskLayout";
import JanitorVerifyingScreen from "@/components/kiosk/JanitorVerifyingScreen";

const steps = [
  {
    label: "Reading APCard",
    description: "Reading your staff APCard...",
    icon: CreditCard,
  },
  {
    label: "Verifying Staff Role",
    description: "Confirming your cleaner account and maintenance permissions...",
    icon: UserRoundCheck,
  },
  {
    label: "Opening Maintenance Access",
    description: "Preparing the kiosk maintenance interface...",
    icon: LockOpen,
  },
];

export default function JanitorVerifyingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const secondStepTimer = setTimeout(() => {
      setCurrentStep(1);
    }, 2000);

    const thirdStepTimer = setTimeout(() => {
      setCurrentStep(2);
    }, 4000);

    const navigationTimer = setTimeout(() => {
      router.push("/kiosk/janitor/unlock-bin");
    }, 6000);

    return () => {
      clearTimeout(secondStepTimer);
      clearTimeout(thirdStepTimer);
      clearTimeout(navigationTimer);
    };
  }, [router]);

  return (
    <KioskLayout>
      <JanitorVerifyingScreen
        steps={steps}
        currentStep={currentStep}
      />
    </KioskLayout>
  );
}
