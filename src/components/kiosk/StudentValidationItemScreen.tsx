"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, CircleX, Info, ScanLine } from "lucide-react";

const detectedItems = [
  {
    name: "Plastic Bottle",
    type: "PET",
    status: "Accepted",
    confidence: "98.7%",
    image: "/waste-items/empty-plastic-bottle.png",
  },
  {
    name: "Snack Wrapper",
    type: "Mixed Material",
    status: "Rejected",
    confidence: "96.4%",
    image: "/waste-items/snack-wrapper.png",
  },
  {
    name: "Detergent Bottle",
    type: "HDPE",
    status: "Accepted",
    confidence: "99.1%",
    image: "/waste-items/detergent-plastic-bottle.png",
  },
];

interface KioskValidationScreenProps {
  isDone: boolean;
}

export default function StudentValidationItemScreen({
  isDone,
}: KioskValidationScreenProps) {
  return (
    <div className="grid h-full grid-cols-[315px_1fr] items-center gap-8">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Validating Your{" "}
          <span className="text-[#0BCB51]">Recyclables</span>
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
          The kiosk is scanning the deposited items to check whether they match
          the selected plastic recycling bin.
        </p>

        <div className="mt-5 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-4">
          <p className="text-sm font-semibold text-[#0BCB51]">
            {isDone ? "Items Detected (3/3)" : "Detecting Items..."}
          </p>

          <div className="mt-3 space-y-2">
            {isDone
              ? detectedItems.map((item) => {
                  const accepted = item.status === "Accepted";

                  return (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                        accepted
                          ? "border-[#0BCB51]/35 bg-[#0BCB51]/8"
                          : "border-red-500/35 bg-red-500/8"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#8A8A8A]">
                          {item.type} • {item.confidence}
                        </p>
                      </div>

                      {accepted ? (
                        <CheckCircle2 className="text-[#0BCB51]" size={21} />
                      ) : (
                        <CircleX className="text-red-400" size={21} />
                      )}
                    </div>
                  );
                })
              : Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-[#2A2A2A] bg-[#191919] px-3 py-3"
                  >
                    <div className="h-9 w-9 animate-pulse rounded-lg bg-[#2A2A2A]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-2/3 animate-pulse rounded-full bg-[#2A2A2A]" />
                      <div className="h-2.5 w-1/3 animate-pulse rounded-full bg-[#2A2A2A]" />
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-4">
          <div className="flex items-center gap-3 text-[#0BCB51]">
            <Info size={18} />
            <p className="text-sm font-semibold">Validation Rule</p>
          </div>

          <p className="mt-2 text-xs leading-5 text-[#B2B2B2]">
            Only clean plastic items are accepted in this kiosk. Food wrappers
            and mixed materials will not receive Eco-Points.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-[#2A2A2A] bg-[#111111] p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#0BCB51]">Camera View</p>

          <div className="flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#191919] px-3 py-1 text-xs text-[#B2B2B2]">
            <span
              className={`h-2 w-2 rounded-full ${
                isDone ? "bg-[#0BCB51]" : "animate-pulse bg-[#0BCB51]"
              }`}
            />
            {isDone ? "Scan Complete" : "System Scanning"}
          </div>
        </div>

        <div className="relative h-101.25 overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#050505]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:20px_20px]" />

          <div className="absolute inset-x-6 top-7 h-67.5 rounded-3xl border border-[#333] bg-linear-to-b from-[#101010] to-black shadow-inner">
            <div className="absolute left-1/2 top-3 h-2 w-56 -translate-x-1/2 rounded-full bg-white/20 blur-sm" />

            {!isDone && (
              <div className="absolute inset-5 overflow-hidden rounded-2xl border border-[#0BCB51]/20">
                <div className="absolute inset-x-0 top-0 h-16 animate-[scanline_1.6s_ease-in-out_infinite] bg-linear-to-b from-transparent via-[#0BCB51]/30 to-transparent" />
              </div>
            )}

            <div className="flex h-full items-center justify-center gap-5 px-5 pt-6">
              {detectedItems.map((item, index) => {
                const accepted = item.status === "Accepted";

                return (
                  <div
                    key={item.name}
                    className={`relative flex h-48 w-32 flex-col items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                      !isDone
                        ? "border-[#3A3A3A] bg-[#191919]/80"
                        : accepted
                        ? "border-[#0BCB51] bg-[#0BCB51]/10"
                        : "border-red-500 bg-red-500/10"
                    }`}
                  >
                    <span
                      className={`absolute -top-7 whitespace-nowrap text-xs font-semibold ${
                        !isDone
                          ? "text-[#6F6F6F]"
                          : accepted
                          ? "text-[#0BCB51]"
                          : "text-red-400"
                      }`}
                    >
                      {isDone ? item.name : `Item ${index + 1}`}
                    </span>

                    {isDone ? (
                      <>
                        {/* <div
                          className={`absolute -top-3 left-2 rounded px-2 py-1 text-[10px] font-semibold text-white ${
                            accepted ? "bg-[#0BCB51]" : "bg-red-500"
                          }`}
                        >
                          {item.type} • {item.confidence}
                        </div> */}

                        <Image
                          src={item.image}
                          alt={item.name}
                          width={90}
                          height={120}
                          className="max-h-28 object-contain"
                        />
                      </>
                    ) : (
                      <div className="h-20 w-16 animate-pulse rounded-lg bg-[#2A2A2A]" />
                    )}

                    <span
                      className={`mt-4 text-xs font-semibold ${
                        !isDone
                          ? "text-[#6F6F6F]"
                          : accepted
                          ? "text-[#0BCB51]"
                          : "text-red-400"
                      }`}
                    >
                      {isDone ? item.status : "Scanning..."}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#2A2A2A] bg-[#111111] px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ScanLine
                  className={
                    isDone
                      ? "text-[#0BCB51]"
                      : "animate-pulse text-[#0BCB51]"
                  }
                  size={20}
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    {isDone
                      ? "Validation completed"
                      : "System is scanning deposited items..."}
                  </p>
                  <p className="mt-1 text-xs text-[#8A8A8A]">
                    {isDone
                      ? "2 items accepted, 1 item rejected."
                      : "Checking material type, shape and cleanliness."}
                  </p>
                </div>
              </div>

              <Link href="/kiosk/student/rewards">
                <Button
                  disabled={!isDone}
                  className="group h-10 rounded-xl bg-[#0BCB51] px-6 font-semibold text-black hover:bg-[#09B849] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
