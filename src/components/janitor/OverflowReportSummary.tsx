// import Link from "next/link";
import { AlertTriangle, ArrowRight, Clock3, MapPin } from "lucide-react";
import type { OverflowReport } from "@/types/JanitorOverview";

interface OverflowReportSummaryProps {
  reports: OverflowReport[];
}

const priorityStyles = {
  High: "bg-red-500/10 text-red-400",
  Medium: "bg-orange-500/10 text-orange-400",
  Low: "bg-[#0BCB51]/10 text-[#0BCB51]",
};

const statusStyles = {
  Assigned: "border-[#2A2A2A] bg-[#191919] text-[#B2B2B2]",
  "In Progress":
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
};

export default function OverflowReportSummary({
  reports,
}: OverflowReportSummaryProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#191919] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Assigned Overflow Reports
          </h2>

          <p className="mt-1 text-sm text-[#B2B2B2]">
            APSpace User-submitted bin reports currently assigned to you.
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
          {reports.length} Pending
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {reports.length > 0 ? (
          reports.slice(0, 3).map((report) => (
            <article
              key={report.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-[#2A2A2A] bg-[#111111] p-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <AlertTriangle size={21} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-medium text-white">
                      {report.title}
                    </p>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        priorityStyles[report.priority]
                      }`}
                    >
                      {report.priority}
                    </span>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                        statusStyles[report.status]
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#8A8A8A]">
                    <MapPin size={13} />
                    <span>{report.location}</span>

                    <span>•</span>

                    <Clock3 size={13} />
                    <span>{report.reportedAt}</span>
                  </div>
                </div>
              </div>

              {/* <Link
                href={report.href}
                className="flex shrink-0 items-center gap-2 rounded-lg border border-[#2A2A2A] px-3 py-2 text-xs text-[#B2B2B2] transition-all duration-300 hover:border-[#0BCB51] hover:bg-[#0BCB51]/10 hover:text-white"
              >
                View
                <ArrowRight size={14} />
              </Link> */}
            </article>
          ))
        ) : (
          <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-8 text-center">
            <p className="text-sm font-medium text-white">
              No assigned overflow reports
            </p>

            <p className="mt-2 text-xs text-[#8A8A8A]">
              New user reports will appear here once assigned.
            </p>
          </div>
        )}
      </div>

      {/* {reports.length > 0 && (
        <Link
          href="/janitor/reports"
          className="mt-5 flex items-center gap-2 text-sm font-medium text-[#0BCB51] transition-colors hover:text-white"
        >
          View All Reports
          <ArrowRight size={16} />
        </Link>
      )} */}
    </section>
  );
}
