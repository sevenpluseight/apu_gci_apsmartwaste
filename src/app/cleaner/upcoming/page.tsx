"use client";

import { useState } from "react";
import { ArrowRight, Clock3, MapPin, Package, TriangleAlert } from "lucide-react";

import upcomingTasksData from "@/mock/janitor/upcoming-tasks.json";

export default function UpcomingTasksPage() {
  const [tasks, setTasks] = useState(upcomingTasksData);

  const handleStartTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="mx-auto max-w-360 px-10 py-6 text-white">
      <section>
        <p className="text-sm text-[#B2B2B2]">Cleaner Task Management</p>

        <h1 className="mt-1 text-3xl font-semibold">Upcoming Tasks</h1>

        <p className="mt-2 text-sm text-[#B2B2B2]">
          View assigned cleaning tasks that are ready to be started.
        </p>
      </section>

      {/* Task Cards */}
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-[#0BCB51]">{task.id}</p>

                <h2 className="mt-2 text-xl font-semibold">
                  {task.building}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full animate-status-glow ${
                    task.priority === "High"
                      ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                      : "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.55)]"
                  }`}
                />

                <span
                  className={`text-xs font-medium ${
                    task.priority === "High"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {task.priority} Priority
                </span>
              </div>
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
                <span>Assigned at {task.time}</span>
              </div>
            </div>

            <button
              onClick={() => handleStartTask(task.id)}
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0BCB51] font-semibold text-black transition-all hover:bg-[#09B849] cursor-pointer"
            >
              Start Task
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </section>

      {/* No Tasks Message */}
      {tasks.length === 0 && (
        <div className="mt-10 rounded-2xl border border-[#2A2A2A] bg-[#191919] p-10 text-center">
          <p className="text-lg font-medium">No upcoming tasks</p>
          <p className="mt-2 text-sm text-[#B2B2B2]">
            All assigned tasks have been started or completed.
          </p>
        </div>
      )}
    </div>
  );
}
