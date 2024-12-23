import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';

dotenv.config({});

//call database connection
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

