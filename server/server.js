import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express()

dotenv.config();

//connect database
connectDB()

//allow cors for frontend
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

//middlewares
app.use(express.json());


//routes & root endpoint
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.get('/', (req, res) => {
    res.send("API Working...");
})

//port 
const PORT = process.env.PORT || 5000;

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


