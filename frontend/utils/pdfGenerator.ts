import jsPDF from "jspdf"

export const generatePDF = (appointment: any) => {

  const doc = new jsPDF()

  doc.text("Hospital Appointment Letter", 20, 20)

  doc.text(`Appointment ID: ${appointment.id}`, 20, 40)
  doc.text(`Doctor: ${appointment.doctor}`, 20, 50)
  doc.text(`Patient: ${appointment.patient}`, 20, 60)
  doc.text(`Date: ${appointment.date}`, 20, 70)
  doc.text(`Time: ${appointment.slot}`, 20, 80)

  doc.save("appointment.pdf")

}