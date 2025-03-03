import { MedicalHistory } from "../models/MedicalHistory.js";

export const addMedicalHistory = async(req, res) => {
    try {
        const { patientId, date, condition, treatment, doctorId } = req.body;

        if (!patientId || !date || !condition || !treatment) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newHistory = new MedicalHistory({
            patientId,
            date,
            condition,
            treatment,
            doctorId,

        });
        await newHistory.save();
        res.status(201).json(newHistory);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding medical history" });
    }
};


//get all medical history records for a patient

export const getMedicalHistoryByPatient = async(req, res) => {
    try {
        const { patientId } = req.params;
        const historyRecords = await MedicalHistory.find({ patientId }).populate("doctorId", "name specialization").sort({ date: -1 });
        if (!historyRecords || historyRecords.length === 0) {
            return res.status(404).json({ message: "No medical history found" });
        }
        res.status(200).json(historyRecords);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching medical history" });
    }
};



//get a specific medical history

export const getMedicalHistoryById = async(req, res) => {
    try {
        const { id } = req.params;
        const historyRecord = await MedicalHistory.findById(id).populate("doctorId", "name specialization");
        if (!historyRecord) {
            return res.status(404).json({ message: "Medical history record not found" });
        }


        res.status(200).json(historyRecord);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching medical history record" });
    }
};



//update a medical history record
export const updateMedicalHistory = async(req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedRecord = await MedicalHistory.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: "Medical history record not found" });
        }
        res.status(200).json(updatedRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating medical history" });
    }

}


//delete a  record

export const deleteMedicalHistory = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await MedicalHistory.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: "Medical history record not found" });
        }
        res.status(200).json({ message: "Medical history record deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting medical history" });
    }
};