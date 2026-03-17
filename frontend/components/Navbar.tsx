export default function Navbar() {

  return (
    <nav className="flex justify-between p-6 bg-white text-black">

      <h1 className="font-bold text-xl">
        HealthCare
      </h1>

      <div className="space-x-6">

        <a href="/">Home</a>
        <a href="/booking">Book</a>
        <a href="/dashboard">Dashboard</a>

      </div>

    </nav>
  )
}