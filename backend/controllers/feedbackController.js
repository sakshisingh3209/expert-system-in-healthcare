import { Feedback } from "../models/FeedbackModel.js";

//create feedback
export const createFeedback = async(req, res) => {
    try {
        const { patientId, doctorId, rating, comment } = req.body;
        const newFeedback = new Feedback({
            patientId,
            doctorId,
            rating,
            comment
        });
        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error submitting feedback" });
    }
};


//get all feedbacks for a doctor
export const getDoctorFeedback = async(req, res) => {
    try {
        const { doctorId } = req.params;
        const feedback = await Feedback.find({ doctorId }).populate("patientId", "name");

        if (!feedback.length) {
            return res.status(404).json({ message: "No feedback found for this doctor" });
        }
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching feedbacks" });
    }
};

export const getPatientFeedback = async(req, res) => {
    try {
        const { patientId } = req.params;
        const feedback = await Feedback.find({ patientId }).populate("doctorId", "name specialization");
        if (!feedbacks.length) {
            return res.status(404).json({ message: "No feedback found for this patient" });
        }
        res.status(200).json(feedbacks);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching feedbacks" });
    }
}