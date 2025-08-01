// utils/axiosInstance.ts
import axios from "axios";
import { getCookie } from "cookies-next";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Interceptor to add Authorization header before each request
api.interceptors.request.use((config) => {
  const token = getCookie("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
