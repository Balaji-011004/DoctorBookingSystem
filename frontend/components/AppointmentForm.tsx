"use client"

import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function AppointmentForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [slot, setSlot] = useState("")

  const bookAppointment = async () => {

    const { data: patient } = await supabase
      .from("patients")
      .insert([{ name, email, phone }])
      .select()

    await supabase
      .from("appointments")
      .insert([{
        patient_id: patient?.[0]?.id,
        date,
        slot
      }])

    alert("Appointment Booked Successfully!")

  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">

      <input
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Phone"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="date"
        className="border p-2 w-full mb-3"
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3"
        onChange={(e) => setSlot(e.target.value)}
      >

        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>12:00 PM</option>

      </select>

      <button
        onClick={bookAppointment}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>

    </div>
  )
}