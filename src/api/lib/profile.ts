// lib/api/profile.ts
import axios from 'axios';

export const getProfile = async () => {
  const token = localStorage.getItem('token'); // 
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
