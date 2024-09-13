// Importing axios instance
import axiosInstance from ".";

// Add exam
export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/exams/addExam", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post("/api/exams/getAllExams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get exam by ID
export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/exams/getExamById",
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
      "/api/exams/editExam",
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
      "/api/exams/deleteExam",
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
      "/api/exams/addQuestion",
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
      "/api/exams/editQuestion",
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
      "/api/exams/deleteQuestion",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
