import StudentNavBar from "@/components/student/StudentNavBar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex flex-col bg-black">
      <StudentNavBar />
      <div
        className="flex-1 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#525252 #000000",
        }}
      >
        {children}
      </div>
    </main>
  );
}