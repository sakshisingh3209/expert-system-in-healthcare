import express from "express";
import { createUser, loginUser, getUserByStatus, getUserById, updateUser, deleteUser, logoutUser, } from "../controllers/userController.js";
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);

router.get("/users/status/status", getUserByStatus);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;