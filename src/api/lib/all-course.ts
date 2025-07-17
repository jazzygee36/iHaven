import axios from 'axios';
import { getCookie } from 'cookies-next';

export const getAllCourses = async () => {
  const token = getCookie("token"); 

  if (!token) {
    throw new Error("No token found in cookies.");
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-courses`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
