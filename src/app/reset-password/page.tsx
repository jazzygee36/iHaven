// app/reset-password/page.tsx
"use client";

import { resetPassword } from "@/api/lib/reset-passowrd";
import HomeButton from "@/components/button";
import HomeInput from "@/components/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ResetPasswordPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      return setMessage("Invalid or missing token.");
    }

    if (newPassword !== confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    setLoading(true);
    setMessage("");

    try {
      const result = await resetPassword({ token, newPassword });

      setMessage(result.message || "✅ Password reset successful.");
      if (result.message) {
        router.push("/students-portal");
      }
    } catch (error: any) {
      setMessage(
        error?.response?.data?.message || "An error occurred during reset."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>

      <form onSubmit={handleReset} className="space-y-4">
        <HomeInput
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <HomeInput
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <HomeButton
          type="submit"
          className="w-full bg-blue-600 text-white"
          title={loading ? "Resetting..." : "Reset Password"}
          bg={"#193A8E"}
          width={""}
          height={"45px"}
        />
      </form>

      {message && (
        <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
      )}
    </div>
  );
};

export default ResetPasswordPage;
