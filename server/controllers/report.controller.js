import Exam from "../models/exam.model.js";
import Report from "../models/report.model.js";
import User from "../models/report.model.js";
import { ApiError } from "../utils/ApiError";

export const addReport = async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res.status(200).json(200, "", "Attempt added successfully");
  } catch (error) {
    throw new ApiError(500, "Something went wrong while adding new report");
  }
};

export const getAllReports = async (req, res) => {
  try {
    const { examName, userName } = req.body;
    const exams = await Exam.find({
      name: {
        $regex: examName,
      },
    });

    const matchedExamIds = exams.map((exam) => exam._id);

    const reports = await Report.find({
      exam: {
        $in: matchedExamIds,
      },
      user: {
        $in: matchedUserIds,
      },
    })
      .populate("exam")
      .populate("user")
      .sort({ createdAt: -1 });
    res.status(200).json(200, reports, "Attempts fetched successfully");
  } catch (error) {
    throw new ApiError(500, "Something went wrong while getting all reports");
  }
};

export const getAllReportsByUser = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.body.userId })
      .populate("user")
      .sort({ createdAt: -1 });
    res.status(200).json(200, reports, "Attempts fetched successfully");
  } catch (error) {
    throw new ApiError(500, "Something went wrong while getting all reports");
  }
};
