"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, Home, TriangleAlert, Coins, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "/apspace-user" },
  { label: "Report", icon: TriangleAlert, href: "/apspace-user/report-overflow" },
  { label: "Eco-Points", icon: Coins, href: "/apspace-user/eco-points" },
];

export default function StudentNavBar() {
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-20 w-full border-b border-[#2A2A2A] bg-[#191919]">
        <div className="mx-auto flex h-full max-w-360 items-center justify-between px-6 md:px-10">

          <div className="flex items-center gap-4 md:gap-10">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-[#B2B2B2] transition-colors hover:text-white"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">APSpace</span>
            </Link>
            <Image
              src="/logos/apsmartwaste-logo-small.svg"
              width={150}
              height={40}
              alt="APSmartWaste"
              priority
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex h-full items-center gap-10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathName === item.href;

              if (item.href === "/apspace-user/eco-points") {
                return (
                  <TooltipProvider key={item.href} delay={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="relative flex h-20 flex-col items-center justify-center gap-1">
                          <Link
                            href={item.href}
                            className={`relative flex h-full flex-col items-center justify-center gap-1 text-sm transition-colors duration-300 ${
                              isActive ? "text-[#0BCB51]" : "text-[#B2B2B2] hover:text-white"
                            }`}
                          >
                            <Icon size={22} strokeWidth={1.5} />
                            <span>{item.label}</span>
                            {isActive && (
                              <motion.div
                                layoutId="student-nav-indicator"
                                className="absolute bottom-0 left-0 h-0.75 w-full rounded-full bg-[#0BCB51]"
                                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                              />
                            )}
                          </Link>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="border border-[#525252] bg-[#191919] text-white">
                        <div className="flex items-center gap-2 px-1 py-0.5">
                          <Coins size={14} className="text-[#0BCB51]" />
                          <span className="text-sm font-semibold">1,692 Eco Points</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-full flex-col items-center justify-center gap-1 text-sm transition-colors duration-300 ${
                    isActive ? "text-[#0BCB51]" : "text-[#B2B2B2] hover:text-white"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="student-nav-indicator"
                      className="absolute bottom-0 left-0 h-0.75 w-full rounded-full bg-[#0BCB51]"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </Link>
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

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="sticky top-20 z-40 md:hidden bg-[#191919] border-b border-[#2A2A2A] px-6 py-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-4 py-3 text-sm border-b border-[#2A2A2A] last:border-0 transition-colors ${
                    isActive ? "text-[#0BCB51]" : "text-[#B2B2B2] hover:text-white"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{item.label}</span>
                  {isActive && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#0BCB51]" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}