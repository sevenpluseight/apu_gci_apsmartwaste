"use client";

import { useState } from "react";
import { CircleCheck, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import studentData from "@/mock/student/student.json";

export default function EcoPointsPortal() {
  const { profile, activityLogs } = studentData;

  const [points, setPoints] = useState(profile.ecoPoints);
  const [logs, setLogs] = useState(activityLogs);
  // const [activitiesDone, setActivitiesDone] = useState(activityLogs.length);
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  
  // UI States for the new UX Flow
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Count only positive point transactions that happened "Today"
  const dropsTodayCount = logs.filter(
    (log) => log.timestamp.includes("Today") && log.points > 0
  ).length;

  function handleConvert(e: React.FormEvent) {
    e.preventDefault();
    const convertAmount = parseInt(quantity) || 0;
    
    // Validation
    if (convertAmount <= 0) return;
    if (convertAmount > points) {
      setErrorMsg("Insufficient Eco-Points.");
      return;
    }
    if (convertAmount % 100 !== 0) {
      setErrorMsg("Must convert in multiples of 100.");
      return;
    }

    // Start Processing State
    setErrorMsg("");
    setIsProcessing(true);

    // Simulate API Processing (1.5 seconds)
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // Update Points and Logs
      setPoints((prev) => prev - convertAmount);
      // setActivitiesDone((prev) => prev + 1);
      setPoints((prev) => prev - convertAmount);
      setLogs((prev) => [
        {
          id: prev.length + 1,
          action: "Converted to APCard Balance",
          points: -convertAmount, // Negative value for deduction
          timestamp: `Today, ${timeStr}`,
        },
        ...prev,
      ]);

      // Show Success Message
      setShowSuccess(true);
      
      // Wait for user to see the success message, then close modal
      setTimeout(() => {
        setShowSuccess(false);
        setIsProcessing(false);
        setDialogOpen(false);
        setQuantity("");
      }, 1500);

    }, 1500);
  }

  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">

      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Eco-Points Portal</h1>
          <p className="mt-1 text-sm text-[#B2B2B2]">
            Monitor your Smart Kiosk recycling history and manage your Eco-Points.
          </p>
        </div>
        <Button
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
        >
          <ArrowRightLeft size={16} />
          Convert to APCard Balance
        </Button>
      </div>

      {/* Stats Banner */}
      <div className="mb-5 rounded-xl bg-[#0BCB51] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-black/70">Your Eco Points</p>
            <p className="text-5xl font-bold text-black">
              {points.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-black/70">
              {dropsTodayCount} recycling drops today.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">{dropsTodayCount}</p>
              <p className="text-xs text-black/70 uppercase font-semibold tracking-wider">Drops Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="rounded-xl bg-[#191919] border border-[#525252] px-4 py-4">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          Recent Activity Logs
        </div>
        <div 
          className="max-h-75 overflow-y-auto divide-y divide-[#2A2A2A] pr-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#525252 #191919",
          }}
        >
          {logs.map((log) => {
            const isDeduction = log.points < 0;
            return (
              <div
                key={log.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <CircleCheck size={16} className={isDeduction ? "text-red-400" : "text-[#0BCB51]"} />
                  <span className="text-sm text-white">{log.action}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className={`font-semibold ${isDeduction ? "text-red-400" : "text-[#0BCB51]"}`}>
                    {isDeduction ? "" : "+"}{log.points} Eco Points
                  </span>
                  <span className="text-[#B2B2B2]">•</span>
                  <span className="text-[#B2B2B2]">{log.timestamp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Convert to APCard Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="border-[#525252] bg-[#191919] text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white text-center">
              Convert to APCard Balance
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleConvert} className="mt-2 space-y-5">
            
            <div className="rounded-xl bg-[#111111] p-5 text-center border border-[#2A2A2A]">
              <p className="text-sm text-[#B2B2B2]">Available Eco-Points</p>
              <p className="text-5xl font-bold text-[#0BCB51] mt-2">{points.toLocaleString()}</p>
              <p className="text-sm text-[#525252] mt-3">Conversion Rate: 100 Points = RM 1.00</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Points to Convert
              </label>
              <Input
                type="number"
                min={100}
                step={100}
                placeholder="Minimum 100 points"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  setErrorMsg("");
                }}
                disabled={isProcessing}
                required
                style={{ colorScheme: "dark" }}
                className="border-[#525252] bg-[#111111] text-white placeholder:text-[#525252] h-12"
              />
              <div className="flex justify-between mt-1 items-start">
                <span className="text-xs text-red-400 font-medium">{errorMsg}</span>
                <p className="text-sm text-[#B2B2B2]">
                  You will receive: <span className="font-bold text-white tracking-wide">RM {((parseInt(quantity) || 0) / 100).toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {showSuccess && (
                <div className="flex items-center justify-center gap-2 rounded-lg bg-[#0BCB51]/10 border border-[#0BCB51]/30 px-4 py-4 text-sm text-[#0BCB51] font-medium">
                  <CircleCheck size={18} />
                  Successfully transferred to APCard!
                </div>
              )}

              <Button
                type="submit"
                disabled={isProcessing || showSuccess || !quantity}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 disabled:opacity-50 h-12 text-base transition-all"
              >
                {isProcessing ? "Processing..." : "Confirm Transfer"}
              </Button>
            </div>

          </form>
        </DialogContent>
      </Dialog> 
    </div>
  );
}