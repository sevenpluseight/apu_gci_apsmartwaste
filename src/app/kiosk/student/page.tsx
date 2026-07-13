import KioskLayout from "@/components/kiosk/KioskLayout";
import CardReader from "@/components/kiosk/CardReader";

export default function StudentKioskPage() {
  return (
    <KioskLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold text-white">Welcome</h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-[#B2B2B2]">
          Thank you for supporting a greener campus. Please insert your APCard
          to begin the recycling process.
        </p>

        <CardReader />
      </div>
    </KioskLayout>
  );
}
