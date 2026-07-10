"use client";

import { motion } from "framer-motion";
import { BottleWine, LoaderCircle, Lock, LockOpen } from "lucide-react";
import type { MaintenanceStatus } from "@/types/MaintenanceStatus";

interface MaintenanceKioskProps {
  status: MaintenanceStatus;
}

export default function MaintenanceKiosk({
  status,
}: MaintenanceKioskProps) {
  const isUnlocking = status === "unlocking";
  const isOpened = status === "opened";
  const isLocking = status === "locking";

  const doorOpen = isOpened;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-95 w-90 rounded-3xl border border-[#D97706]/60 bg-[#3B2306] p-8 shadow-[0_0_45px_rgba(249,115,22,0.18)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316]">
          <BottleWine size={34} />
        </div>

        <p className="mt-5 text-center text-xl font-semibold text-white">
          Plastic Kiosk
        </p>

        <p className="mt-1 text-center text-xs text-[#FDBA74]">
          Maintenance Compartment
        </p>

        <div
          className={`absolute right-8 top-8 h-3 w-3 rounded-full transition-all duration-300 ${
            isOpened
              ? "bg-[#0BCB51] shadow-[0_0_12px_rgba(11,203,81,0.8)]"
              : "animate-pulse bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
          }`}
        />

        <motion.div
          animate={
            isOpened
              ? {
                  y: [0, 8, 0],
                  opacity: [0.5, 1, 0.5],
                }
              : {
                  y: 0,
                  opacity: 0.35,
                }
          }
          transition={{
            duration: 1.4,
            repeat: isOpened ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-40 -translate-x-1/2 text-3xl text-[#F97316]"
        >
          ↓
        </motion.div>

        <div
          className="absolute left-1/2 top-50 h-40 w-68 -translate-x-1/2 rounded-2xl border border-[#F97316]/60 bg-[#1E1204] shadow-[0_0_30px_rgba(249,115,22,0.25)]"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Inside compartment */}
          <div className="absolute inset-4 overflow-hidden rounded-xl border border-[#F97316]/20 bg-[#140B02] shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:18px_18px]" />

            <motion.div
              initial={false}
              animate={{
                opacity: doorOpen ? 1 : 0,
                scale: doorOpen ? 1 : 0.8,
              }}
              transition={{
                duration: 0.4,
                delay: doorOpen ? 0.25 : 0,
              }}
              className="relative flex h-full flex-col items-center justify-center"
            >
              {/* <div className="relative h-20 w-16 rounded-b-xl rounded-t-md bg-[#252525] shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <div className="absolute left-1/2 top-2 h-2 w-9 -translate-x-1/2 rounded-full bg-[#555555]" />

                <div className="absolute left-2 top-6 h-10 w-1.5 rotate-6 rounded-full bg-white/5" />

                <div className="absolute right-2 top-8 h-8 w-1.5 -rotate-6 rounded-full bg-white/5" />
              </div> */}

              {/* <p className="mt-3 text-xs font-medium text-[#FDBA74]">
                Full waste bag
              </p> */}
            </motion.div>
          </div>

          {/* Animated maintenance door */}
          <motion.div
            initial={false}
            animate={{
              rotateX: doorOpen ? -82 : 0,
              y: doorOpen ? 14 : 0,
            }}
            transition={{
              duration: isLocking ? 0.7 : 0.9,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="absolute inset-4 z-10 overflow-hidden rounded-xl border border-[#FB923C]/70 bg-[#D9D9D9] shadow-[0_0_25px_rgba(249,115,22,0.35)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-black/10" />

            <div className="absolute left-1/2 top-3 h-2 w-20 -translate-x-1/2 rounded-full bg-black/20" />

            <div className="relative flex h-full flex-col items-center justify-center">
              {isUnlocking && (
                <>
                  <LoaderCircle
                    size={40}
                    className="animate-spin text-[#F97316]"
                  />

                  <p className="mt-3 font-semibold text-[#F97316]">
                    Unlocking...
                  </p>
                </>
              )}

              {isOpened && (
                <>
                  <LockOpen
                    size={40}
                    className="text-[#F97316]"
                  />

                  <p className="mt-3 font-semibold text-[#F97316]">
                    Door Open
                  </p>
                </>
              )}

              {isLocking && (
                <>
                  <Lock
                    size={40}
                    className="text-[#F97316]"
                  />

                  <p className="mt-3 font-semibold text-[#F97316]">
                    Closing...
                  </p>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              opacity: isOpened ? 1 : 0,
              y: isOpened ? 0 : 8,
            }}
            transition={{
              duration: 0.35,
              delay: isOpened ? 0.45 : 0,
            }}
            className="pointer-events-none absolute inset-x-0 top-5 z-20 text-center"
          >
            {/* <p className="text-xs font-semibold text-[#F97316]">
              Compartment Open
            </p> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
