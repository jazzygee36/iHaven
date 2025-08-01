// lib/all-courses.ts
import api from "@/utils/axiosInstance";

export const getAllCourses = async () => {
  const res = await api.get("/all-courses");
  return res.data;
};
