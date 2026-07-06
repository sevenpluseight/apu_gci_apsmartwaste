"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Home, TriangleAlert, Coins, UserCircle } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "/student" },
  { label: "Report", icon: TriangleAlert, href: "/student/report-overflow" },
  { label: "Eco-Points", icon: Coins, href: "/student/eco-points" },
  // { label: "Profile", icon: UserCircle, href: "/student/profile" },
];

export default function StudentNavBar() {
  const pathName = usePathname();

  return (
    <header className="h-20 w-full border-b border-[#2A2A2A] bg-[#191919]">
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

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full flex-col items-center justify-center gap-1 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-[#0BCB51]"
                    : "text-[#B2B2B2] hover:text-white"
                }`}
              >
                <Icon size={22} strokeWidth={1.5} />
                <span>{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="student-nav-indicator"
                    className="absolute bottom-0 left-0 h-0.75 w-full rounded-full bg-[#0BCB51]"
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
        </nav>
      </div>
    </header>
  );
}
