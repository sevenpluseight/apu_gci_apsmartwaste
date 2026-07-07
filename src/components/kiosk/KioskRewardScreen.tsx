"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BottleWine, CheckCircle2, CircleX, Coins, PackageX } from "lucide-react";

const rewardSummary = {
  previousPoints: 420,
  earnedPoints: 30,
  newBalance: 450,
  acceptedItems: 2,
  rejectedItems: 1,
};

const recycledItems = [
  {
    name: "Plastic Bottle",
    points: 15,
    status: "Accepted",
    icon: BottleWine,
  },
  {
    name: "Snack Wrapper",
    points: 0,
    status: "Rejected",
    icon: PackageX,
  },
  {
    name: "Detergent Bottle",
    points: 15,
    status: "Accepted",
    icon: BottleWine,
  },
];

export default function KioskRewardScreen() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/kiosk");
    }, 8000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex h-full items-center justify-between gap-10">
      <div className="max-w-md">
        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#0BCB51]/15 text-[#0BCB51]">
          <Award size={40} />
        </div>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Recycling Completed
        </h2>

        <p className="mt-4 leading-7 text-[#B2B2B2]">
          Eco-Points have been credited to your account. View your balance,
          recycling history, and APCard credit conversion in the APSmartWaste
          Eco-Points Portal.
        </p>

        <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
          <p className="text-sm text-[#B2B2B2]">Session Result</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#191919] p-4">
              <p className="text-sm text-[#B2B2B2]">Accepted</p>
              <p className="mt-2 text-3xl font-bold text-[#0BCB51]">
                {rewardSummary.acceptedItems}
              </p>
            </div>

            <div className="rounded-xl bg-[#191919] p-4">
              <p className="text-sm text-[#B2B2B2]">Rejected</p>
              <p className="mt-2 text-3xl font-bold text-red-400">
                {rewardSummary.rejectedItems}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-[#B2B2B2]">
          Returning to role selection in{" "}
          <span className="font-semibold text-[#0BCB51]">{countdown}</span>s.
        </p>

        <Link href="/kiosk">
          <Button className="group mt-4 h-12 rounded-xl bg-[#0BCB51] px-8 font-semibold text-black hover:bg-[#09B849] cursor-pointer">
            Back Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="w-125 rounded-3xl border border-[#2A2A2A] bg-[#111111] p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#B2B2B2]">Eco-Points Earned</p>
            <h3 className="mt-2 text-5xl font-bold text-[#0BCB51]">
              +{rewardSummary.earnedPoints}
            </h3>
          </div>

          <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#0BCB51]/15 text-[#0BCB51]">
            <Coins size={40} />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0BCB51]/25 bg-[#0BCB51]/10 p-5">
          <div className="flex items-center justify-between">
            <p className="text-[#B2B2B2]">Previous Balance</p>
            <p className="font-semibold text-white">
              {rewardSummary.previousPoints} Points
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[#B2B2B2]">Points Added</p>
            <p className="font-semibold text-[#0BCB51]">
              +{rewardSummary.earnedPoints} Points
            </p>
          </div>

          <div className="my-5 h-px bg-[#2A2A2A]" />

          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-white">New Balance</p>
            <p className="text-3xl font-bold text-[#0BCB51]">
              {rewardSummary.newBalance}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-white">Recycling Summary</p>

          <div className="mt-3 space-y-3">
            {recycledItems.map((item) => {
              const accepted = item.status === "Accepted";
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-[#2A2A2A] bg-[#191919] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={22}
                      className={accepted ? "text-[#0BCB51]" : "text-red-400"}
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.name}
                      </p>
                      <p
                        className={`text-xs ${
                          accepted ? "text-[#0BCB51]" : "text-red-400"
                        }`}
                      >
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {accepted ? (
                      <CheckCircle2 className="text-[#0BCB51]" size={20} />
                    ) : (
                      <CircleX className="text-red-400" size={20} />
                    )}

                    <p
                      className={`text-sm font-semibold ${
                        accepted ? "text-[#0BCB51]" : "text-[#6F6F6F]"
                      }`}
                    >
                      {accepted ? `+${item.points}` : "0"} pts
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
