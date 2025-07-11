import axios from 'axios';

interface RegisterPayload {
  fullNames: string;
  email: string;
  password: string;
}

interface LoginPayload {
 
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterPayload) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
    data
  );
  return res.data;
};

export const loginUser = async (data: LoginPayload) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
    data
  );
  return res.data;
};
