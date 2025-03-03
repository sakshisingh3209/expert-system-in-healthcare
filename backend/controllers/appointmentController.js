import { Appointment } from "../models/AppointmentModel.js";


export const scheduleAppointment = async(req, res) => {
    try {
        const { patientId, doctorId, appointmentDate, status, notes } = req.body;
        if (!patientId || !doctorId || !appointmentDate) {
            return res.status(400).jso({ message: "Missing required fields" });
        }

        const newAppointment = new Appointment({
            patientId,
            doctorId,
            appointmentDate,
            status: status || "scheduled",
            notes
        });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error scheduling appointment" });
    }
};

//get all appointments for a patient

export const getAppointmentByPatient = async(req, res) => {
    try {
        const { patientId } = req.params;
        const appointments = await Appointment.find({ patientId }).populate("doctorId", "name specialization").sort({ appointmentDate: 1 });
        if (!appointments.length) {
            return res.status(404).json({ message: "No appointments found for this patient" });
        }
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching appointments" });
    }
};

//get all appointments for a doctor
export const getAppointmentByDoctor = async(req, res) => {
    try {
        const { doctorId } = req.params;
        const appointments = await Appointment.find({ doctorId }).populate("patientId", "name age").sort({ appointmentDate: 1 });
        if (!appointments.length) {
            return res.status(404).json({ message: "No appointments found for this doctor" });
        }
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching appointments" });
    }

};



//update an appointment status
export const updateAppointmentStatus = async(req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!["scheduled", "completed", "canceled"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            id, {
                status
            }, { new: true }
        );

        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(updatedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating appointment status" });
    }
};



//delete an appointment

export const deleteAppointment = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedAppointment = await Appointment.findByIdAndDelete(id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting appointment" });
    }
}