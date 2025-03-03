import { Doctor } from "../models/DoctorModel.js";

//create a new doctor

export const createDoctor = async(req, res) => {
    try {
        const { userId, specialization, licenseNumber, patients, availability } = req.body;
        const newDoctor = new Doctor({
            userId,
            specialization,
            licenseNumber,
            patients,
            availability
        });
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating doctor" });
    }
};

//get all doctors
export const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find().populate("patients").populate("userId");
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching doctors" });
    }
};

//get a single doctor by Id
export const getDoctorById = async(req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate("patients").populate("userId");
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching doctor" });
    }
}

//update doctor details

export const updateDoctor = async(req, res) => {
    try {
        const { specialization, licenseNumber, patients, availability } = req.body;
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id, {
                specialization,
                licenseNumber,
                patients,
                availability
            }, { new: true }
        );
        if (!updateDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json(updatedDoctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating doctor" });
    }
};

//delete a doctor

export const deleteDoctor = async(req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deleteDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting doctor" });
    }
};