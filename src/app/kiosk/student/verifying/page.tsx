"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Recycle, UserRound } from "lucide-react";
import KioskLayout from "@/components/kiosk/KioskLayout";
import StudentVerifyingScreen from "@/components/kiosk/StudentVerifyingScreen";

const steps = [
  {
    label: "Reading APCard",
    description: "Reading your APCard...",
    icon: CreditCard,
  },
  {
    label: "Getting Your Information",
    description: "Retrieving your user information...",
    icon: UserRound,
  },
  {
    label: "Preparing Session",
    description: "Preparing your recycling session...",
    icon: Recycle,
  },
];

export default function StudentVerifyingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepOneTimer = setTimeout(() => {
      setCurrentStep(1);
    }, 2000);

    const stepTwoTimer = setTimeout(() => {
      setCurrentStep(2);
    }, 4000);

    const navigationTimer = setTimeout(() => {
      router.push("/kiosk/student/deposit");
    }, 6000);

    return () => {
      clearTimeout(stepOneTimer);
      clearTimeout(stepTwoTimer);
      clearTimeout(navigationTimer);
    };
  }, [router]);

  return (
    <KioskLayout>
      <StudentVerifyingScreen
        steps={steps}
        currentStep={currentStep}
      />
    </KioskLayout>
  );
}
