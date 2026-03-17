export default function DoctorCard({ name, specialization }: any) {

  return (
    <div className="bg-white p-6 shadow rounded-lg">

      <h2 className="text-xl font-bold">
        {name}
      </h2>

      <p className="text-gray-500">
        {specialization}
      </p>

    </div>
  )
}