import Link from "next/link";
import KioskLayout from "@/components/kiosk/KioskLayout";
import KioskDepositTray from "@/components/kiosk/KioskDepositTray";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

export default function DepositPage() {
  return (
    <KioskLayout>
      <div className="flex h-full items-center justify-between gap-12">
        <div className="max-w-md">
          <p className="text-sm text-[#B2B2B2]">Welcome, Alex Tan</p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Deposit Your Recyclables
          </h2>

          <p className="mt-4 leading-7 text-[#B2B2B2]">
            The deposit compartment is now open. Place at least 1 recyclable
            item into the tray, then press Done to begin validation.
          </p>

          <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
            <div className="flex items-center gap-3 text-[#0BCB51]">
              <Info size={20} />
              <p className="font-semibold">Reminder</p>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
              Please make sure plastic items are empty and rinsed before placing
              them into the deposit tray.
            </p>
          </div>

          <Link href="/kiosk/student/validating">
            <Button className="group mt-8 h-12 rounded-xl bg-[#0BCB51] px-8 font-semibold text-black hover:bg-[#09B849] cursor-pointer">
              Done
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <KioskDepositTray />
      </div>
    </KioskLayout>
  );
}
