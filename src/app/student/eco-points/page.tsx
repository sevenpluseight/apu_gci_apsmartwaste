"use client";

import { useState } from "react";
// import { CircleCheck, Leaf, RecycleIcon, Star, Plus} from "lucide-react";
import { CircleCheck, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import studentData from "@/mock/student/student.json";

// Badge icon and color config matching Figma
// const badgeConfig: Record<string, { icon: React.ReactNode; bg: string }> = {
//   "Green Beginner": {
//     icon: <Leaf size={20} className="text-[#0BCB51]" />,
//     bg: "bg-[#0BCB51]/20",
//   },
//   "Recycling Support": {
//     icon: <RecycleIcon size={20} className="text-[#2983FF]" />,
//     bg: "bg-[#2983FF]/20",
//   },
//   "Eco Hero": {
//     icon: <Star size={20} className="text-red-400" />,
//     bg: "bg-red-400/20",
//   },
// };

export default function EcoPointsPortal() {
  // const { profile, badges, activityLogs, recyclingItems } = studentData;
  const { profile, activityLogs, recyclingItems } = studentData;

  // const earnedBadges = badges.filter((b) => b.earned);

  const [points, setPoints] = useState(profile.ecoPoints);
  const [logs, setLogs] = useState(activityLogs);
  const [activitiesDone, setActivitiesDone] = useState(activityLogs.length);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [logSubmitted, setLogSubmitted] = useState(false);

  const selectedItemData = recyclingItems.find((item) => item.type === selectedItem);
  const estimatedPoints = selectedItemData
    ? selectedItemData.points * (parseInt(quantity) || 0)
    : 0;

  function handleLogActivity(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedItem || !quantity || parseInt(quantity) <= 0) return;

    const earned = estimatedPoints;
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setPoints((prev) => prev + earned);
    setActivitiesDone((prev) => prev + 1);
    setLogs((prev) => [
      {
        id: prev.length + 1,
        action: `Recycled ${selectedItem}`,
        points: earned,
        timestamp: `Today, ${timeStr}`,
      },
      ...prev,
    ]);

    setLogSubmitted(true);
    setTimeout(() => {
      setLogSubmitted(false);
      setDialogOpen(false);
      setSelectedItem("");
      setQuantity("");
    }, 1500);
  }

  return (
    <div className="mx-auto max-w-360 px-10 py-3 text-white">

      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Eco-Points Portal</h1>
          <p className="mt-1 text-sm text-[#B2B2B2]">
            Log your eco-friendly actions and earn sustainability badges.
          </p>
        </div>
        {/* <Button
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
        >
          <Plus size={16} />
          Log Activity
        </Button> */}
        <Button
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
        >
          <ArrowRightLeft size={16} />
          Convert to APCard Balance
        </Button>
      </div>

      {/* Stats Banner — solid bright green matching Figma */}
      <div className="mb-5 rounded-xl bg-[#0BCB51] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-black/70">Your Eco Points</p>
            <p className="text-5xl font-bold text-black">
              {points.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-black/70">
              {activitiesDone} activities completed.
            </p>
          </div>
          <div className="flex gap-12">
            {/* <div className="text-center">
              <p className="text-3xl font-bold text-black">{earnedBadges.length}</p>
              <p className="text-xs text-black/70">Badges Earned</p>
            </div> */}
            <div className="text-center">
              <p className="text-3xl font-bold text-black">{activitiesDone}</p>
              <p className="text-xs text-black/70">Activities Done</p>
            </div>
            {/* <div className="text-center">
              <p className="text-3xl font-bold text-black">{profile.weekStreak}</p>
              <p className="text-xs text-black/70">Week Streak</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Badges — only earned, with colored icon squares
      <div className="mb-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          <CircleCheck size={16} className="text-[#0BCB51]" />
          Your Badges
        </div>
        <div className="grid grid-cols-3 gap-4">
          {earnedBadges.map((badge) => {
            const config = badgeConfig[badge.name];
            return (
              <div
                key={badge.id}
                className="flex items-center gap-4 rounded-xl bg-[#191919] border border-[#525252] px-5 py-5"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${config?.bg ?? "bg-[#2A2A2A]"}`}>
                  {config?.icon ?? <CircleCheck size={20} className="text-[#0BCB51]" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{badge.name}</p>
                  <p className="mt-0.5 text-xs text-[#B2B2B2]">{badge.description}</p>
                  {badge.earnedOn && (
                    <p className="mt-1 text-xs text-[#0BCB51]">
                      Earned on {badge.earnedOn}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Activity Logs */}
      <div className="rounded-xl bg-[#191919] border border-[#525252] px-4 py-4">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          Recent Activity Logs
        </div>
        <div 
          className="max-h-48 overflow-y-auto divide-y divide-[#2A2A2A] pr-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#525252 #191919",
          }}
        >
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <CircleCheck size={16} className="text-[#0BCB51]" />
                <span className="text-sm text-white">{log.action}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold text-[#0BCB51]">+{log.points} Eco Points</span>
                <span className="text-[#B2B2B2]">•</span>
                <span className="text-[#B2B2B2]">{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Log Activity Dialog — 2 column layout matching Figma */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="border-[#525252] bg-[#191919] text-white sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white">
              Log Recycling Activity
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleLogActivity} className="mt-2 space-y-5">

            {/* Item Type + Quantity side by side — matches Figma */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  Item Type <span className="text-red-400">*</span>
                </label>
                <Select
                  value={selectedItem}
                  onValueChange={(value) => setSelectedItem(value ?? "")}
                  required
                >
                  <SelectTrigger className="border-[#525252] bg-[#111111] text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="border-[#525252] bg-[#191919] text-white">
                    {recyclingItems.map((item) => (
                      <SelectItem key={item.type} value={item.type} className="focus:bg-[#2A2A2A]">
                        {item.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  Quantity <span className="text-red-400">*</span>
                </label>
                <Input
                  type="number"
                  min={1}
                  placeholder="e.g., 2"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  className="border-[#525252] bg-[#111111] text-white placeholder:text-[#525252]"
                />
              </div>
            </div>

            {/* Points preview */}
            <p className="text-sm text-[#B2B2B2]">
              You&apos;ll Earn{" "}
              <span className="font-bold text-white">
                +{estimatedPoints > 0 ? estimatedPoints : "XX"} Eco Points
              </span>
            </p>

            {/* Success */}
            {logSubmitted && (
              <div className="flex items-center gap-2 rounded-lg bg-[#0BCB51]/15 border border-[#0BCB51]/30 px-4 py-3 text-sm text-[#0BCB51]">
                <CircleCheck size={16} />
                Activity logged successfully!
              </div>
            )}

            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
            >
              ➤ Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
