import { Notification } from "../models/NotificationModel.js";
export const sendNotification = async(req, res) => {
    try {
        const { userId, message } = req.body;

        //create a new notification
        const newNotification = new Notification({
            userId,
            message,
            status: 'Unread',
        });
        //save the notification to the database
        await newNotification.save();
        res.status(201).json(newNotification);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error sending notification" });

    }
};

//get all notification for a user
export const getNotifications = async(req, res) => {
    try {
        const { userId } = req.param.Notification
            //fetch all notifications for the given user
        const notifications = await Notification.find({ userId }).sort({ timestamp: -1 });

        if (!notifications || notifications.length === 0) {
            return res.status(404).json({ message: "No notifications found" });
        }
        res.status(200).json(notifications);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching notifications" });
    }
};


//make a notification as read

export const markAsRead = async(req, res) => {
    try {
        const { notificationId } = req.params;
        //find and update the notification status to 'Read'
        const notification = await Notification.findByIdAndUpdate(
            notificationId, { status: 'Read' }, { new: true }
        );
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });

        }
        res.status(200).json(notification);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error marking notification as read" });
    }
};