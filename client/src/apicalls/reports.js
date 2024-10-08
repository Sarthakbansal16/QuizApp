// Importing axios instance
import axiosInstance from "./index.js";

// Add report
export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/report/addReport", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get all reports
export const getAllReports = async (filters) => {
  try {
    const response = await axiosInstance.post("/api/report/getAllReports", filters);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get all reports by user
export const getAllReportsByUser = async () => {
  try {
    const response = await axiosInstance.post("/api/report/getAllReportsByUser");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
