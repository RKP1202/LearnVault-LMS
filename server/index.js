import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js"
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config({});

//call database connection
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;


// Default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:3099",
    credentials:true
}))

// apis
app.use("/api/v1/user" ,userRoute)
// app.get("/home" , (_ , res) => {
//     res.status(200).json({
//         success : true,
//         message : "Hello Im coming from backend"
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

