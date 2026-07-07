"use client";

import Link from "next/link";
import studentData from "@/mock/student/student.json";
import { Lightbulb, TriangleAlert, Coins, MapPin, Activity, Leaf } from "lucide-react";

export default function StudentPage() {
  const { profile, didYouKnow } = studentData;

  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">

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
      <div className="mb-8 flex items-start gap-4 rounded-xl bg-[#0BCB51] px-6 py-6 shadow-lg shadow-[#0BCB51]/10">
        <Lightbulb size={22} className="mt-0.5 shrink-0 text-black" />
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-black">
            Did You Know?
          </p>
          <p className="text-sm leading-6 text-black">{didYouKnow}</p>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Left Column: Quick Access */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
            Quick Access
          </h2>
          {/* Changed to grid-cols-2 to perfectly fit the two remaining items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-40">
            <Link href="/student/report-overflow">
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#525252] px-6 py-8 transition-all duration-200 hover:border-[#0BCB51]/60 cursor-pointer">
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

            <Link href="/student/eco-points">
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#525252] px-6 py-8 transition-all duration-200 hover:border-[#0BCB51]/60 cursor-pointer">
                <Coins
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#B2B2B2] transition-colors group-hover:text-[#0BCB51]"
                />
                <div className="text-center">
                  <p className="font-semibold text-white">View Eco-Points</p>
                  <p className="mt-1 text-xs text-[#B2B2B2]">Track your balance.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Campus Kiosk Status */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
            Campus Kiosks Status
          </h2>
          <div className="flex flex-col gap-4 h-40 justify-between">
            {/* Kiosk 1 (Online) */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-6 py-4 flex-1">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0BCB51]/15 text-[#0BCB51]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Block B Cafeteria</p>
                  <p className="text-xs text-[#B2B2B2]">Level 2 • 50m away</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#0BCB51] animate-pulse" />
                <span className="text-xs font-semibold text-[#0BCB51] uppercase tracking-wider">Online</span>
              </div>
            </div>

            {/* Kiosk 2 (Offline / Full) */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-6 py-4 flex-1 opacity-70">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-[#B2B2B2] border border-[#2A2A2A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Block E Foyer</p>
                  <p className="text-xs text-[#B2B2B2]">Ground Floor • 120m away</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#525252]" />
                <span className="text-xs font-semibold text-[#B2B2B2] uppercase tracking-wider">Offline</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section: Weekly Impact */}
      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Your Impact This Week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-6">
            <div className="flex items-center gap-2 mb-3 text-[#0BCB51]">
              <Activity size={18} />
              <span className="text-sm font-semibold text-white">Waste Diverted</span>
            </div>
            <p className="text-4xl font-bold text-white">2.4 <span className="text-lg font-normal text-[#B2B2B2]">kg</span></p>
          </div>

          <div className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-6">
            <div className="flex items-center gap-2 mb-3 text-[#0BCB51]">
              <Coins size={18} />
              <span className="text-sm font-semibold text-white">Points Earned</span>
            </div>
            <p className="text-4xl font-bold text-[#0BCB51]">+{profile.ecoPoints}</p>
          </div>

          <div className="rounded-xl bg-[#0BCB51]/10 border border-[#0BCB51]/30 px-6 py-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 text-[#0BCB51]">
              <Leaf size={18} />
              <span className="text-sm font-semibold text-[#0BCB51]">Environmental Equivalent</span>
            </div>
            <p className="text-lg font-medium text-white">You&apos;ve saved the equivalent of <span className="font-bold text-[#0BCB51]">1 Tree</span> being planted! 🌱</p>
          </div>

        </div>
      </div>

    </div>
  );
}