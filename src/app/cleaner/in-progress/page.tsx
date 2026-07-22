"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, MapPin, Package, TriangleAlert } from "lucide-react";
import tasksData from "@/mock/janitor/in-progress-tasks.json";

export default function InProgressTasksPage() {
  const [tasks, setTasks] = useState(tasksData);

  const completeTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">
      <section>
        <p className="text-sm text-[#B2B2B2]">
          Cleaner Task Management
        </p>

        <h1 className="mt-1 text-3xl font-semibold">
          In Progress
        </h1>

        <p className="mt-2 text-sm text-[#B2B2B2]">
          Continue and complete your active cleaning assignments.
        </p>
      </section>

      {/* Task Cards */ }
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-yellow-500/30 bg-[#191919] p-6"
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

              <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
                In Progress
              </span>
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
                <Clock3 size={16} />
                <span>
                  Started {task.startedTime}
                </span>
              </div>

              <div className="rounded-xl bg-[#111111] px-4 py-3">
                <p className="text-xs text-[#B2B2B2]">
                  Elapsed Time
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  {task.elapsed}
                </p>
              </div>
            </div>

            <button
              onClick={() => completeTask(task.id)}
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black transition-all hover:bg-[#09B849] cursor-pointer"
            >
              Complete Task
              <CheckCircle2 size={18} />
            </button>
          </div>
        ))}
      </section>

      {/* No Tasks Message */}
      {tasks.length === 0 && (
        <div className="mt-10 rounded-2xl border border-[#2A2A2A] bg-[#191919] p-10 text-center">
          <CheckCircle2
            className="mx-auto text-[#0BCB51]"
            size={42}
          />

          <h2 className="mt-4 text-xl font-semibold">
            No Active Tasks
          </h2>

          <p className="mt-2 text-[#B2B2B2]">
            Great job! You have completed all tasks currently in progress.
          </p>
        </div>
      )}
    </div>
  );
}
