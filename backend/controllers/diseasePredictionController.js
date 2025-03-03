import { DiseasePrediction } from "../models/DiseasePredictionModel.js"
export const createPrediction = async(req, res) => {
    try {
        const { patientId, prediction, confidenceScore, recommendations } = req.body;
        if (!patientId || !prediction || confidenceScore === undefined) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newPrediction = new DiseasePrediction({
            patientId,
            prediction,
            confidenceScore,
            recommendations,
        });

        await newPrediction.save();
        res.status(201).json(newPrediction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating disease prediction" });
    }
};


export const getPredictionsByPatient = async(req, res) => {
    try {
        const { patientId } = req.params;
        const predictions = await DiseasePrediction.find({ patientId }).sort({ date: -1 });
        if (!predictions || predictions.length === 0) {
            return res.status(404).json({ message: "No predictions found for this patient" });
        }
        res.status(200).json(predictions);
    } catch (error) {
        console.error(error);
    }
};

export const getPredictionById = async(req, res) => {
    try {
        const { id } = req.params;
        const prediction = await DiseasePrediction.findById(id);
        if (!prediction) {
            return res.status(400).json({ message: "Prediction not found" });
        }

        res.status(200).json(prediction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching prediction" });
    }
};


export const deletePrediction = async(req, res) => {
    try {
        const { id } = req.params;
        const prediction = await DiseasePrediction.findByIdAndDelete(id);
        if (!prediction) {
            return res.status(404).json({ message: "Prediction not found" });
        }
        res.status(200).json({ message: "Prediction deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Prediction" });
    }
};