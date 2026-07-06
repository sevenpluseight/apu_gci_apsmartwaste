import { Activity, ArrowRight, CheckCircle2, Clock3, ClipboardList, Package } from "lucide-react";
import overview from "@/mock/janitor/janitor-overview.json";

export default function JanitorOverviewPage() {
  return (
    <div className="mx-auto max-w-360 px-10 py-5 text-white">
      <section>
        <p className="text-sm text-[#B2B2B2]">{overview.date}</p>

        <h1 className="mt-1 text-3xl font-semibold">
          Welcome back, {overview.janitor.name}
        </h1>

        <p className="mt-1 text-sm text-[#B2B2B2]">
          Here&apos;s an overview of today&apos;s cleaning assignments.
        </p>
      </section>

      {/* Summary Cards */ }
      <section className="mt-6 grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-6">
          <div className="flex items-center gap-3">
            <Activity className="text-[#0BCB51]" size={22} />
            <h2 className="text-xl font-semibold">Today&apos;s Progress</h2>
          </div>

          {/* Progress Overview */ }
          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-5xl font-bold">
                {overview.summary.progressPercentage}%
              </p>

              <p className="mt-2 text-sm text-[#B2B2B2]">
                {overview.summary.completedTasks} of{" "}
                {overview.summary.totalTasks} tasks completed
              </p>
            </div>

            {/* Remaining Bins */ }
            <div className="text-right">
              <p className="text-sm text-[#B2B2B2]">Remaining Bins</p>

              <p className="mt-1 text-4xl font-semibold">
                {overview.summary.remainingBins}
              </p>
            </div>
          </div>

          {/* Progress Bar */ }
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#2A2A2A]">
            <div
              className="h-full rounded-full bg-[#0BCB51]"
              style={{ width: `${overview.summary.progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Shift Overview */ }
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-6">
          <div className="flex items-center gap-3">
            <ClipboardList className="text-[#0BCB51]" size={22} />
            <h2 className="text-xl font-semibold">Today&apos;s Shift</h2>
          </div>

          {/* Shift Details */ }
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-[#B2B2B2]">Working Hours</p>
              <p className="mt-1 text-base font-medium">
                {overview.shift.workingHours}
              </p>
            </div>

            {/* Assigned Blocks */ }
            <div>
              <p className="text-sm text-[#B2B2B2]">Assigned Blocks</p>
              <p className="mt-1 text-base font-medium">
                {overview.shift.assignedBlocks.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Task Status Cards */ }
      <section className="mt-5 grid gap-5 md:grid-cols-3">
        {/* In Progress Tasks */ }
        <div className="rounded-2xl border border-yellow-500/40 bg-[#191919] p-5">
          <Clock3 className="text-yellow-400" size={22} />

          <h3 className="mt-4 text-3xl font-bold">
            {overview.taskStatus.inProgress}
          </h3>

          <p className="mt-1 text-lg font-medium">In Progress</p>

          <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
            Continue the cleaning tasks you&apos;ve already started.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm text-[#0BCB51] transition-colors hover:text-white cursor-pointer">
            Continue <ArrowRight size={16} />
          </button>
        </div>

        {/* Upcoming Tasks */ }
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-5">
          <Package className="text-[#0BCB51]" size={22} />

          <h3 className="mt-4 text-3xl font-bold">
            {overview.taskStatus.upcoming}
          </h3>

          <p className="mt-1 text-lg font-medium">Upcoming Tasks</p>

          <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
            View newly assigned tasks waiting to be started.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm text-[#0BCB51] transition-colors hover:text-white cursor-pointer">
            View Tasks <ArrowRight size={16} />
          </button>
        </div>

        {/* Completed Tasks */ }
        <div className="rounded-2xl border border-[#0BCB51]/30 bg-[#191919] p-5">
          <CheckCircle2 className="text-[#0BCB51]" size={22} />

          <h3 className="mt-4 text-3xl font-bold">
            {overview.taskStatus.completed}
          </h3>

          <p className="mt-1 text-lg font-medium">Completed</p>

          <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
            Review the tasks you&apos;ve successfully completed today.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm text-[#0BCB51] transition-colors hover:text-white cursor-pointer">
            View History <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Shift Reminder */ }
      <section className="mt-5 rounded-2xl border border-[#0BCB51]/20 bg-[#0BCB51]/10 p-5">
        <h2 className="text-lg font-semibold text-[#0BCB51]">
          Shift Reminder
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
          Update task status regularly so Facility Management can monitor
          cleaning progress efficiently.
        </p>
      </section>
    </div>
  );
}
