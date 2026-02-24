// import { createAppointmentService, getAppointmentsService } from "../surveices/appointment.Service.js";
import { saveToGoogleSheet } from ".././surveices/googleSheet.Service.js";


export const createAppointment = async (req, res) => {
  try {
    // ⭐ Direct google sheet save
    await saveToGoogleSheet(req.body);

    res.json({ message: "Appointment saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
export const getAppointments = async (req, res) => {
  const data = await getAppointmentsService();
  res.json(data);
};