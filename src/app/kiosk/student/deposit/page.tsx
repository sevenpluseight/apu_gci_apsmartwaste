"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import KioskLayout from "@/components/kiosk/KioskLayout";
import StudentDepositTray from "@/components/kiosk/StudentDepositTray";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, LoaderCircle } from "lucide-react";

export default function DepositPage() {
  const router = useRouter();

  const [closeTray, setCloseTray] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navigationTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDone = () => {
    if (isClosing) return;

    setIsClosing(true);
    setCloseTray(true);

    navigationTimerRef.current = setTimeout(() => {
      router.push("/kiosk/student/validating");
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  return (
    <KioskLayout>
      <div className="flex h-full items-center justify-between gap-12">
        <div className="max-w-md">
          <p className="text-sm text-[#B2B2B2]">
            Welcome, Alex Tan
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Deposit Your Recyclables
          </h2>

          <p className="mt-4 leading-7 text-[#B2B2B2]">
            The deposit compartment is now open. Place at least one recyclable
            item into the tray, then press Done to begin validation.
          </p>

          <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
            <div className="flex items-center gap-3 text-[#0BCB51]">
              <Info size={20} />
              <p className="font-semibold">Reminder</p>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
              Please make sure plastic items are empty and rinsed before
              placing them into the deposit tray.
            </p>
          </div>

          <Button
            type="button"
            onClick={handleDone}
            disabled={isClosing}
            className="group mt-8 h-12 cursor-pointer rounded-xl bg-[#0BCB51] px-8 font-semibold text-black hover:bg-[#09B849] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isClosing ? (
              <>
                <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                Closing Tray...
              </>
            ) : (
              <>
                Done
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>

        <StudentDepositTray closeTray={closeTray} />
      </div>
    </KioskLayout>
  );
}
