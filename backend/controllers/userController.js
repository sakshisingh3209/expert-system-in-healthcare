import { User } from "../models/UserModel.js";
import { Patient } from "../models/PatientModel.js"
import { Doctor } from "../models/DoctorModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const register = async(req, res) => {
    try {
        const {
            name,
            username,
            password,
            email,
            phoneNumber,
            role,
            profilePicture,
            specialization,
            licenseNumber,
            availability,
            DOB,
            gender,
            medicalHistory,
            currentMedications,
            allergies,
            contactInfo,
        } = req.body;


        // Check if username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the User collection
        const user = await User.create({
            name,
            username,
            password: hashedPassword,
            email,
            phoneNumber,
            role,
            profilePicture,
        });

        if (role === 'doctor') {
            // If the user is a doctor, create a Doctor document
            if (!specialization || !licenseNumber) {
                return res.status(400).json({ message: 'Doctor details are required' });
            }

            const doctor = await Doctor.create({
                userId: user._id,
                specialization,
                licenseNumber,
                availability: availability || { days: [], timeSlots: [] },
            });

            return res.status(201).json({
                success: true,
                message: 'Doctor registered successfully',
                data: doctor,
            });
        }

        if (role === 'patient') {
            // If the user is a patient, create a Patient document
            if (!DOB || !gender) {
                return res.status(400).json({ message: 'Patient details are required' });
            }

            const patient = await Patient.create({
                userId: user._id,
                DOB,
                gender,
                medicalHistory: medicalHistory || [],
                currentMedications: currentMedications || [],
                allergies: allergies || [],
                contactInfo,
            });

            return res.status(201).json({
                success: true,
                message: 'Patient registered successfully',
                data: patient,
            });
        }

        return res.status(400).json({ message: 'Invalid role' });
    } catch (error) {
        // ✅ Handle MongoDB duplicate key error
        if (error.code === 11000) {
            if (error.keyPattern.username) {
                return res.status(400).json({ message: 'Username already exists' });
            }

        }

        console.error('Registration Error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};



export const loginUser = async(req, res) => {
    try {
        const { username, password, role } = req.body;

        const user = await User.findOne({ username, role });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found or role mismatch" });

        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Update user status to active and set lastLogin timestamp
        user.status = "active";
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });


        // Send response with token
        res.json({
            message: "User logged in successfully",
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role,
                status: user.status,
                lastLogin: user.lastLogin,
            },
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get users based on their status 

export const getUserByStatus = async(req, res) => {
    try {
        const { status } = req.params;
        if (!["active", "inactive"].includes(status)) {
            return res.status(400).json({ message: "Invalid status. Use 'active' or 'inactive'." });
        }


        //find users based on status
        const users = await User.find({ status });
        if (users.length === 0) {
            return res.status(404).json({ message: `No ${status}users found.` });
        }
        res.json(users);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

//get user by id
export const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

//update user byId


export const updateUser = async(req, res) => {
    try {
        const {
            name,
            username,
            phoneNumber,
            role,
            status
        } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id, {
                name,
                username,
                phoneNumber,
                role,
                status
            }, {
                new: true
            }
        );

        if (!user) return res.status(404).json({
            message: 'User not found'
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}


//delete user by id

export const deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.log(error);
    }
}


export const logoutUser = async(req, res) => {
    try {
        const {
            userId
        } = req.body; // Assume userId is sent in the request body

        // Update user status to inactive
        const updatedUser = await User.findByIdAndUpdate(
            userId, {
                status: 'inactive'
            }, {
                new: true
            } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            message: 'User logged out successfully',
            user: updatedUser, // Return the updated user data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};