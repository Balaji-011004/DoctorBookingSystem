import AppointmentForm from "../../components/AppointmentForm"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Book Appointment
      </h1>

      <AppointmentForm />

    </div>
  )
}