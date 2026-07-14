"use client";

import Image from "next/image";
import { useState } from "react";
import { CalendarDays, Clock3, LayoutGrid, CreditCard, EllipsisVertical, Leaf, Search, Menu, X } from "lucide-react";

const navItems = [
  { label: "Timetable", icon: CalendarDays },
  { label: "Attendance", icon: Clock3 },
  { label: "Dashboard", icon: LayoutGrid },
  { label: "APCard", icon: CreditCard },
  { label: "More", icon: EllipsisVertical },
  { label: "APSmartWaste", icon: Leaf, active: true },
];

export default function LandingNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="h-20 w-full border-b border-[#525252] bg-[#191919] px-6 md:px-29">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Image src="/logos/apspace-logo.svg" alt="APSpace" width={120} height={40} priority />
            <div className="hidden md:flex h-13 w-60 items-center gap-3 rounded-xl bg-[#2A2A2A] px-5 text-[#B2B2B2]">
              <Search size={18} />
              <span className="text-sm">(S)earch APSpace</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex h-full items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`relative flex h-full min-w-16 flex-col items-center justify-center gap-2 text-sm ${item.active ? "text-[#2983FF]" : "text-[#B2B2B2]"}`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                  <span>{item.label}</span>
                  {item.active && <div className="absolute bottom-0 h-0.75 w-full rounded-full bg-[#2983FF]" />}
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center rounded-lg p-2 text-[#B2B2B2] hover:text-white hover:bg-[#2A2A2A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#191919] border-b border-[#525252] px-6 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 py-3 text-sm border-b border-[#2A2A2A] last:border-0 ${item.active ? "text-[#2983FF]" : "text-[#B2B2B2]"}`}
              >
                <Icon size={20} strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}