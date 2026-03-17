import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="grid grid-cols-4 gap-6 p-10">

        <StatsCard title="Total Patients" value="120" />
        <StatsCard title="Doctors" value="6" />
        <StatsCard title="Today Appointments" value="14" />
        <StatsCard title="Upcoming" value="25" />

      </div>

    </div>
  );
}