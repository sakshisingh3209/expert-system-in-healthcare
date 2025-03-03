import express from "express";
import { sendNotification, getNotifications, markAsRead } from "../controllers/notificationController.js";
const router = express.Router();

//send a notification
router.post("/send", sendNotification);

//get all notifications for a user
router.get("/:userId", getNotifications);

//mark a notification as read
router.put("/:notificationId/read", markAsRead);

export default router;