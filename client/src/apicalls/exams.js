// Importing axios instance
import axiosInstance from "./index.js";

// Add exam
export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/exam/addExam", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post("/api/exam/getAllExams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get exam by ID
export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/getExamById",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Edit exam by ID
export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/editExam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete exam by ID
export const deleteExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/deleteExam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Add question to exam
export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/addQuestion",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Edit question by ID
export const editQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/editQuestion",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete question by ID
export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exam/deleteQuestion",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
