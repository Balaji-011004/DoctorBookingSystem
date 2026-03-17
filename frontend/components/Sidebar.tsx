export default function Sidebar() {

  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6">

      <h2 className="text-xl font-bold mb-6">
        Dashboard
      </h2>

      <ul className="space-y-4">

        <li>Appointments</li>
        <li>Doctors</li>
        <li>Patients</li>
        <li>Settings</li>

      </ul>

    </div>
  )
}