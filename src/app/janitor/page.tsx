import JanitorHeader from "@/components/janitor/JanitorHeader";
import KioskStatusOverview from "@/components/janitor/KioskStatusOverview";
import OverflowReportSummary from "@/components/janitor/OverflowReportSummary";
import UpcomingMaintenance from "@/components/janitor/UpcomingMaintenance";
import MaintenanceReminder from "@/components/janitor/MaintenanceReminder";

import overviewData from "@/mock/janitor/janitor-overview.json";

import type { JanitorOverview } from "@/types/JanitorOverview";

const overview = overviewData as JanitorOverview;

export default function JanitorOverviewPage() {
  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <JanitorHeader
        date={overview.date}
        janitorName={overview.janitor.name}
        workingHours={overview.shift.workingHours}
        assignedArea={overview.shift.assignedArea}
      />

      <div className="mt-8">
        <KioskStatusOverview kiosks={overview.kiosks} />
      </div>

      <div className="mt-6 grid items-start gap-6 xl:grid-cols-2">
        <OverflowReportSummary reports={overview.overflowReports} />

        <UpcomingMaintenance
          maintenance={overview.maintenanceForecast}
        />
      </div>

      <div className="mt-6">
        <MaintenanceReminder />
      </div>
    </main>
  );
}
