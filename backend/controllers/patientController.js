import { Patient } from "../models/PatientModel.js";
import { User } from "../models/UserModel.js";

import mongoose from "mongoose";
//create a new patient

export const createPatient = async(req, res) => {
    try {
        const { userId, DOB, gender, medicalHistory, currentMedications, allergies, contactInfo } = req.body;

        if (!userId || !DOB || !gender || !medicalHistory || !currentMedications || !allergies || !contactInfo) {
            return res.status(400).json({
                message: "Something is missing"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: 'Invalid user Id format'
            });
        }
        const newPatient = new Patient({
            userId,
            DOB: new Date(DOB),
            gender,
            medicalHistory: medicalHistory || [],
            allergies: allergies || [],
            contactInfo
        });

        await newPatient.save();
        res.status(201).json({
            message: "Patient created Successfully",
            patient: newPatient
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


//get all patients

export const getAllPatients = async(req, res) => {
    try {
        const patients = await Patient.find().populate("userId", "name username");
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching patient" });
    }
};


//get patient by Id
export const getPatientById = async(req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate("userId", "name username");
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient" });
    }
};


//update patient by Id
export const updatePatient = async(req, res) => {
    try {
        const { DOB, gender, medicalHistory, currentMedications, allergies, contactInfo } = req.body;
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id, { DOB, gender, medicalHistory, currentMedications, allergies, contactInfo }, { new: true }
        );

        if (!updatedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json({ message: "Patient updated successfully", patient: updatedPatient });
    } catch (error) {
        res.status(500).json({ message: "Error updating patient" });
    }
};


//delete patient by Id
export const deletePatient = async(req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json({ message: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting patient" });
    }
};