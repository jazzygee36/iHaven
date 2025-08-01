"use client";

import { forgetPassword } from "@/api/lib/forget-password";
import HomeButton from "@/components/button";
import HomeInput from "@/components/input";
import Input from "@/components/input";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await forgetPassword({ email });
      setSubmitted(true);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-10 px-6 py-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Forgot your password?
      </h2>
      <p className="text-gray-500 text-center mb-6 text-sm">
        Enter your email address below and we’ll send you a link to reset your
        password.
      </p>

      {submitted ? (
        <div className="text-center text-green-600 font-medium">
          ✅ A reset link has been sent to your email.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <HomeInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <HomeButton
            type="submit"
            className="w-full bg-[#193A8E] hover:bg-blue-700 text-white"
            title={loading ? "Sending..." : "Send Reset Link"}
            bg={"#193A8E"}
            width={"100%"}
            height={"45px"}
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
