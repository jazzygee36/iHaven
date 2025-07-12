import axios from 'axios';
import { getCookie } from 'cookies-next';

export const getProfile = async () => {
  const token = getCookie("token"); // Works on both client/server

  if (!token) {
    throw new Error("No token found in cookies.");
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
