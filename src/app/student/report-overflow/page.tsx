"use client";

import { useState, useRef } from "react";
import { CircleCheck, Camera, FileText } from "lucide-react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [myReports, setMyReports] = useState(reports);
  const [form, setForm] = useState({
    building: "",
    floor: "",
    binLocation: "",
    wasteCategory: "",
    issueType: "",
    description: "",
  });

  // FIX: Reliable local timezone "YYYY-MM-DD" generation for Today and Yesterday
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  const reportsToday = myReports.filter((report) => report.submittedAt === todayStr).length;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPhotoName(file.name);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newReport = {
      id: `RPT-00${myReports.length + 1}`,
      building: form.building,
      floor: form.floor,
      binLocation: form.binLocation,
      wasteCategory: form.wasteCategory,
      issueType: form.issueType,
      description: form.description,
      status: "Pending",
      submittedAt: todayStr, // FIX: Uses local date instead of UTC
    };
    setMyReports((prev) => [newReport, ...prev]);
    setSubmitted(true);
    setForm({
      building: "",
      floor: "",
      binLocation: "",
      wasteCategory: "",
      issueType: "",
      description: "",
    });
    setPhotoName(null);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Report Overflowing Bin</h1>
        <p className="mt-1 text-sm text-[#B2B2B2]">
          Help keep APU campus clean. Reports are reviewed within 3 hours.
        </p>
      </div>

      {/* MOVED SUCCESS MESSAGE (Outside the form, acts as a page alert) */}
      {submitted && (
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#0BCB51]/15 border border-[#0BCB51]/30 px-5 py-4 text-sm font-medium text-[#0BCB51] animate-in fade-in slide-in-from-top-2 duration-300">
          <CircleCheck size={18} className="shrink-0" />
          Report submitted successfully! Our team will review it within 3 hours.
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-xl bg-[#191919] border border-[#525252] px-8 py-7 h-fit">
          <h2 className="mb-1 text-base font-semibold text-white">New Waste Report</h2>
          <p className="mb-6 text-sm text-[#B2B2B2]">Fill in the details of the waste issues you saw.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Building / Block <span className="text-red-400">*</span>
              </label>
              <Select value={form.building} onValueChange={(v) => setForm({ ...form, building: v ?? ""})} required>
                <SelectTrigger className="border-[#525252] bg-[#111111] text-white">
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent className="border-[#525252] bg-[#191919] text-white">
                  {buildings.map((b) => (
                    <SelectItem key={b} value={b} className="cursor-pointer focus:bg-[#0BCB51] focus:text-black data-highlighted:bg-[#0BCB51] data-highlighted:text-black"> 
                      {b} 
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Floor <span className="text-red-400">*</span>
              </label>
              <Input
                placeholder="e.g., Level 3"
                value={form.floor}
                onChange={(e) => setForm({ ...form, floor: e.target.value })}
                required
                className="border-[#525252] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Bin Location <span className="text-red-400">*</span>
              </label>
              <Input
                placeholder="e.g., Near staircase Block E"
                value={form.binLocation}
                onChange={(e) => setForm({ ...form, binLocation: e.target.value })}
                required
                className="border-[#525252] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Waste Category <span className="text-red-400">*</span>
              </label>
              <Select value={form.wasteCategory} onValueChange={(v) => setForm({ ...form, wasteCategory: v ?? ""})} required>
                <SelectTrigger className="border-[#525252] bg-[#111111] text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="border-[#525252] bg-[#191919] text-white">
                  {wasteCategories.map((c) => (
                    <SelectItem key={c} value={c} className="cursor-pointer focus:bg-[#0BCB51] focus:text-black data-highlighted:bg-[#0BCB51] data-highlighted:text-black"> 
                      {c} 
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Issue Type <span className="text-red-400">*</span>
              </label>
              <Select value={form.issueType} onValueChange={(v) => setForm({ ...form, issueType: v ?? ""})} required>
                <SelectTrigger className="border-[#525252] bg-[#111111] text-white">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent className="border-[#525252] bg-[#191919] text-white">
                  {issueTypes.map((t) => (
                    <SelectItem key={t} value={t} className="cursor-pointer focus:bg-[#0BCB51] focus:text-black data-highlighted:bg-[#0BCB51] data-highlighted:text-black"> 
                      {t} 
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Description <span className="text-red-400">*</span>
              </label>
              <Textarea
                placeholder="Described the issue in detail - what you see, how long it has been there...."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
                rows={4}
                className="resize-none border-[#525252] bg-[#111111] text-white placeholder:text-[#525252]"
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Photo Upload <span className="text-[#B2B2B2]">(Optional)</span>
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#525252] bg-[#111111] py-8 transition-colors hover:border-[#0BCB51]/60"
              >
                <Camera size={24} className="text-[#B2B2B2]" />
                <p className="text-sm text-[#B2B2B2] text-center px-4">
                  {photoName ? photoName : "Click or drag to upload photo"}
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

          </div>

          {submitted && (
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#0BCB51]/15 border border-[#0BCB51]/30 px-4 py-3 text-sm text-[#0BCB51]">
              <CircleCheck size={16} className="shrink-0" />
              Report submitted successfully! Our team will review it within 3 hours.
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              className="flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-[#0BCB51] px-8 font-semibold text-black hover:bg-[#0BCB51]/90 cursor-pointer"
            >
              ➤ Submit
            </Button>
          </div>
        </form>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Quick Tips */}
          <div className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-5">
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Tips</h3>
            <ul className="space-y-3 text-sm text-[#B2B2B2]">
              <li className="flex items-start gap-2">
                <span>📌</span>
                <span>Be specific about the bin</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕛</span>
                <span>Peak hours: 12pm-2pm (Cafeteria)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📸</span>
                <span>Photos help staff locate issues faster</span>
              </li>
            </ul>
          </div>

          {/* Your Impact */}
          <div className="rounded-xl bg-[#E6FFF0] px-6 py-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0BCB51]">
              <CircleCheck size={16} />
              Community Impact
            </div>
            <p className="text-sm text-[#166534]">
              <span className="font-bold">{reportsToday} reports</span> today! The campus cleaners secretly owe you a high five. ✋
            </p>
          </div>

          {/* My Recent Reports */}
          <div className="rounded-xl bg-[#191919] border border-[#525252] px-6 py-5">
            <h3 className="mb-4 text-sm font-semibold text-white">My Recent Reports</h3>
            {myReports.length === 0 ? (
              <p className="text-sm text-[#B2B2B2]">No reports submitted yet.</p>
            ) : (
              <div 
                className="space-y-3 max-h-75 overflow-y-auto pr-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#525252 #191919",
                }}
              >
                {myReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 rounded-lg bg-[#111111] px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <FileText size={14} className="mt-0.5 shrink-0 text-[#B2B2B2]" />
                      <div>
                        <p className="text-xs font-medium text-white">
                          {report.building} — {report.floor}
                        </p>
                        <p className="text-xs text-[#B2B2B2]">{report.issueType}</p>
                        <p className="mt-0.5 text-xs text-[#525252] font-semibold">
                          {report.submittedAt === todayStr 
                            ? "Today" 
                            : report.submittedAt === yesterdayStr 
                              ? "Yesterday" 
                              : report.submittedAt}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 w-fit rounded-full px-2 py-0.5 text-xs font-medium ${
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}