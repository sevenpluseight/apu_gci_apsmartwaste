"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Home, TriangleAlert, Coins, BookOpen } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { label: "Home", icon: Home, href: "/student" },
  { label: "Report", icon: TriangleAlert, href: "/student/report-overflow" },
  { label: "Eco-Points", icon: Coins, href: "/student/eco-points" },
  { label: "Guide", icon: BookOpen, href: "/student/recycling-guide" },
  // { label: "Profile", icon: UserCircle, href: "/student/profile" },
];

export default function StudentNavBar() {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b border-[#2A2A2A] bg-[#191919]">
      <div className="mx-auto flex h-full max-w-360 items-center justify-between px-10">

        <div className="flex items-center gap-10">
          <Link 
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#B2B2B2] transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            APSpace
          </Link>

          <Image 
            src="/logos/apsmartwaste-logo-small.svg"
            width={180}
            height={45}
            alt="APSmartWaste"
            priority
          />
        </div>

        <nav className="flex h-full items-center gap-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathName === item.href;

            if (item.href === "/student/eco-points") {
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
      </div>
    </header>
  );
}
