import express from "express";
import multer from "multer";
import { register, loginUser, getUserByStatus, getUserById, updateUser, deleteUser, logoutUser, } from "../controllers/userController.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
router.post("/register", singleUpload, register);
router.post("/login", loginUser);

router.get("/users/status/:status", getUserByStatus);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;