"use client";

import BackArrow from "@/assets/icons/back-arrow";
import HomeButton from "@/components/button";
import HomeInput from "@/components/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/utils/validation";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // You can send this data to your API here
  };

  return (
    <div className="bg-gray-50">
      <div className="  mx-6 py-4   ">
        <BackArrow />
      </div>
      <div className="mt-10 pb-16  flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create an account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <HomeInput
                type={"text"}
                placeholder={"Enter Name"}
                label="Enter Full Name"
                {...register("names")}
              />
              {errors.names && (
                <p className="text-red-500 text-sm">{errors.names.message}</p>
              )}
            </div>
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
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
            <div>
              <HomeButton
                title={"Sign Up"}
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
                router.push("/students-portal");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
