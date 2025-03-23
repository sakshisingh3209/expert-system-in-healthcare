import { Appointment } from "../models/appointmentModel.js";
import { Patient } from "../models/PatientModel.js";
import { Doctor } from "../models/DoctorModel.js";


export const scheduleAppointment = async(req, res) => {
    const { patientId, doctorId, appointmentDate, notes } = req.body;

    try {
        // Validate patient and doctor existence
        const patient = await Patient.findById(patientId);
        const doctor = await Doctor.findById(doctorId);

        if (!patient || !doctor) {
            return res.status(404).json({ message: "Patient or Doctor not found" });
        }

        // Check if the appointment date is in the future
        if (new Date(appointmentDate) < new Date()) {
            return res.status(400).json({ message: "Appointment date must be in the future" });
        }

        // Create new appointment
        const appointment = new Appointment({
            patientId,
            doctorId,
            appointmentDate,
            notes
        });

        await appointment.save();

        res.status(201).json({ message: "Appointment scheduled successfully", appointment });
    } catch (error) {
        console.error("Error scheduling appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const getAppointmentByPatient = async(req, res) => {
    const { patientId } = req.params;

    try {
        const appointments = await Appointment.find({ patientId })
            .populate("doctorId", "specialization rating fee")
            .sort({ appointmentDate: 1 }); // Sort by appointment date

        if (!appointments.length) {
            return res.status(404).json({ message: "No appointments found for this patient" });
        }

        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const getAppointmentByDoctor = async(req, res) => {
    const { doctorId } = req.params;

    try {
        const appointments = await Appointment.find({ doctorId })
            .populate("patientId", "userId DOB gender")
            .sort({ appointmentDate: 1 }); // Sort by appointment date

        if (!appointments.length) {
            return res.status(404).json({ message: "No appointments found for this doctor" });
        }

        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching doctor appointments:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const updateAppointmentStatus = async(req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        // Check valid status values
        const allowedStatuses = ['scheduled', 'completed', 'canceled'];
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        appointment.status = status;
        await appointment.save();

        res.status(200).json({ message: "Appointment status updated", appointment });
    } catch (error) {
        console.error("Error updating appointment status:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const deleteAppointment = async(req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        await appointment.deleteOne();

        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
};