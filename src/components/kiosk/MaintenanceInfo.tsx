"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, LoaderCircle, Wrench } from "lucide-react";

import type { MaintenanceStatus } from "@/types/MaintenanceStatus";

interface MaintenanceInfoProps {
  status: MaintenanceStatus;
  onClose: () => void;
}

const maintenanceInfo = [
  {
    label: "Bin Type",
    value: "Plastic",
  },
  {
    label: "Bin ID",
    value: "PL-001",
  },
  {
    label: "Fill Level",
    value: "95%",
    warning: true,
  },
  {
    label: "Status",
    value: "Full",
    warning: true,
  },
];

export default function MaintenanceInfo({
  status,
  onClose,
}: MaintenanceInfoProps) {
  const isUnlocking = status === "unlocking";
  const isOpened = status === "opened";
  const isLocking = status === "locking";

  return (
    <div className="max-w-137.5 mb-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0BCB51]/15 text-[#0BCB51]">
          <Wrench size={30} />
        </div>

        <div>
          <p className="text-sm font-medium text-[#0BCB51]">
            Authorized Staff Access
          </p>

          <h2 className="mt-1 text-4xl font-bold text-white">
            Maintenance Compartment
          </h2>
        </div>
      </div>

      {/* <p className="mt-5 leading-7 text-[#B2B2B2]">
        The plastic recycling kiosk requires maintenance because its waste
        storage compartment is nearly full.
      </p> */}

      <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-white">
            Maintenance Information
          </p>

          <span className="shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
            Action Required
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {maintenanceInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#2A2A2A] bg-[#191919] p-4"
            >
              <p className="text-xs text-[#8A8A8A]">
                {item.label}
              </p>

              <p
                className={`mt-2 font-semibold ${
                  item.warning ? "text-red-400" : "text-white"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {isUnlocking && (
          <Button
            disabled
            className="h-12 rounded-xl bg-[#0BCB51] px-8 font-semibold text-black disabled:opacity-70"
          >
            <LoaderCircle
              size={19}
              className="mr-2 animate-spin"
            />
            Unlocking Compartment...
          </Button>
        )}

        {isOpened && (
          <>
            <p className="text-sm leading-6 text-[#B2B2B2]">
              Replace the full waste bag and click the button below to close the compartment.
            </p>

            <Button
              onClick={onClose}
              className="group h-12 cursor-pointer rounded-xl bg-[#0BCB51] px-8 mt-6 font-semibold text-black hover:bg-[#09B849]"
            >
              <CheckCircle2 size={19} className="mr-2" />
              Close Compartment
            </Button>
          </>
        )}

        {isLocking && (
          <Button
            disabled
            className="h-12 rounded-xl bg-[#0BCB51] px-8 font-semibold text-black disabled:opacity-70"
          >
            <LoaderCircle
              size={19}
              className="mr-2 animate-spin"
            />
            Closing Compartment...
          </Button>
        )}
      </div>
    </div>
  );
}
