"use client";

import BackArrow from "@/assets/icons/back-arrow";
import HomeButton from "@/components/button";
import HomeInput from "@/components/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormData } from "@/utils/validation";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/lib/auth";

const StudentsPortal = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
    
     
      // Set token as cookie
      document.cookie = `token=${data.accessToken}; path=/; max-age=86400; SameSite=Strict; Secure`;
      router.push("/dashboard");
    },
    onError: (error: any) => {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
    },
  });

  return (
    <div className="bg-gray-50">
      <div className=" mx-6 py-4 ">
        <BackArrow />
      </div>
      <div className="mt-10 pb-16 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Log in to continue your learning journey
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {mutation.isError && (
              <p className="text-red-500 text-sm text-center mb-2 ">
                {(mutation.error as any)?.response?.data?.message ||
                  "Login failed."}
              </p>
            )}
            <div>
              <HomeInput
                type={"email"}
                placeholder={"Enter email"}
                label="Enter Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Email */}

            {/* Password */}
            <div>
              <HomeInput
                type={"password"}
                placeholder={"Enter password"}
                label="Enter Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div>
              <HomeButton
                title={mutation.isPending ? "Login..." : "Login"}
                type={"submit"}
                bg={"#193A8E"}
                width={"100%"}
                height={"45px"}
                disabled={mutation.isPending}
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
