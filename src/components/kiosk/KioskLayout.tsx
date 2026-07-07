import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface KioskLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

export default function KioskLayout({
  children,
  showBackButton = true,
}: KioskLayoutProps) {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[#0E0E0E] p-6">
      <div className="relative w-275">
        {/* Back to Role Selection */}
        {showBackButton && (
          <Link
            href="/kiosk"
            className="group absolute mt-6 -translate-x-[calc(100%+24px)] -translate-y-1/2 inline-flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#191919] px-3 py-2 text-sm text-[#B2B2B2] shadow-lg transition-all duration-300 hover:border-[#0BCB51] hover:bg-[#0BCB51]/10 hover:text-white"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Role Selection
          </Link>
        )}

        {/* Kiosk */}
        <div className="h-190 overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#191919] shadow-2xl">
          {/* Header */}
          <header className="h-30 border-b border-[#2A2A2A] px-10">
            <div className="flex h-full items-center gap-5">
              <Image
                src="/logos/apu-gci-logo.svg"
                alt="APU GCI"
                width={110}
                height={110}
                priority
              />

              <div>
                <h1 className="text-2xl font-semibold text-white">
                  APSmartWaste Kiosk
                </h1>

                <p className="mt-1 text-sm text-[#B2B2B2]">
                  Smart Recycling System
                </p>
              </div>
            </div>
          </header>

          {/* Screen */}
          <section className="flex h-160 flex-col px-16 py-10">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
