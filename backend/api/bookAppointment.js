import { createClient } from "@supabase/supabase-js"

const supabase=createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_KEY
)

export default async function handler(req,res){

const {name,email,phone,doctor,date,slot}=req.body

const {data:patient}=await supabase
.from("patients")
.insert([{name,email,phone}])
.select()

const {data:appointment}=await supabase
.from("appointments")
.insert([{
patient_id:patient[0].id,
doctor_id:doctor,
date,
slot
}])
.select()

res.json(appointment)

}