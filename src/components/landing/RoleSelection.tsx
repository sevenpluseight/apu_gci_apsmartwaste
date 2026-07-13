import { ArrowRight, CircleCheck, GraduationCap, Building2, BrushCleaning, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = [
  {
    title: "Student",
    icon: GraduationCap,
    href: "/student",
    description:
      "Report waste issues and participate in sustainable recycling initiatives across the campus.",
    features: [
      "Report Overflowing Bins",
      "View & Redeem Eco-Points",
      "Track Recycling Activity",
    ],
    button: "Explore Student",
  },
  // {
  //   title: "Facility",
  //   icon: Building2,
  //   href: "/facility",
  //   description:
  //     "Monitor campus waste conditions and manage waste reports through a centralized dashboard.",
  //   features: [
  //     "Smart Waste Dashboard",
  //     "Manage Overflow Reports",
  //     "Real-Time Bin Status",
  //   ],
  //   button: "Explore Dashboard",
  // },
  {
    title: "Janitor",
    icon: BrushCleaning,
    href: "/janitor",
    description:
      "Complete assigned cleaning tasks and keep campus waste facilities well maintained",
    features: [
      "View Assigned Tasks",
      "Update Cleaning Status",
      "Mark Tasks as Completed",
    ],
    button: "Explore Janitor",
  },
];

export default function RoleSelection() {
  return (
    <section id="roles" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4 text-[#0BCB51]">
          <UserRound size={34} />
          <h2 className="text-4xl font-medium">Choose Your Role</h2>
        </div>

        <p className="mb-8 text-lg font-medium text-white">
          Experience SmartWaste from the perspective of students or janitors.
        </p>
        
        <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="flex min-h-95 flex-col rounded-xl bg-[#191919] px-7 py-8 text-left"
              >
                <div className="mx-auto mb-8 flex h-14 w-54 items-center justify-center gap-3 rounded-xl border border-[#525252] text-xl font-semibold">
                  <Icon size={28} />
                  {role.title}
                </div>

                <p className="mb-8 h-20 text-center text-base leading-7 text-[#B2B2B2]">{role.description}</p>

                <div className="mt-4 mb-10 space-y-3">
                  {role.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CircleCheck size={18} className="text-[#0BCB51]" />
                      <span className="text-base text-[#B2B2B2]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={role.href} className="mt-auto">
                  <Button className="group w-full h-13 rounded-xl border border-[#0BCB51]/60 bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] bg-size-[200%_100%] animate-shimmer text-base font-semibold text-black shadow-[0_0_24px_rgba(11,203,81,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] hover:shadow-[0_0_32px_rgba(11,203,81,0.55)] cursor-pointer">
                    {role.button}
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-sm italic text-[#B2B2B2]">
          All system data shown in this prototype is simulated for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
