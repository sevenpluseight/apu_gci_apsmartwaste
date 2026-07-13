import { Clock3, MapPin, UserRound } from "lucide-react";

interface JanitorHeaderProps {
  date: string;
  janitorName: string;
  workingHours: string;
  assignedArea: string;
}

export default function JanitorHeader({
  date,
  janitorName,
  workingHours,
  assignedArea,
}: JanitorHeaderProps) {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      {/* Left */}
      <div>
        <p className="text-sm text-[#8A8A8A]">{date}</p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Welcome back, {janitorName}
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-[#B2B2B2]">
          Monitor recycling kiosk conditions, respond to overflow reports,
          and complete maintenance tasks assigned during your shift.
        </p>
      </div>

      {/* Shift Summary */}
      <div className="flex flex-wrap gap-4">
        {/* Working Hours */}
        <div className="flex min-w-64 items-center gap-4 rounded-2xl border border-[#2A2A2A] bg-[#191919] px-5 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0BCB51]/10">
            <Clock3
              size={22}
              className="text-[#0BCB51]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-[#8A8A8A]">
              Working Hours
            </p>

            <p className="mt-1 font-medium text-white">
              {workingHours}
            </p>
          </div>
        </div>

        {/* Assigned Area */}
        <div className="flex min-w-64 items-center gap-4 rounded-2xl border border-[#2A2A2A] bg-[#191919] px-5 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0BCB51]/10">
            <MapPin
              size={22}
              className="text-[#0BCB51]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-[#8A8A8A]">
              Assigned Area
            </p>

            <p className="mt-1 font-medium text-white">
              {assignedArea}
            </p>
          </div>
        </div>

        {/* Staff */}
        {/* <div className="flex min-w-64 items-center gap-4 rounded-2xl border border-[#2A2A2A] bg-[#191919] px-5 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0BCB51]/10">
            <UserRound
              size={22}
              className="text-[#0BCB51]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-[#8A8A8A]">
              Staff
            </p>

            <p className="mt-1 font-medium text-white">
              {janitorName}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
