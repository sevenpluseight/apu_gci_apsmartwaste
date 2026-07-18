import JanitorNavBar from "@/components/janitor/JanitorNavBar";

export default function JanitorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black">
      <JanitorNavBar />
      {children}
    </main>
  );
}
