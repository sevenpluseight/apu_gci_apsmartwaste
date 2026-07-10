"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Info, ChevronUp } from "lucide-react";

export default function CardReader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/kiosk/student/verifying");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="relative flex h-75 w-107.5 items-center justify-center rounded-3xl border-2 border-dashed border-[#0BCB51]/45 bg-[#111111]/80 shadow-[0_0_40px_rgba(11,203,81,0.12)]">
        <motion.div
          className="absolute top-10 h-3.5 w-62 rounded-full border border-[#0BCB51]/70 bg-[#0BCB51]/15"
          animate={{
            boxShadow: [
              "0 0 10px rgba(11,203,81,0.25)",
              "0 0 24px rgba(11,203,81,0.6)",
              "0 0 10px rgba(11,203,81,0.25)",
            ],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 text-[#0BCB51]"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronUp size={38} strokeWidth={2.5} className="mt-8" />
        </motion.div>

        <motion.div
          className="absolute top-24"
          animate={{ y: [0, 26, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-42 w-70 overflow-hidden rounded-2xl border border-[#7BFFAA]/70 bg-linear-to-br from-[#0BCB51] via-[#08B648] to-[#056B2C] p-4 shadow-[0_0_30px_rgba(11,203,81,0.45)]">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
            <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-black/10" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mr-8 text-lg font-bold tracking-wide text-white">
                  APCard
                </p>

                <p className="text-[10px] text-white/80">
                  Asia Pacific University
                </p>
              </div>

              <div className="flex h-18 w-14 items-center justify-center overflow-hidden rounded-md border border-white/40 bg-white/10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/70"
                >
                  <circle cx="12" cy="8" r="4" fill="currentColor" />
                  <path
                    d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-1 text-left">
              <p className="text-base font-semibold text-white">
                Alex Tan
              </p>

              <p className="text-xs tracking-wide text-white/90">
                TP071999
              </p>

              <p className="text-xs text-white/75">
                IC/Passport: A12345678
              </p>
            </div>

            <div className="absolute bottom-2.5 right-4 text-right">
              <p className="text-2xl font-bold tracking-wider text-white/90">
                APU
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-full border border-[#2A2A2A] bg-[#111111] px-6 py-3 text-sm text-[#B2B2B2]">
        <Info size={18} className="text-[#0BCB51]" />

        <span>
          Insert your APCard into the card reader.
        </span>

        {/* <Link href="/kiosk/student/verifying">
          <Button className="group h-11 cursor-pointer rounded-xl bg-[#0BCB51] px-8 font-semibold text-black transition-all duration-300 hover:bg-[#09B849] hover:shadow-[0_0_20px_rgba(11,203,81,0.3)]">
            Next

            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
