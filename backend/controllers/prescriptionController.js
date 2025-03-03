import { Prescription } from "../models/PrescriptionModel.js";
//add a new prescription

export const addPrescription = async(req, res) => {
    try {
        const { patientId, doctorId, medications, dosageInstruction, dateIssued } = req.body;
        if (!patientId || !doctorId || !medications || !dosageInstruction || !dateIssued) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newPrescription = new Prescription({
            patientId,
            doctorId,
            medications,
            dosageInstruction,
            dateIssued,
        });

        await newPrescription.save();
        res.status(201).json(newPrescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error adding prescription"
        });
    }
};


//get all prescriptions for a patient 


export const getPrescriptionsByPatient = async(req, res) => {
    try {
        const { patientId } = req.params;
        const prescriptions = await Prescription.find({ patientId }).populate("doctorId", "name specialization").sort({ dateIssued: -1 });

        if (!prescription || prescriptions.length === 0) {
            return res.status(400).json({ message: "No prescriptions found for this patient" });
        }
        res.status(200).json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching prescriptions" });
    }
};


//get a specific prescription by Id

export const getPrescriptionById = async(req, res) => {
    try {
        const { id } = req.params;
        const prescription = await Prescription.findById(id).populate("doctorId", "name specialization");
        if (!prescription) {
            return res.status(404).json({ message: "Prescription not found" });
        }
        res.status(200).json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching prescription"
        });

    }
};


//update a prescription
export const updatePrescription = async(req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedPrescription = await Prescription.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedPrescription) {
            return req.status(404).json({ message: "Prescription not found" });
        }
        res.status(200).json(updatedPrescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating prescription" });
    }
};


//delete a prescription
export const deletePrescription = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedPrescription = await Prescription.findByIdAndDelete(id);
        if (!deletedPrescription) {
            return res.status(404).json({ message: "Prescription not found" });
        }
        res.status(200).json({ message: "Prescription deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting prescription" });
    }
};