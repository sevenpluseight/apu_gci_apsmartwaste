"use client";

import Link from "next/link";
import studentData from "@/mock/student/student.json";
import { Lightbulb, TriangleAlert, Coins, Activity, Leaf, MapPin, Clock } from "lucide-react";

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
      <div className="mb-5 flex items-start gap-4 rounded-xl bg-[#0BCB51] px-6 py-6 shadow-lg shadow-[#0BCB51]/10">
        <Lightbulb size={22} className="mt-0.5 shrink-0 text-black" />
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-black">
            Did You Know?
          </p>
          <p className="text-sm leading-6 text-black">{didYouKnow}</p>
        </div>
      </div>

      {/* Impact Banner */}
      <div className="mb-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#0BCB51]/20 rounded-xl bg-[#E6FFF0] border border-[#0BCB51]/30 shadow-sm">
        
        {/* Waste Diverted */}
        <div className="flex-1 px-8 py-6">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-[#0BCB51]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#166534]">Waste Diverted</span>
          </div>
          <p className="text-3xl font-bold text-black">2.4 <span className="text-base font-normal text-black/60">kg</span></p>
        </div>

        {/* Total Eco-Points */}
        <div className="flex-1 px-8 py-6">
          <div className="flex items-center gap-2 mb-2">
            <Coins size={16} className="text-[#0BCB51]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#166534]">Total Eco-Points</span>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-[#0BCB51]">{profile.ecoPoints}</p>
            <span className="text-xs font-bold text-[#166534] bg-[#0BCB51]/20 px-2 py-0.5 rounded-full">
              +145 this week
            </span>
          </div>
        </div>

        {/* Eco Equivalent */}
        <div className="flex-1 px-8 py-6">
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={16} className="text-[#0BCB51]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#166534]">Eco Equivalent</span>
          </div>
          
          {/* Flex container with justify-between and gap to prevent overlapping */}
          <div className="flex items-center justify-between w-full gap-4">
            <p className="text-3xl font-bold text-[#0BCB51] whitespace-nowrap">
              1 <span className="text-base font-normal text-[#166534]/70">Tree Saved 🌳</span>
            </p>
            
            {/* Longer Inline Progress Bar anchored to the right */}
            <div className="flex flex-col w-32 sm:w-50 mt-1">
              <div className="flex justify-between text-[9px] font-bold text-[#166534] mb-1 uppercase tracking-wide">
                <span>Next</span>
                <span>24%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#0BCB51]/20 overflow-hidden">
                <div className="h-full rounded-full bg-[#0BCB51]" style={{ width: "24%" }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Access */}
      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <Link href="/student/report-overflow">
            <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#525252] px-6 py-10 transition-all duration-200 hover:border-[#0BCB51]/60 cursor-pointer">
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
            <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] border border-[#525252] px-6 py-10 transition-all duration-200 hover:border-[#0BCB51]/60 cursor-pointer">
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

      {/* Bottom Dashboard Data */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Activity */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
            Recent Activity
          </h2>
          <div className="flex flex-col gap-3">
            {/* Activity Item 1 */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-5 py-4 transition-colors hover:border-[#525252]/80">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0BCB51]/15 text-[#0BCB51]">
                  <Leaf size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Recycled Plastic Bottles</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-[#B2B2B2]">
                    <Clock size={12} /> Today at 1:45 PM
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#0BCB51]">+45 pts</span>
            </div>
            
            {/* Activity Item 2 */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-5 py-4 transition-colors hover:border-[#525252]/80">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0BCB51]/15 text-[#0BCB51]">
                  <Activity size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Recycled Aluminum Cans</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-[#B2B2B2]">
                    <Clock size={12} /> Yesterday at 10:20 AM
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#0BCB51]">+100 pts</span>
            </div>
          </div>
        </div>

        {/* Live Campus Kiosks */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
            Live Campus Kiosks
          </h2>
          <div className="flex flex-col gap-3">
            {/* Kiosk 1 (Online) */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-5 py-4 transition-colors hover:border-[#0BCB51]/40 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2A2A] text-[#B2B2B2]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Block B Cafeteria</p>
                  <p className="mt-0.5 text-xs text-[#B2B2B2]">Level 2 • 50m away</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#0BCB51] animate-pulse" />
                <span className="text-xs font-semibold text-[#0BCB51] uppercase tracking-wider">Online</span>
              </div>
            </div>

            {/* Kiosk 2 (Offline) */}
            <div className="flex items-center justify-between rounded-xl bg-[#191919] border border-[#525252] px-5 py-4 opacity-75">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2A2A] text-[#B2B2B2]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Block E Foyer</p>
                  <p className="mt-0.5 text-xs text-[#B2B2B2]">Ground Floor • 120m away</p>
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
    </div>
  );
}