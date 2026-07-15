import { Bell, CircleCheck, ShieldCheck } from "lucide-react";

export default function MaintenanceReminder() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#0BCB51]/20 bg-[#0BCB51]/10 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0BCB51]/15">
          <Bell
            size={22}
            className="text-[#0BCB51]"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#0BCB51]">
            Maintenance Reminder
          </h2>

          <p className="text-sm text-[#B2B2B2]">
            Smart maintenance is performed only when required.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4">
          <div className="flex items-center gap-3">
            <CircleCheck
              size={18}
              className="text-[#0BCB51]"
            />

            <p className="font-medium text-white">
              Condition-Based Maintenance
            </p>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
            Waste bags are replaced only when a recycling kiosk reaches a
            critical fill level or generates a maintenance alert.
          </p>
        </div>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={18}
              className="text-[#0BCB51]"
            />

            <p className="font-medium text-white">
              After Maintenance
            </p>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#B2B2B2]">
            Complete the assigned maintenance task and update its status so
            Facility Management receives the latest kiosk condition.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-[#0BCB51]/20 bg-[#0BCB51]/5 p-4">
        <p className="text-sm text-[#B2B2B2]">
          <span className="font-semibold text-[#0BCB51]">Note:</span>{" "}
          Routine inspections are still carried out according to the campus
          maintenance schedule, while waste bag replacements are automatically
          assigned based on each kiosk&apos;s fill level.
        </p>
      </div>
    </section>
  );
}
