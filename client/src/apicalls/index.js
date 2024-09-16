// import axios from "axios";

// const axiosInstance = axios.create({
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;