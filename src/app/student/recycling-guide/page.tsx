"use client";

import { Recycle, Smartphone, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import studentData from "@/mock/student/student.json";

const binGuide = [
  {
    color: "bg-blue-500",
    label: "Blue Bin",
    title: "Recyclables",
    items: ["Plastic bottles", "Aluminium cans", "Cardboard", "Paper", "Glass bottles"],
  },
  {
    color: "bg-green-500",
    label: "Green Bin",
    title: "Organic / Food Waste",
    items: ["Food scraps", "Fruit peels", "Coffee grounds", "Vegetable waste", "Biodegradable materials"],
  },
  {
    color: "bg-[#525252]",
    label: "Black Bin",
    title: "General Waste",
    items: ["Tissue paper", "Styrofoam", "Contaminated packaging", "Mixed materials", "Non-recyclables"],
  },
];

export default function RecyclingGuidePage() {
  const { recyclingItems } = studentData;

  return (
    <div className="mx-auto max-w-360 px-10 py-10 text-white">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Recycling Guide</h1>
        <p className="mt-1 text-sm text-[#B2B2B2]">
          Learn how to recycle correctly and earn Eco-Points for every action.
        </p>
      </div>

      {/* Bin Guide */}
      <div className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          What Goes in Which Bin?
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {binGuide.map((bin) => (
            <div
              key={bin.label}
              className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`h-4 w-4 rounded-full ${bin.color}`} />
                <div>
                  <p className="text-xs text-[#B2B2B2]">{bin.label}</p>
                  <p className="text-sm font-semibold text-white">{bin.title}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {bin.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#B2B2B2]">
                    <ChevronRight size={12} className="shrink-0 text-[#525252]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Eco-Points per item */}
      <div className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Eco-Points You Can Earn
        </h2>
        <div className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-5">
          <div className="divide-y divide-[#2A2A2A]">
            {recyclingItems.map((item) => (
              <div
                key={item.type}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <Recycle size={16} className="text-[#0BCB51]" />
                  <span className="text-sm text-white">{item.type}</span>
                </div>
                <span className="text-sm font-semibold text-[#0BCB51]">
                  +{item.points} pts per item
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 2 Hardware Section */}
      <div className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Coming in Phase 2 — Smart Recycling Stations
        </h2>
        <div className="rounded-xl bg-[#191919] border border-[#525252] px-8 py-7">
          <div className="grid grid-cols-2 gap-8">

            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#0BCB51]">
                <Smartphone size={16} />
                How APCard Scanning Will Work
              </div>
              <ol className="space-y-4">
                {[
                  "Bring your recyclable items to the designated recycling station on campus",
                  "Scan your APCard or student ID at the station reader",
                  "Place your items into the correct recycling slot",
                  "The system automatically detects and records your recycling activity",
                  "Eco-Points are instantly credited to your account",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0BCB51]/20 text-xs font-bold text-[#0BCB51]">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-6 text-[#B2B2B2]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-3 text-sm font-semibold text-white">Accepted Items at Station</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Plastic Bottles", "Aluminium Cans", "Paper", "Cardboard", "Glass Bottles", "Electronic Waste"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-[#111111] px-3 py-2 text-xs text-[#B2B2B2]"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0BCB51]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[#0BCB51]/10 border border-[#0BCB51]/30 px-5 py-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0BCB51]">
                  <Star size={14} />
                  Phase 1 — Available Now
                </div>
                <p className="text-xs leading-5 text-[#B2B2B2]">
                  While the hardware stations are being developed, you can manually log your recycling activities through the Eco-Points Portal to start earning points today.
                </p>
                <Link href="/student/eco-points">
                  <p className="mt-3 text-xs font-semibold text-[#0BCB51] hover:underline cursor-pointer">
                    Go to Eco-Points Portal →
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Key Tips */}
      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B2B2B2]">
          Key Recycling Tips
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { emoji: "🚿", title: "Rinse First", desc: "Always rinse containers before recycling to prevent contamination of entire batches." },
            { emoji: "🚫", title: "No Food Waste in Recycling", desc: "Food-contaminated items cannot be recycled. Place them in the green or black bin instead." },
            { emoji: "📦", title: "Flatten Cardboard", desc: "Flatten cardboard boxes before placing them in the blue bin to save space." },
          ].map((tip) => (
            <div key={tip.title} className="rounded-xl bg-[#191919] border border-[#525252] px-5 py-5">
              <p className="mb-2 text-2xl">{tip.emoji}</p>
              <p className="mb-1 text-sm font-semibold text-white">{tip.title}</p>
              <p className="text-xs leading-5 text-[#B2B2B2]">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
