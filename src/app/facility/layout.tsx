import FacilityNavBar from "@/components/facility/FacilityNavBar";

export default function FacilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black">
      <FacilityNavBar />
      {children}
    </main>
  );
}
