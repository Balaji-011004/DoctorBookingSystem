import { createClient } from "@supabase/supabase-js"

const supabase=createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_KEY
)

export default async function handler(req,res){

const {date,doctorId}=req.query

const slots=[
"10:00 AM",
"11:00 AM",
"12:00 PM",
"2:00 PM"
]

const {data}=await supabase
.from("appointments")
.select("slot")
.eq("date",date)
.eq("doctor_id",doctorId)

const booked=data.map(a=>a.slot)

const available=slots.filter(s=>!booked.includes(s))

res.json(available)

}