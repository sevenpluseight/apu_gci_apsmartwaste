"use client";

import { Button } from "@/components/ui/button";

// const demoStats = [
//   {
//     value: "4",
//     label: "Core Workflows",
//   },
//   {
//     value: "Real-Time",
//     label: "Kiosk Monitoring",
//   },
//   {
//     value: "Smart",
//     label: "Waste Validation",
//   },
//   {
//     value: "Eco-Points",
//     label: "Reward System",
//   },
// ];

// const demoFlow = [
//   {
//     number: "01",
//     title: "Authenticate",
//     description: "The APSpace User signs in securely at the smart kiosk.",
//   },
//   {
//     number: "02",
//     title: "Deposit Item",
//     description: "The recyclable item is inserted into the kiosk for checking.",
//   },
//   {
//     number: "03",
//     title: "Validate Material",
//     description: "The system recognises and validates the recyclable material.",
//   },
//   {
//     number: "04",
//     title: "Receive Eco-Points",
//     description: "Eco-Points are awarded after successful item validation.",
//   },
//   {
//     number: "05",
//     title: "Trigger Maintenance",
//     description:
//       "Cleaner tasks are generated when kiosk capacity or waste reports require attention.",
//   },
// ];

const features = [
  {
    number: "01",
    label: "APSpace User",
    title: "Complete Recycling Journey",
    description:
      "Authentication, recyclable deposit, validation results and Eco-Points rewards are connected in one guided experience.",
    highlights: ["Secure sign-in", "Item deposit", "Reward confirmation"],
  },
  {
    number: "02",
    label: "Smart System",
    title: "Automated Waste Validation",
    description:
      "The kiosk recognises deposited items and checks whether they meet the accepted recyclable material requirements.",
    highlights: [
      "Item recognition",
      "Material checking",
      "Validation feedback",
    ],
  },
  {
    number: "03",
    label: "Monitoring",
    title: "Real-Time Kiosk Status",
    description:
      "Fill levels and kiosk conditions are monitored continuously so maintenance needs can be identified early.",
    highlights: ["Fill-level tracking", "Status updates", "Automatic alerts"],
  },
  {
    number: "04",
    label: "Cleaner",
    title: "Integrated Maintenance Workflow",
    description:
      "Cleaners receive assigned tasks, access the required compartment and record the completed waste bag replacement.",
    highlights: ["Task assignment", "Compartment access", "Task completion"],
  },
];

export default function KioskDemo() {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="kiosk-demo"
      className="relative scroll-mt-20 overflow-hidden px-6 pt-12 pb-24 text-white sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#0BCB51]/10 blur-[180px]" />

        <div className="absolute left-[-220px] top-[35%] h-[480px] w-[480px] rounded-full bg-[#0BCB51]/8 blur-[170px]" />

        <div className="absolute bottom-[-180px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#0BCB51]/10 blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero heading */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0BCB51]/30 bg-[#0BCB51]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0BCB51] sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0BCB51] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0BCB51]" />
            </span>
            Featured Prototype Demonstration
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Experience Smart Recycling{" "}
            <span className="bg-[linear-gradient(90deg,#0BCB51,#4ADE80)] bg-clip-text text-transparent">
              in Action
            </span>
          </h2>

          <p className="mt-5 text-base font-semibold uppercase tracking-[0.2em] text-[#777777] sm:text-sm">
            Complete End-to-End APSmartWaste Workflow
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B2B2B2] sm:text-lg">
            Explore how APSmartWaste connects the APSpace User recycling
            experience, automated material validation, Eco-Points rewards,
            real-time kiosk monitoring and cleaner maintenance within one
            integrated smart waste system.
          </p>
        </div>

        {/* Quick statistics
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm sm:grid-cols-4">
          {demoStats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "relative px-4 py-6 text-center sm:px-6",
                index % 2 === 0 ? "border-r border-white/10" : "",
                index < 2 ? "border-b border-white/10 sm:border-b-0" : "",
                index !== demoStats.length - 1
                  ? "sm:border-r sm:border-white/10"
                  : "",
              ].join(" ")}
            >
              <p className="text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#7F7F7F] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}

        <div className="mt-12 overflow-hidden rounded-[30px] border border-[#0BCB51]/20 bg-[linear-gradient(120deg,rgba(11,203,81,0.12),rgba(11,203,81,0.03),rgba(255,255,255,0.02))] p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0BCB51]">
                Start Exploring
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Experience APSmartWaste
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#A0A0A0] sm:text-base">
                Explore the complete APSmartWaste solution, including the APSpace User,
                Cleaner and Facility Management interfaces, or view the kiosk
                prototype directly.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => scrollToSection("roles")}
                className="h-12 min-w-56 rounded-xl bg-[#0BCB51] px-6 font-semibold text-black shadow-[0_0_24px_rgba(11,203,81,0.25)] transition-all hover:scale-[1.03] hover:bg-[#20D760] cursor-pointer"
              >
                Explore System Features
              </Button>

              <Button
                variant="outline"
                className="h-12 min-w-56 rounded-xl border-[#0BCB51]/40 bg-transparent px-6 font-semibold text-[#0BCB51] transition-all hover:bg-[#0BCB51]/10 hover:text-white cursor-pointer"
              >
                <a
                  href="/kiosk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Kiosk UI
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Demonstration flow
        <div className="mt-14 rounded-[28px] border border-[#2A2A2A] bg-[#151515]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0BCB51]">
              Demonstration Flow
            </p>

            <h3 className="text-2xl font-bold sm:text-3xl">
              From Authentication to Maintenance
            </h3>

            <p className="max-w-3xl text-sm leading-6 text-[#999999] sm:text-base">
              The demonstration presents the complete process followed by both
              APSpace Users and cleaners within the proposed APSmartWaste
              solution.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {demoFlow.map((step, index) => (
              <div key={step.number} className="relative">
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0BCB51]/50 hover:bg-[#0BCB51]/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0BCB51]/30 bg-[#0BCB51]/10 text-sm font-bold text-[#0BCB51]">
                      {step.number}
                    </span>

                    {index < demoFlow.length - 1 && (
                      <span className="hidden text-[#4A4A4A] md:block">→</span>
                    )}
                  </div>

                  <h4 className="mt-5 text-base font-semibold text-white">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#8F8F8F]">
                    {step.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div> */}

        {/* Video showcase */}
        <div className="relative mt-14 sm:mt-16">
          <div className="absolute inset-0 scale-[0.96] rounded-[42px] bg-[#0BCB51]/14 blur-[52px]" />

          <div className="absolute bottom-[-26px] left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full bg-[#0BCB51]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:rounded-[38px] sm:p-4">
            {/* Video window header */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#A0A0A0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0BCB51]" />
                APSmartWaste Kiosk Demonstration
              </div>

              <div className="hidden items-center gap-2 text-xs text-[#666666] sm:flex">
                Prototype Preview
              </div>
            </div>

            <div className="relative overflow-hidden rounded-b-[24px] sm:rounded-b-[32px]">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
              >
                <source
                  src="/videos/APU_GCI_Kiosk_Demo.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

              {/* Subtle video overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.2),transparent_35%)]" />

              <div className="pointer-events-none absolute bottom-4 left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0BCB51] text-sm text-black">
                  ▶
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F8F]">
                    Now Showing
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    Kiosk End-to-End Workflow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating labels */}
          <div className="absolute -left-5 top-[22%] hidden rounded-2xl border border-white/10 bg-[#191919]/90 px-5 py-4 shadow-2xl backdrop-blur-md xl:block">
            <p className="text-xs uppercase tracking-[0.18em] text-[#777777]">
              Live Feature
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0BCB51]">
              Smart Waste Validation
            </p>
          </div>

          <div className="absolute -right-5 bottom-[22%] hidden rounded-2xl border border-white/10 bg-[#191919]/90 px-5 py-4 shadow-2xl backdrop-blur-md xl:block">
            <p className="text-xs uppercase tracking-[0.18em] text-[#777777]">
              System Status
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0BCB51]">
              Real-Time Monitoring
            </p>
          </div>
        </div>

        {/* Main workflow cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#191919] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0BCB51]/60 hover:shadow-[0_24px_60px_rgba(11,203,81,0.09)]"
            >
              <div className="absolute right-[-35px] top-[-35px] h-32 w-32 rounded-full bg-[#0BCB51]/10 blur-3xl transition group-hover:bg-[#0BCB51]/20" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777777]">
                      {feature.label}
                    </p>

                    <span className="mt-4 block text-5xl font-bold leading-none text-[#0BCB51]/20 transition group-hover:text-[#0BCB51]/35">
                      {feature.number}
                    </span>
                  </div>

                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0BCB51] shadow-[0_0_16px_rgba(11,203,81,0.75)]" />
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A0A0A0]">
                  {feature.description}
                </p>

                <div className="mt-6 space-y-3">
                  {feature.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-[#B2B2B2]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0BCB51]" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-[linear-gradient(90deg,#0BCB51,transparent)] opacity-40 transition group-hover:opacity-100" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* System capabilities */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 text-sm text-[#999999]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0BCB51]" />
            Automated validation
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0BCB51]" />
            Eco-Points rewards
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0BCB51]" />
            Real-time fill monitoring
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0BCB51]" />
            Overflow reporting
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0BCB51]" />
            Cleaner maintenance alerts
          </div>
        </div>
      </div>
    </section>
  );
}
