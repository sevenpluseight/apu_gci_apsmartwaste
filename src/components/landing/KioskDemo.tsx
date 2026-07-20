export default function KioskDemo() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            APSmartWaste Kiosk Demonstration
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#B2B2B2]">
            Watch the complete APSmartWaste workflow including the APSpace User
            recycling experience at the smart kiosk, automated waste validation,
            Eco-Points rewards and the cleaner maintenance process triggered by
            kiosk bin alerts and overflowing waste reports.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#191919] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <video
            className="w-full rounded-2xl"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
          >
            <source
              src="/videos/APU_GCI_Kiosk_Demo.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-5">
            <p className="text-sm font-semibold text-[#0BCB51]">
              APSPace User Journey
            </p>
            <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
              Authentication, recyclable deposit, validation and Eco-Points
              rewards.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-5">
            <p className="text-sm font-semibold text-[#0BCB51]">
              Smart Detection
            </p>
            <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
              Automatic item recognition and material validation for plastic
              recyclables.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-5">
            <p className="text-sm font-semibold text-[#0BCB51]">
              Kiosk Monitoring
            </p>
            <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
              Real-time fill level monitoring with automatic maintenance alerts.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#191919] p-5">
            <p className="text-sm font-semibold text-[#0BCB51]">
              Cleaner Workflow
            </p>
            <p className="mt-2 text-sm leading-6 text-[#B2B2B2]">
              Assigned maintenance tasks, compartment access and waste bag
              replacement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
