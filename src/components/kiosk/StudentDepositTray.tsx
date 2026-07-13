"use client";

import { useEffect, useState } from "react";
import { BottleWine, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

type TrayStatus = "preparing" | "opened" | "closing";

interface StudentDepositTrayProps {
  closeTray?: boolean;
}

export default function StudentDepositTray({
  closeTray = false,
}: StudentDepositTrayProps) {
  const [status, setStatus] = useState<TrayStatus>("preparing");

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setStatus("opened");
    }, 800);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!closeTray || status !== "opened") return;

    const timer = setTimeout(() => {
      setStatus("closing");
    }, 0);

    return () => clearTimeout(timer);
  }, [closeTray, status]);

  const isPreparing = status === "preparing";
  const isOpened = status === "opened";
  const isClosing = status === "closing";

  const trayOpen = isOpened;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-95 w-90 rounded-3xl border border-[#D97706]/60 bg-[#3B2306] p-8 shadow-[0_0_45px_rgba(249,115,22,0.18)]">
        {/* Header */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316]">
          <BottleWine size={34} />
        </div>

        <p className="mt-5 text-center text-xl font-semibold text-white">
          Plastic Kiosk
        </p>

        <p className="mt-1 text-center text-xs text-[#FDBA74]">
          Deposit Tray
        </p>

        {/* Status LED */}
        <div
          className={`absolute right-8 top-8 h-3 w-3 rounded-full transition-all duration-300 ${
            isOpened
              ? "bg-[#0BCB51] shadow-[0_0_12px_rgba(11,203,81,0.8)]"
              : "animate-pulse bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
          }`}
        />

        {/* Arrow */}
        <motion.div
          animate={
            isOpened
              ? {
                  y: [0, 7, 0],
                  opacity: [0.5, 1, 0.5],
                }
              : {
                  y: 0,
                  opacity: 0.25,
                }
          }
          transition={{
            duration: 1.5,
            repeat: isOpened ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-40 -translate-x-1/2 text-3xl text-[#F97316]"
        >
          ↓
        </motion.div>

        {/* Deposit Compartment */}
        <div
          className="absolute left-1/2 top-50 h-40 w-68 -translate-x-1/2 rounded-2xl border border-[#F97316]/60 bg-[#1E1204] shadow-[0_0_30px_rgba(249,115,22,0.25)]"
          style={{ perspective: "1000px" }}
        >
          {/* Inside Compartment */}
          <div className="absolute inset-4 overflow-hidden rounded-xl border border-[#F97316]/20 bg-[#2A1805] shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:18px_18px]" />

            <motion.div
              initial={false}
              animate={{
                opacity: trayOpen ? 1 : 0,
                scale: trayOpen ? 1 : 0.9,
              }}
              transition={{
                duration: 0.35,
                delay: trayOpen ? 0.25 : 0,
              }}
              className="relative flex h-full flex-col items-center justify-center"
            >
              <BottleWine size={40} className="text-[#F97316]" />

              <p className="mt-3 text-sm font-semibold text-[#F97316]">
                Insert plastic bottles
              </p>
            </motion.div>
          </div>

          {/* Animated Door */}
          <motion.div
            initial={false}
            animate={{
              rotateX: trayOpen ? -82 : 0,
              y: trayOpen ? 14 : 0,
            }}
            transition={{
              duration: isClosing ? 0.65 : 0.9,
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
              {isPreparing && (
                <>
                  <LoaderCircle
                    size={40}
                    className="animate-spin text-[#F97316]"
                  />

                  <p className="mt-3 font-semibold text-[#F97316]">
                    Preparing Tray...
                  </p>

                  <p className="mt-1 text-xs text-[#F97316]/75">
                    Please wait
                  </p>
                </>
              )}

              {isClosing && (
                <>
                  <LoaderCircle
                    size={40}
                    className="animate-spin text-[#F97316]"
                  />

                  <p className="mt-3 font-semibold text-[#F97316]">
                    Closing Tray...
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
