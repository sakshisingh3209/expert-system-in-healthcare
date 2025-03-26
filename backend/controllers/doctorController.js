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
export const getDoctor = async(req, res) => {
    try {
        const { name, specialization, rating, fee } = req.query;

        let filter = {};

        if (name) filter.name = { $regex: name, $options: 'i' };
        if (specialization) filter.specialization = specialization;
        if (rating) filter.rating = { $gte: parseInt(rating) };
        if (fee) filter.fee = { $lte: parseInt(fee) };

        const doctors = await Doctor.find(filter);
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }

}

//update doctor details

export const updateDoctor = async (req, res) => {
    try {
        const { specialization, licenseNumber, patients, availability, fee, contact, address } = req.body;

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            {
                specialization,
                licenseNumber,
                patients,
                availability,
                fee,
                contact,
                address
            },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // ✅ Return the full doctor object, including all fields
        res.status(200).json({
            id: updatedDoctor._id,
            username: updatedDoctor.username,
            specialization: updatedDoctor.specialization,
            licenseNumber: updatedDoctor.licenseNumber,
            patients: updatedDoctor.patients,
            availability: updatedDoctor.availability,
            fee: updatedDoctor.fee,
            contact: updatedDoctor.contact,
            address: updatedDoctor.address,
            role: updatedDoctor.role,
            status: updatedDoctor.status,
            lastLogin: updatedDoctor.lastLogin
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating doctor" });
    }
};

//delete a doctor

export const deleteDoctor = async(req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting doctor" });
    }
};