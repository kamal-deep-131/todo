import User from "../model/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        await user.save();


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: {
                name: user.name,
                email: user.email
            }
        })
    }
    catch (error) {
        console.log("Error in register controller: ", error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

export default register