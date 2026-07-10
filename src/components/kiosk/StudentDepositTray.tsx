"use client";

import { useEffect, useState } from "react";
import { BottleWine } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDepositTray() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(openTimer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-95 w-90 rounded-3xl border border-[#D97706]/60 bg-[#3B2306] p-8 shadow-[0_0_45px_rgba(249,115,22,0.18)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316]">
          <BottleWine size={34} />
        </div>

        <p className="mt-5 text-center text-xl font-semibold text-white">
          Plastic Kiosk
        </p>

        <div className="absolute left-1/2 top-47.5 h-40 w-68 -translate-x-1/2 rounded-2xl border border-[#F97316]/60 bg-[#1E1204] shadow-[0_0_30px_rgba(249,115,22,0.25)]">
          <div className="absolute inset-4 rounded-xl border border-[#F97316]/20 bg-[#2A1805]" />

          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? 45 : 0 }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 rounded-xl border border-[#FB923C]/70 bg-[#D9D9D9] shadow-[0_0_25px_rgba(249,115,22,0.35)]"
          />

          <div className="pointer-events-none absolute inset-4 flex flex-col items-center justify-center rounded-xl">
            <BottleWine size={42} className="text-[#FF9012]" />

            <p className="mt-2 text-base font-semibold text-[#FF9012]">
              Deposit Tray
            </p>

            <p className="mt-1 text-xs text-[#FF9012]">Plastic only</p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute left-1/2 top-35 -translate-x-1/2 text-3xl text-[#F97316]"
        >
          ↓
        </motion.div>
      </div>
    </div>
  );
}
