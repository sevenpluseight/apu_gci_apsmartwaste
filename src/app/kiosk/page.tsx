import Link from "next/link";
import {
  GraduationCap,
  BrushCleaning,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import KioskLayout from "@/components/kiosk/KioskLayout";

export default function KioskPage() {
  return (
    <KioskLayout showBackButton={false}>
      <Link
        href="/"
        className="group self-start inline-flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111] px-4 py-2 text-sm text-[#B2B2B2] transition-all duration-300 hover:border-[#0BCB51] hover:bg-[#0BCB51]/10 hover:text-white"
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back to APSpace
      </Link>

      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">APSmartWaste Kiosk</h1>

        <p className="mt-3 text-base text-[#B2B2B2]">
          Smart Recycling System
        </p>

        <p className="mt-1 max-w-2xl text-center text-sm leading-6 text-[#8A8A8A]">
          Select the interface you would like to explore.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Link
          href="/kiosk/student"
          className="group rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#0BCB51] hover:bg-[#171717] hover:shadow-[0_0_35px_rgba(11,203,81,0.18)]"
        >
          <div className="flex items-center justify-between">
            <GraduationCap size={42} className="text-[#0BCB51]" />

            <ArrowRight
              size={22}
              className="text-white transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-white">Student</h2>

          <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
            Experience the recycling process from inserting an APCard to earning
            Eco-Points after successfully recycling.
          </p>

          <div className="mt-4 rounded-xl border border-[#2A2A2A] bg-[#191919] px-4 py-3">
            <p className="text-xs leading-5 text-[#B2B2B2]">
              <span className="font-semibold text-[#0BCB51]">Prototype:</span>{" "}
              APCard insertion continues after{" "}
              <span className="text-white">5s</span>, verification in{" "}
              <span className="text-white">6s</span>, validation in{" "}
              <span className="text-white">3.5s</span> and Rewards returns
              after <span className="text-white">8s</span>.
            </p>
          </div>
        </Link>

        <Link
          href="/kiosk/janitor"
          className="group rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#0BCB51] hover:bg-[#171717] hover:shadow-[0_0_35px_rgba(11,203,81,0.18)]"
        >
          <div className="flex items-center justify-between">
            <BrushCleaning size={42} className="text-[#0BCB51]" />

            <ArrowRight
              size={22}
              className="text-white transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-white">Janitor</h2>

          <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
            Explore the maintenance workflow for replacing waste bags,
            unlocking storage and completing assigned tasks.
          </p>
        </Link>
      </div>

      <p className="mt-6 text-center text-xs italic text-[#6F6F6F]">
        This kiosk interface is a simulated prototype for demonstration purposes only.
      </p>
    </KioskLayout>
  );
}
