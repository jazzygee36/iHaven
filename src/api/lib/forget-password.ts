import axios from "axios";

interface ForgetPassword {
  email: string;
}

export const forgetPassword = async (data: ForgetPassword) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/forgot-password`,
    data
  );

  return res.data;
};
