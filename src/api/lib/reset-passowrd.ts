// api/resetPassword.ts
import axios from "axios";

interface ResetPasswordData {
  token: string;
  newPassword: string;
}

export const resetPassword = async (data: ResetPasswordData) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reset-password`,
    data
  );
  return res.data;
};
