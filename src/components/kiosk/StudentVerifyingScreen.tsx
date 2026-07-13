"use client";

import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  label: string;
  description: string;
  icon: LucideIcon;
}

interface StudentVerifyingScreenProps {
  steps: Step[];
  currentStep: number;
}

export default function StudentVerifyingScreen({
  steps,
  currentStep,
}: StudentVerifyingScreenProps) {
  const progress = ((currentStep + 1) / steps.length) * 100;
  const activeStep = steps[currentStep];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-[#0BCB51]">
        Preparing Your Recycling Session
      </h2>

      <p className="mt-3 text-base text-[#B2B2B2]">
        Please wait while the kiosk verifies your APCard.
      </p>

      <div className="mt-10 flex h-40 w-40 items-center justify-center rounded-full border border-[#0BCB51]/30 bg-[#0BCB51]/10 shadow-[0_0_45px_rgba(11,203,81,0.25)]">
        <ActiveIcon
          size={64}
          className="animate-pulse text-[#0BCB51]"
        />
      </div>

      <p className="mt-8 text-2xl font-semibold text-[#0BCB51]">
        {activeStep.label}
      </p>

      <p className="mt-2 text-sm text-[#B2B2B2]">
        {activeStep.description}
      </p>

      <div className="mt-8 w-full max-w-2xl">
        <div className="h-2.5 overflow-hidden rounded-full bg-[#2A2A2A]">
          <div
            className="h-full rounded-full bg-[#0BCB51] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
          <div
            className="grid items-center gap-4"
            style={{
              gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              const isDone = currentStep > index;

              return (
                <div key={step.label} className="flex flex-col items-center">
                  <div
                    className={`flex h-13 w-13 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive || isDone
                        ? "border-[#0BCB51] bg-[#0BCB51]/15 text-[#0BCB51]"
                        : "border-[#3A3A3A] bg-[#191919] text-[#6F6F6F]"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 size={22} />
                    ) : (
                      <Icon size={22} />
                    )}
                  </div>

                  <p
                    className={`mt-3 text-xs font-medium transition-colors duration-500 ${
                      isActive || isDone
                        ? "text-white"
                        : "text-[#6F6F6F]"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
