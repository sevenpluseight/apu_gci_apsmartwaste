import FacilityNavBar from "@/components/facility/FacilityNavBar"

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-black">
      <FacilityNavBar />

      {/* Can remove this */}
      <div className="ml-4 mt-2 text-white">
        <p>TODO:</p>
        <ul>
          <li>Overview</li>
          <li>Campus Map</li>
          <li>Reports</li>
          <li>Analytics</li>
        </ul>
      </div>
    </main>
  )
}
