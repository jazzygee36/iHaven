"use client";

import BackArrow from "@/assets/icons/back-arrow";
import HomeButton from "@/components/button";
import HomeInput from "@/components/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



const StudentsPortal = () => {
  const router = useRouter();
  const [form, setForm] = useState({
   
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("token", "token");

    router.push("/dashboard")
    console.log("Form submitted:", form);
  };

  return (
    <div className="bg-gray-50">
      <div className=" mx-6  ">
        <BackArrow />
      </div>
      <div className="min-h-screen  flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Log in to continue your learning journey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
          
            <div>
              <HomeInput
                type={"email"}
                placeholder={"Enter email"}
                label="Enter Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Email */}

            {/* Password */}
            <div>
              <HomeInput
                type={"password"}
                placeholder={"Enter password"}
                label="Enter Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div>
              <HomeButton
                title={"Login"}
                type={"submit"}
                bg={"#193A8E"}
                width={"100%"}
                height={"45px"}
              />
            </div>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default StudentsPortal;
