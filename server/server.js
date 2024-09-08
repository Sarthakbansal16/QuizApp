import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import reportRoutes from "./routes/report.routes.js";
import examRoutes from "./routes/exam.routes.js"

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/exam",examRoutes);

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
