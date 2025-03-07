import express from "express"
import { registerAdmin, loginAdmin, getAllAdmins, deleteAdmin } from "../controllers/adminController.js";
import { verifyAdmin } from "../middlewares/authMiddleware.js";


const router = express.Router();
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/", verifyAdmin, getAllAdmins);
router.delete("/:id", verifyAdmin, deleteAdmin);


export default router;