"use client";

import { CheckCircle2, Lock, RotateCcw, Trash2 } from "lucide-react";

interface JanitorCompletedScreenProps {
  countdown: number;
}

export default function JanitorCompletedScreen({
  countdown,
}: JanitorCompletedScreenProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#0BCB51]/30 bg-[#0BCB51]/10 shadow-[0_0_40px_rgba(11,203,81,0.25)]">
        <CheckCircle2 size={52} className="text-[#0BCB51]" />
      </div>

      <h2 className="mt-7 text-4xl font-bold text-white">
        Maintenance Completed
      </h2>

      <p className="mt-3 max-w-xl text-base leading-7 text-[#B2B2B2]">
        The maintenance compartment has been closed and secured successfully.
      </p>

      <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4">
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
          <Trash2 size={26} className="mx-auto text-[#0BCB51]" />

          <p className="mt-3 text-xs text-[#8A8A8A]">Bin ID</p>
          <p className="mt-1 font-semibold text-white">PL-001</p>
        </div>

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
          <Lock size={26} className="mx-auto text-[#0BCB51]" />

          <p className="mt-3 text-xs text-[#8A8A8A]">Compartment</p>
          <p className="mt-1 font-semibold text-[#0BCB51]">Secured</p>
        </div>

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
          <RotateCcw size={26} className="mx-auto text-[#0BCB51]" />

          <p className="mt-3 text-xs text-[#8A8A8A]">Bin Status</p>
          <p className="mt-1 font-semibold text-[#0BCB51]">Ready for Use</p>
        </div>
      </div>

      <div className="mt-8 rounded-full border border-[#2A2A2A] bg-[#111111] px-6 py-3 text-sm text-[#B2B2B2]">
        Returning to Role Selection in{" "}
        <span className="font-semibold text-[#0BCB51]">
          {countdown}s
        </span>
      </div>
    </div>
  );
}
