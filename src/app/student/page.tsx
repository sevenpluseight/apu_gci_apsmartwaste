"use client";

import Link from "next/link";
import { Lightbulb, Flame, TriangleAlert, Coins, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import studentData from "@/mock/student/student.json";

export default function StudentPage() {
  const { profile, challenge, didYouKnow } = studentData;

  return (
    <div className="mx-auto max-w-360 px-10 py-10 text-white">

      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome, {profile.name}!
        </h1>
        <p className="mt-1 text-sm text-[#B2B2B2]">
          {profile.studentId} | {profile.intake}
        </p>
      </div>

      {/* Did You Know Banner */}
      <div className="mb-6 flex items-start gap-3 rounded-xl bg-[#0BCB51]/15 border border-[#0BCB51]/30 px-5 py-4">
        <Lightbulb size={20} className="mt-0.5 shrink-0 text-[#0BCB51]" />
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#0BCB51]">
            Did You Know?
          </p>
          <p className="text-sm leading-6 text-white">{didYouKnow}</p>
        </div>
      </div>

      {/* Monthly Challenge */}
      <div className="mb-8 rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#F97316]">
          <Flame size={16} />
          This Month&apos;s Challenge
        </div>
        <h2 className="mb-1 text-lg font-bold text-white">{challenge.title}</h2>
        <p className="mb-4 text-sm leading-6 text-[#B2B2B2]">{challenge.description}</p>

        <div className="mb-2 flex items-center justify-between text-xs text-[#B2B2B2]">
          <span>Your Progress</span>
          <span className="font-semibold text-white">{challenge.progress}%</span>
        </div>
        <Progress
          value={challenge.progress}
          className="h-2 bg-[#2A2A2A] [&>div]:bg-[#0BCB51]"
        />

        <div className="mt-3 flex items-center justify-between text-xs text-[#B2B2B2]">
          <span>Reward: {challenge.reward}</span>
          <span>{challenge.participants.toLocaleString()} students joined</span>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Quick Access
        </h2>
        <div className="grid grid-cols-3 gap-4">

          {/* Report a Bin */}
          <Link href="/student/report-overflow">
            <div className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-8 transition-all duration-200 hover:border-[#0BCB51]/50 hover:bg-[#191919]/80 cursor-pointer">
              <TriangleAlert
                size={28}
                strokeWidth={1.5}
                className="text-[#B2B2B2] transition-colors group-hover:text-[#0BCB51]"
              />
              <div className="text-center">
                <p className="font-semibold text-white">Report a bin</p>
                <p className="mt-1 text-xs text-[#B2B2B2]">Spotted an overflow?</p>
              </div>
            </div>
          </Link>

          {/* View Eco-Points */}
          <Link href="/student/eco-points">
            <div className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-8 transition-all duration-200 hover:border-[#0BCB51]/50 hover:bg-[#191919]/80 cursor-pointer">
              <Coins
                size={28}
                strokeWidth={1.5}
                className="text-[#B2B2B2] transition-colors group-hover:text-[#0BCB51]"
              />
              <div className="text-center">
                <p className="font-semibold text-white">View Eco-Points</p>
                <p className="mt-1 text-xs text-[#B2B2B2]">Track your Eco-Points.</p>
              </div>
            </div>
          </Link>

          {/* My Reports */}
          <Link href="/student/report-overflow">
            <div className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-8 transition-all duration-200 hover:border-[#0BCB51]/50 hover:bg-[#191919]/80 cursor-pointer">
              <ChevronRight
                size={28}
                strokeWidth={1.5}
                className="text-[#B2B2B2] transition-colors group-hover:text-[#0BCB51]"
              />
              <div className="text-center">
                <p className="font-semibold text-white">My Reports</p>
                <p className="mt-1 text-xs text-[#B2B2B2]">View report status.</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
