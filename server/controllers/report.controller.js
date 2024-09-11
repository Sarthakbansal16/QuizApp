import Exam from "../models/exam.model.js";
import Report from "../models/report.model.js"
import User from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const addReport = async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res
      .status(200)
      .json(new ApiResponse(200, newReport, "Report added successfully"));
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
        $options: "i",
      },
    });
    // console.log(exams)
    const matchedExamIds = exams.map((exam) => exam._id);
    // console.log(matchedExamIds)
    const users = await User.find({
      name: {
        $regex: userName,
        $options: "i",
      },
    });
    // console.log(users)
    const matchedUserIds = users.map((user) => user._id);
    // console.log(matchedUserIds)
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

    // console.log("Reports found:", reports);
    res
      .status(200)
      .json(new ApiResponse(200, reports, "Attempts fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while getting all reports");
  }
};

export const getAllReportsByUser = async (req, res) => {
  try {
    const userId = await User.findById(req.body.userId);
    const reports = await Report.find({ user:userId})
      .populate("exam")
      .populate("user")
      .sort({ createdAt: -1 });
    console.log("reports", reports);
    res
      .status(200)
      .json(new ApiResponse(200, reports, "Reports fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while getting all reports");
  }
};
