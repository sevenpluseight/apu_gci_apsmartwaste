"use client";

import { Award, CalendarCheck2, CheckCircle2, Clock3, MapPin, Package, Sparkles, TriangleAlert } from "lucide-react";
import tasks from "@/mock/janitor/completed-tasks.json";

export default function CompletedTasksPage() {
  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">
      <section>
        <p className="text-sm text-[#B2B2B2]">
          Cleaner Task Management
        </p>

        <h1 className="mt-1 text-3xl font-semibold">
          Completed Tasks
        </h1>

        <p className="mt-2 text-sm text-[#B2B2B2]">
          Review all cleaning assignments completed during today&apos;s shift.
        </p>
      </section>

      {/* Summary */}
      <section className="mt-8 rounded-2xl border border-[#0BCB51]/30 bg-linear-to-r from-[#0BCB51]/15 to-[#0BCB51]/5 p-7">
        <div className="flex items-center gap-3">
          <Award className="text-[#0BCB51]" size={28} />

          <h2 className="text-2xl font-semibold">
            Great Work!
          </h2>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-[#B2B2B2]">
              Tasks Completed
            </p>

            <h3 className="mt-1 text-4xl font-bold">
              {tasks.length}
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#B2B2B2]">
              Completion Rate
            </p>

            <h3 className="mt-1 text-4xl font-bold">
              100%
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#B2B2B2]">
              Shift Status
            </p>

            <h3 className="mt-1 flex items-center gap-2 text-2xl font-semibold text-[#0BCB51]">
              <Sparkles size={22} />
              Excellent
            </h3>
          </div>
        </div>
      </section>

      {/* Completed Tasks */}
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-[#0BCB51]/20 bg-[#191919] p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-sm text-[#0BCB51]">
                  {task.id}
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  {task.building}
                </h2>
              </div>

              <CheckCircle2
                className="text-[#0BCB51]"
                size={30}
              />
            </div>

            <div className="mt-5 space-y-3 text-sm text-[#B2B2B2]">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  {task.floor} • {task.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TriangleAlert size={16} />
                <span>{task.issue}</span>
              </div>

              <div className="flex items-center gap-2">
                <Package size={16} />
                <span>
                  {task.category} • {task.bins} bin
                  {task.bins > 1 ? "s" : ""}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarCheck2 size={16} />
                <span>
                  Completed {task.completedTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                <span>
                  Duration: {task.duration}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[#0BCB51]/10 py-3 text-center">
              <span className="font-medium text-[#0BCB51]">
                ✅ Successfully Completed
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
