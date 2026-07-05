
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Map, ClipboardList, PieChart } from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/facility", active: true },
  { label: "Map", icon: Map, href: "/facility/campus-map" },
  { label: "Reports", icon: ClipboardList, href: "/facility/reports" },
  { label: "Analytics", icon: PieChart, href: "/facility/analytics" },
];

export default function FacilityNavBar() {
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

        <nav className="flex h-full items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-full min-w-16 flex-col items-center justify-center gap-1.5 text-sm transition-colors ${item.active ? "text-[#0BCB51]" : "text-[#B2B2B2] hover:text-white"}`}
              >
                <Icon size={22} strokeWidth={1.5} />
                <span>{item.label}</span>

                {item.active && (
                  <div className="absolute bottom-0 h-0.75 w-full rounded-full bg-[#0BCB51]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
