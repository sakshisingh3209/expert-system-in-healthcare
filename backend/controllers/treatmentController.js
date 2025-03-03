import { Treatment } from "../models/TreatmentModel.js";


//add a new treatment record


export const addTreatment = async(req, res) => {
    try {
        const { patientId, doctorId, treatments, goals, startDate, endDate } = req.body;
        if (!patientId || !doctorId || !treatments || !goals || !startDate || !endDate) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newTreatment = new Treatment({
            patientId,
            doctorId,
            treatments,
            goals,
            startDate,
            endDate,
        });
        await newTreatment.save();
        res.status(201).json(newTreatment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding treatment record" });
    }
};



//get all treatments for a patient
export const getTreatmentsByPatient = async(req, res) => {
    try {
        const { patientId } = req.params; {
            const treatments = await Treatment.find({ patientId }).populate("doctorId", "name specialization").sort({ startDate: -1 });

            if (!treatments || treatments.length === 0) {
                return res.status(404).json({ message: "No treatments found for this patient" });
            }
            res.status(200).json(treatments);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching treatments" });
    }
};



//get  a specific treatment record by Id

export const getTreatmentById = async(req, res) => {
    try {
        const { id } = req.params;
        const treatment = await Treatment.findById(id).populate("doctorId", "name specialization");
        if (!treatment) {
            return res.status(404).json({ message: "Treatment record not found" });
        }
        res.status(200).json(treatment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching treatment record" });
    }
};


//update a treatment record


export const updateTreatment = async(req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;


        const updatedTreatment = await Treatment.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTreatment) {
            return res.status(404).json({ message: "Treatment record not found" });
        }

        res.status(200).json(updatedTreatment);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating treatment record" });
    }
};


//delete a treatment record


export const deleteTreatment = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedTreatment = await Treatment.findByIdAndDelete(id);

        if (!deletedTreatment) {
            return res.status(404).json({ message: "Treatment  record not found" });
        }

        res.status(200).json({ message: "Treatment record deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting treatment record" });
    }
};