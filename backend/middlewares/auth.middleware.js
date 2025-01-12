import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {


    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token, authorization denied",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token is not valid. Try to login again",
        });
    }
}

export default authMiddleware