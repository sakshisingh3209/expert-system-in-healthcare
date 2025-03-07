import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();


export const verifyAdmin = (req, res, next) => {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(403).json({ message: "Access denied" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized: Admin access required" });
        }
        req.user = decode;
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};