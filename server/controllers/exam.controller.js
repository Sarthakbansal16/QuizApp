import Exam from "../models/exam.model.js";
import Question from "../models/question.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
export const addExam = async (req, res) => {
  try {
    const examExists = await Exam.findOne({ name: req.body.name });
    if (examExists) {
      throw new ApiError(500, "Exam Already exists");
    }
    req.body.questions = [];
    const newExam = await Exam.create(req.body);
    res
      .status(200)
      .json(new ApiResponse(200, newExam, "Exam added successfully"));
  } catch (error) {
    throw new ApiError(500, "something went wrong while adding exam");
  }
};

export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find({});
    res
      .status(200)
      .json(new ApiResponse(200, exams, "Exams fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "something went wrong while fetching all exams");
  }
};

export const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.examId).populate("questions");
    res
      .status(200)
      .json(new ApiResponse(200, exam, "Exam fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "something went wrong while fetching exam");
  }
};

export const editExamById = async (req, res) => {
  try {
    await Exam.findByIdAndUpdate(req.body.examId, req.body);
    res.send({
      message: "Exam edited successfully",
      success: true,
    });
  } catch (error) {
    throw new ApiError(500, "something went wrong while editing the exam");
  }
};

export const deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.body.examId);
    res.send({
      message: "Exam deleted successfully",
      success: true,
    });
  } catch (error) {
    throw new ApiError(500, "something went wrong while deleting the exam");
  }
};

export const addQuestion = async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);
    const exam = await Exam.findById(req.body.exam);
    exam.questions.push(newQuestion._id);
    await exam.save();
    res.send({
      message: "Question added successfully",
      success: true,
    });
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while adding question to exam"
    );
  }
};

export const editQuestion = async (req, res) => {
  try {
    await Question.findByIdAndUpdate(req.body.questionId, req.body);
    res.send({
      message: "Question edited successfully",
      success: true,
    });
  } catch (error) {
    throw new ApiError(500, "something went wrong while updating question");
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.body.questionId);
    const exam = await Exam.findById(req.body.examId);
    exam.questions = exam.questions.filter(
      (question) => question._id != req.body.questionId
    );
  } catch (error) {
    throw new ApiError(500,"something went wrong while deleting question");
  }
};
