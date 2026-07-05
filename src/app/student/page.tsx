import StudentNavBar from "@/components/student/StudentNavBar";

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-black">
      <StudentNavBar />

      {/* Can remove this */}
      <div className="ml-4 mt-2 text-white">
        <p>TODO:</p>
        <ul>
          <li>Home page</li>
          <li>Report overflowing bin page</li>
          <li>Eco-Points portal + log activity</li>
        </ul>
      </div>
    </main>
  )
}
