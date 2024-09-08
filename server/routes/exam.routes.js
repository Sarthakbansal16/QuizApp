import express from "express";
import { verifyToken } from "../middlewares/jwt.js";
import {
  addExam,
  addQuestion,
  deleteExam,
  deleteQuestion,
  editExamById,
  editQuestion,
  getAllExams,
  getExamById,
} from "../controllers/exam.controller.js";

const router = express.Router();

router.post("/addExam", verifyToken, addExam);
router.post("/getAllExams", verifyToken, getAllExams);
router.post("/getExamById", verifyToken, getExamById);
router.post("/editExam", verifyToken, editExamById);
router.post("deleteExam", verifyToken,deleteExam );
router.post("/addQuestion", verifyToken, addQuestion);
router.post("editQuestion", verifyToken, editQuestion);
router.post("/deleteQuestion", verifyToken, deleteQuestion);

export default router
