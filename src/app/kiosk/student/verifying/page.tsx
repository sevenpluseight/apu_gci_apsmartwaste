"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import KioskLayout from "@/components/kiosk/KioskLayout";
import KioskVerifyingScreen from "@/components/kiosk/KioskVerifyingScreen";
import { CreditCard, Recycle, UserRound } from "lucide-react";

const steps = [
  {
    label: "Reading APCard",
    description: "Reading your APCard...",
    icon: CreditCard,
  },
  {
    label: "Getting Your Information",
    description: "Retrieving your student information...",
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
    const stepOne = setTimeout(() => setCurrentStep(1), 2000);
    const stepTwo = setTimeout(() => setCurrentStep(2), 4000);
    const nextPage = setTimeout(() => {
      router.push("/kiosk/student/deposit");
    }, 6000);

    return () => {
      clearTimeout(stepOne);
      clearTimeout(stepTwo);
      clearTimeout(nextPage);
    };
  }, [router]);

  return (
    <KioskLayout>
      <KioskVerifyingScreen
        title="Preparing Your Recycling Session"
        subtitle="Please wait while the kiosk verifies your APCard."
        steps={steps}
        currentStep={currentStep}
      />
    </KioskLayout>
  );
}
