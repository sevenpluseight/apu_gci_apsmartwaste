"use client";

import { useState } from "react";
import { CircleCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import studentData from "@/mock/student/student.json";

export default function ReportOverflowPage() {
  const { buildings, wasteCategories, issueTypes, reports } = studentData;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    building: "",
    floor: "",
    binLocation: "",
    wasteCategory: "",
    issueType: "",
    description: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      building: "",
      floor: "",
      binLocation: "",
      wasteCategory: "",
      issueType: "",
      description: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="mx-auto max-w-360 px-10 py-10 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Report Overflowing Bin</h1>
        <p className="mt-1 text-sm text-[#B2B2B2]">
          Help keep APU campus clean. Reports are reviewed within 3 hours.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-8">

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-xl bg-[#191919] border border-[#2A2A2A] px-8 py-7">
          <h2 className="mb-5 text-base font-semibold text-white">New Waste Report</h2>
          <p className="mb-6 text-sm text-[#B2B2B2]">Fill in the details of the waste issues you saw.</p>

          <div className="grid grid-cols-2 gap-5">

            {/* Building */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Building / Block <span className="text-red-400">*</span>
              </label>
              <Select
                value={form.building}
                onValueChange={(v) => setForm({ ...form, building: v })}
                required
              >
                <SelectTrigger className="border-[#2A2A2A] bg-[#111111] text-white">
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent className="border-[#2A2A2A] bg-[#191919] text-white">
                  {buildings.map((b) => (
                    <SelectItem key={b} value={b} className="focus:bg-[#2A2A2A]">
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Floor */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Floor <span className="text-red-400">*</span>
              </label>
              <Input
                placeholder="e.g. Level 2"
                value={form.floor}
                onChange={(e) => setForm({ ...form, floor: e.target.value })}
                required
                className="border-[#2A2A2A] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

            {/* Bin Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Bin Location <span className="text-red-400">*</span>
              </label>
              <Input
                placeholder="e.g. Near Lecture Hall A201"
                value={form.binLocation}
                onChange={(e) => setForm({ ...form, binLocation: e.target.value })}
                required
                className="border-[#2A2A2A] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

            {/* Waste Category */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Waste Category <span className="text-red-400">*</span>
              </label>
              <Select
                value={form.wasteCategory}
                onValueChange={(v) => setForm({ ...form, wasteCategory: v })}
                required
              >
                <SelectTrigger className="border-[#2A2A2A] bg-[#111111] text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="border-[#2A2A2A] bg-[#191919] text-white">
                  {wasteCategories.map((c) => (
                    <SelectItem key={c} value={c} className="focus:bg-[#2A2A2A]">
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Issue Type */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Issue Type <span className="text-red-400">*</span>
              </label>
              <Select
                value={form.issueType}
                onValueChange={(v) => setForm({ ...form, issueType: v })}
                required
              >
                <SelectTrigger className="border-[#2A2A2A] bg-[#111111] text-white">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent className="border-[#2A2A2A] bg-[#191919] text-white">
                  {issueTypes.map((t) => (
                    <SelectItem key={t} value={t} className="focus:bg-[#2A2A2A]">
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Description <span className="text-red-400">*</span>
              </label>
              <Textarea
                placeholder="Describe the issue in detail — what you see, how long it has been there..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
                rows={4}
                className="resize-none border-[#2A2A2A] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

          </div>

          {/* Success message */}
          {submitted && (
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#0BCB51]/15 border border-[#0BCB51]/30 px-4 py-3 text-sm text-[#0BCB51]">
              <CircleCheck size={16} />
              Report submitted successfully! Our team will review it within 3 hours.
            </div>
          )}

          <Button
            type="submit"
            className="mt-6 h-11 w-full rounded-xl bg-[#0BCB51] font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
          >
            Submit Report
          </Button>
        </form>

        {/* Right column */}
        <div className="flex flex-col gap-5">

          {/* Quick Tips */}
          <div className="rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-5">
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Tips</h3>
            <ul className="space-y-3 text-sm text-[#B2B2B2]">
              <li className="flex items-start gap-2">
                <span>📌</span>
                <span>Be specific about the bin</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕛</span>
                <span>Peak hours: 12pm–2pm (Cafeteria)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📸</span>
                <span>Detailed descriptions help staff locate issues faster</span>
              </li>
            </ul>
          </div>

          {/* Your Impact */}
          <div className="rounded-xl bg-[#0BCB51]/10 border border-[#0BCB51]/30 px-6 py-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0BCB51]">
              <CircleCheck size={16} />
              Your Impact
            </div>
            <p className="text-sm text-[#B2B2B2]">
              You&apos;ve submitted{" "}
              <span className="font-semibold text-white">{reports.length} reports</span>{" "}
              this semester! Keep up the great work :)
            </p>
          </div>

          {/* Recent Reports */}
          <div className="rounded-xl bg-[#191919] border border-[#2A2A2A] px-6 py-5">
            <h3 className="mb-4 text-sm font-semibold text-white">My Recent Reports</h3>
            <div className="space-y-3">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-start justify-between gap-3 rounded-lg bg-[#111111] px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <FileText size={14} className="mt-0.5 shrink-0 text-[#B2B2B2]" />
                    <div>
                      <p className="text-xs font-medium text-white">
                        {report.building} — {report.floor}
                      </p>
                      <p className="text-xs text-[#B2B2B2]">{report.issueType}</p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      report.status === "Resolved"
                        ? "bg-[#0BCB51]/15 text-[#0BCB51]"
                        : report.status === "In Progress"
                        ? "bg-yellow-500/15 text-yellow-400"
                        : "bg-[#525252]/30 text-[#B2B2B2]"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
