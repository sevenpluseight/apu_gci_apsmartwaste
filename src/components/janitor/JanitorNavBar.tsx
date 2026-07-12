"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Clock3, Package, CheckCircle2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { label: "Overview", icon: LayoutDashboard, href: "/janitor" },
//   { label: "Upcoming", icon: Package, href: "/janitor/upcoming" },
//   { label: "In Progress", icon: Clock3, href: "/janitor/in-progress" },
//   { label: "Completed", icon: CheckCircle2, href: "/janitor/completed" },
// ];

export default function JanitorNavBar() {
  // const pathname = usePathname();

  return (
    <header className="w-full border-b border-[#2A2A2A] bg-[#191919]">
      <div className="mx-auto flex min-h-20 max-w-360 flex-col gap-3 px-5 py-3 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-0">
        <div className="flex items-center justify-between lg:justify-start lg:gap-10">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#B2B2B2] transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            APSpace
          </Link>

          <Image
            src="/logos/apsmartwaste-logo-small.svg"
            width={160}
            height={40}
            alt="APSmartWaste"
            priority
            className="ml-4 lg:ml-0 lg:w-45"
          />
        </div>

        {/* <nav className="flex h-16 items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide lg:h-full lg:gap-8 lg:overflow-visible">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full min-w-fit flex-col items-center justify-center gap-1 px-1 text-sm transition-colors duration-300 ${
                  isActive ? "text-[#0BCB51]" : "text-[#B2B2B2] hover:text-white"
                }`}
              >
                <Icon size={20} strokeWidth={1.7} />
                <span>{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="janitor-nav-indicator"
                    className="absolute bottom-0 h-0.75 w-full rounded-full bg-[#0BCB51]"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav> */}
      </div>
    </header>
  );
}
