"use client";

import { useEffect, useState } from "react";
import KioskLayout from "@/components/kiosk/KioskLayout";
import StudentValidationItemScreen from "@/components/kiosk/StudentValidationItemScreen";

export default function ValidatingPage() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <KioskLayout>
      <StudentValidationItemScreen isDone={isDone} />
    </KioskLayout>
  );
}
