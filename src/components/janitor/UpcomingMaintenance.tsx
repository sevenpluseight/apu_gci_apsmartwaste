import { AlertCircle, CalendarClock, CheckCircle2 } from "lucide-react";
import type { MaintenanceForecast } from "@/types/JanitorOverview";

interface UpcomingMaintenanceProps {
  maintenance: MaintenanceForecast[];
}

export default function UpcomingMaintenance({
  maintenance,
}: UpcomingMaintenanceProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#191919] p-6">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Predicted Maintenance
        </h2>

        <p className="mt-1 text-sm text-[#B2B2B2]">
          Waste bag replacements are automatically predicted based on kiosk fill
          levels.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {maintenance.map((item) => {
          const isUrgent = item.status === "urgent";
          const isUpcoming = item.status === "upcoming";

          return (
            <article
              key={item.id}
              className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      isUrgent
                        ? "bg-red-500/10 text-red-400"
                        : isUpcoming
                          ? "bg-orange-500/10 text-orange-400"
                          : "bg-[#0BCB51]/10 text-[#0BCB51]"
                    }`}
                  >
                    {isUrgent ? (
                      <AlertCircle size={21} />
                    ) : isUpcoming ? (
                      <CalendarClock size={21} />
                    ) : (
                      <CheckCircle2 size={21} />
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {item.kiosk}
                    </h3>

                    <p className="mt-1 text-sm text-[#8A8A8A]">
                      {item.location}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isUrgent
                      ? "bg-red-500/10 text-red-400"
                      : isUpcoming
                        ? "bg-orange-500/10 text-orange-400"
                        : "bg-[#0BCB51]/10 text-[#0BCB51]"
                  }`}
                >
                  {item.fillLevel}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#2A2A2A]">
                <div
                  className={`h-full rounded-full ${
                    isUrgent
                      ? "bg-red-500"
                      : isUpcoming
                        ? "bg-orange-400"
                        : "bg-[#0BCB51]"
                  }`}
                  style={{
                    width: `${item.fillLevel}%`,
                  }}
                />
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#B2B2B2]">
                    {item.message}
                  </p>

                  <p className="mt-1 text-xs text-[#8A8A8A]">
                    {item.estimatedTime}
                  </p>
                </div>

                <span
                  className={`text-sm font-semibold ${
                    isUrgent
                      ? "text-red-400"
                      : isUpcoming
                        ? "text-orange-400"
                        : "text-[#0BCB51]"
                  }`}
                >
                  {isUrgent
                    ? "Replace Now"
                    : isUpcoming
                      ? "Upcoming"
                      : "Normal"}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-[#0BCB51]/20 bg-[#0BCB51]/10 p-4">
        <p className="text-xs leading-6 text-[#B2B2B2]">
          APSmartWaste predicts waste bag replacement based on each kiosk&apos;s
          fill level. Cleaners receive assignments only when maintenance is
          required, reducing unnecessary inspections.
        </p>
      </div>
    </section>
  );
}
