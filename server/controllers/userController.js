import userModel from "../models/userModel.js";

//create new user---------------------------
export const userRegistration = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const isuserExtists = await userModel.findOne({ email })

        if (isuserExtists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const newUser = await userModel.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

//user login--------------------------------
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user exists
        const user = await userModel.findOne({
            email, password
        })

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}