import StudentNavBar from "@/components/student/StudentNavBar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black">
      <StudentNavBar />
      {children}
    </main>
  );
}
