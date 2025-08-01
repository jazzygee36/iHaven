import api from "@/utils/axiosInstance";


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
  const res = await api.post("/register", data);
  return res.data;
};

export const loginUser = async (data: LoginPayload) => {
  const res = await api.post("/login", data);
  return res.data;
};
