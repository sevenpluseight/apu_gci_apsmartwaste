"use client";

import { useEffect, useState } from "react";
import KioskLayout from "@/components/kiosk/KioskLayout";
import KioskValidationScreen from "@/components/kiosk/KioskValidationScreen";

export default function ValidatingPage() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <KioskLayout>
      <KioskValidationScreen isDone={isDone} />
    </KioskLayout>
  );
}
