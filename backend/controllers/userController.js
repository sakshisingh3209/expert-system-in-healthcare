import { User } from "../models/UserModel.js";
import { Patient } from "../models/PatientModel.js";
import { Doctor } from "../models/DoctorModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
export const register = async(req, res) => {

    try {
        const {
            name,
            username,
            phoneNumber,
            role,
            password,
            email
        } = req.body;

        console.log(name, username, phoneNumber, password, email, role);
        if (!name || !username || !phoneNumber || !role || !email) {
            return res.status(400).json({
                message: 'All fields are required',
                success: true
            });
        }
        const existingUser = await User.findOne({
            username
        });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exist',

            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            username,
            password: hashedPassword,
            phoneNumber,
            role,
            email
        });
        await user.save();
        return res.status(201).json({
            message: 'User registered successfully',
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
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