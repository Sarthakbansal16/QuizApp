import express from "express";
import { verifyToken } from "../middlewares/jwt.js";
import {
  addReport,
  getAllReports,
  getAllReportsByUser,
} from "../controllers/report.controller.js";

const router = express.Router();

router.post("/addReport", verifyToken, addReport);
router.post("getAllReports", verifyToken, getAllReports);
router.post("getAllReportsByUser", verifyToken, getAllReportsByUser);

export default router;
