// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   const scrollToSection = (sectionId: string) => {
//     document
//       .getElementById(sectionId)
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative overflow-hidden px-6 pt-24 pb-20 text-white">
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#0BCB51]/15 blur-[140px]" />
//         <div className="absolute bottom-[-250px] right-[-120px] h-[500px] w-[500px] rounded-full bg-[#0BCB51]/10 blur-[160px]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,203,81,0.12),transparent_55%)]" />

//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
//       </div>

//       <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
//         <div className="inline-flex items-center gap-2 rounded-full border border-[#0BCB51]/30 bg-[#0BCB51]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0BCB51] sm:text-sm">
//           <span className="h-2 w-2 rounded-full bg-[#0BCB51] shadow-[0_0_12px_rgba(11,203,81,0.9)]" />
//           SDG 11 Smart Campus Initiative
//         </div>

//         <Image
//           src="/logos/apsmartwaste-logo-large.svg"
//           alt="APSmartWaste"
//           width={560}
//           height={190}
//           priority
//           className="mt-8 h-auto w-full max-w-155"
//         />

//         <p className="mt-5 text-base font-medium tracking-wide text-[#B2B2B2] sm:text-lg">
//           Smart Waste Awareness & Monitoring System
//         </p>

//         <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//           Building a Cleaner and Smarter{" "}
//           <span className="bg-[linear-gradient(90deg,#0BCB51,#4ADE80)] bg-clip-text text-transparent">
//             APU Campus
//           </span>
//         </h1>

//         <p className="mt-7 max-w-3xl text-base leading-8 text-[#B2B2B2] sm:text-lg">
//           APSmartWaste empowers the APU community to recycle responsibly,
//           monitor smart waste facilities, report overflowing bins and promote
//           sustainable habits through an integrated digital platform.
//         </p>

//         <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           {/* Do not fix the Explore Now button CSS warning
//               (The class `bg-[length:200%_100%]` can be written as
//               `bg-size-[200%_100%]`) */}
//           <Button
//             onClick={() => scrollToSection("roles")}
//             className="h-12 min-w-44 cursor-pointer animate-shimmer rounded-xl bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] bg-[length:200%_100%] px-6 font-semibold text-black shadow-[0_0_24px_rgba(11,203,81,0.35)] transition-all hover:scale-[1.03] hover:bg-[linear-gradient(110deg,#0BCB51,45%,#4ADE80,55%,#0BCB51)] hover:shadow-[0_0_32px_rgba(11,203,81,0.55)]"
//           >
//             Explore Features
//           </Button>

//           <Button
//             onClick={() => scrollToSection("kiosk-demo")}
//             variant="outline"
//             className="h-12 min-w-44 cursor-pointer rounded-xl border-[#525252] bg-[#111111]/40 px-6 text-[#D4D4D4] backdrop-blur-sm transition-all hover:border-[#0BCB51] hover:bg-[#0BCB51]/10 hover:text-white"
//           >
//             Watch Demo
//           </Button>

//           <Button
//             onClick={() => scrollToSection("campaign")}
//             variant="outline"
//             className="h-12 min-w-44 cursor-pointer rounded-xl border-[#525252] bg-[#111111]/40 px-6 text-[#D4D4D4] backdrop-blur-sm transition-all hover:border-[#0BCB51] hover:bg-[#0BCB51]/10 hover:text-white"
//           >
//             View Campaign
//           </Button>
//         </div>

//         <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
//             <p className="text-lg font-bold text-white">Smart</p>
//             <p className="mt-1 text-sm text-[#8F8F8F]">Waste Detection</p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
//             <p className="text-lg font-bold text-white">Real-Time</p>
//             <p className="mt-1 text-sm text-[#8F8F8F]">Bin Monitoring</p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
//             <p className="text-lg font-bold text-white">Eco-Points</p>
//             <p className="mt-1 text-sm text-[#8F8F8F]">Reward System</p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
//             <p className="text-lg font-bold text-white">Integrated</p>
//             <p className="mt-1 text-sm text-[#8F8F8F]">Cleaner Workflow</p>
//           </div>
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={() => scrollToSection("kiosk-demo")}
//         aria-label="Scroll to kiosk demonstration"
//         className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#777777] transition hover:text-[#0BCB51] md:flex"
//       >
//         <span>Discover</span>
//         <span className="flex h-10 w-6 items-start justify-center rounded-full border border-[#525252] pt-2">
//           <span className="h-2 w-1 animate-bounce rounded-full bg-[#0BCB51]" />
//         </span>
//       </button>
//     </section>
//   );
// }
