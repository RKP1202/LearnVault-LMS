// Isse kya samjha wo idhar likh do
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });

    } catch (error) {
        console.log("Error in register: ", error);

        return res.status(500).json({
            message: "Failed to create account",
            success: false
        });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                message: "Account with this email is not registered",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false
            });
        }

        generateToken(res, user, `Welcome back ${user.name}!`);

        return res.status(200).json({
            message: "Login successful",
            success: true
        });

    } catch (error) {
        console.log("Error in login: ", error);

        return res.status(500).json({
            message: "Failed to login",
            success: false
        });
    }
}