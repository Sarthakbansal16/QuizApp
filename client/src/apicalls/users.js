// Importing axios instance
import axiosInstance from "./index.js";

// Register user
export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/register', payload);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message);
    return error.response ? error.response.data : { success: false, message: 'An error occurred' };
  }
};

// Login user
export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/login', payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get user info
export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post('/api/user/get-user-info');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
