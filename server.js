import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express()

dotenv.config();

//connect database
connectDB()

//middlewares
app.use(express.json());


//routes & root endpoint
app.get('/', (req, res) => {
    res.send("API Working...");
})

//port 
const PORT = process.env.PORT || 5000;

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


