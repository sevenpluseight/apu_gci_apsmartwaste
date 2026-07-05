"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logos/apsmartwaste-logo-large.svg"
          alt="APSmartWaste"
          width={600}
          height={200}
          priority
        />

        <p className="mt-4 text-lg text-[#B2B2B2]">
          Smart Waste Awareness & Monitoring System
        </p>

        <p className="mt-16 max-w-3xl text-base leading-8 text-white">
          Empowering the APU community to monitor waste, report overflowing bins
          and promote{" "}
          <span className="font-semibold text-[#0BCB51]">
            sustainable recycling
          </span>{" "}
          practices.
        </p>

        <div className="mt-16 flex items-center gap-6">
          {/* Do not fix the Explore Now button CSS warning (The class `bg-[length:200%_100%]` can be written as `bg-size-[200%_100%]`) */}
          {/* Explore Now */}
          <Button
            onClick={() => document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" })}
            className="h-12 w-44 animate-shimmer rounded-xl bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] bg-[length:200%_100%] font-semibold text-black shadow-[0_0_24px_rgba(11,203,81,0.35)] transition-all hover:scale-[1.03] hover:bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] hover:shadow-[0_0_32px_rgba(11,203,81,0.55)] cursor-pointer"
          >
            Explore Now
          </Button>

          {/* View Campaign */}
          <Button
            onClick={() => document.getElementById("campaign")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="h-12 w-44 rounded-xl border-[#525252] bg-transparent text-[#B2B2B2] hover:border-[#0BCB51] hover:bg-transparent hover:text-white cursor-pointer"
          >
            View Campaign
          </Button>
        </div>
      </div>
    </section>
  );
}
