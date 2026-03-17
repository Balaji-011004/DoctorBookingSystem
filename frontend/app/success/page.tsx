export default function Success() {

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="bg-white p-10 shadow-lg rounded-xl text-center">

        <h1 className="text-3xl font-bold text-green-600">
          Appointment Confirmed
        </h1>

        <p className="mt-4">
          Your appointment has been successfully booked.
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Go Home
        </a>

      </div>

    </div>
  )
}