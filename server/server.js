import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
  });