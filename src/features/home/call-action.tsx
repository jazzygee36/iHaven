'use client'
import HomeButton from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const CallToAction = () => {
  const router = useRouter();
  return (
    <section className="bg-[#FF6933] text-white text-center px-8 py-16 ">
      <h2 className="text-[25px] md:text-3xl font-bold mb-4">
        Ready to Transform Your Future?
      </h2>
      <p className="text-lg mb-6">
        Start your learning journey with iHaven today. Build skills that matter.
      </p>
      {/* <button className="bg-white text-[#FF6933] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
        Start Learning Now
      </button> */}
     <div className="flex justify-center mt-6">
       <HomeButton
        title={"Start Learning Now"}
        type={"button"}
        bg={"white"}
        width={""}
        height={"45px"}
        color="#FF6933"
        onClick={() => router.push('/register')}
      />
     </div>
    </section>
  );
};

export default CallToAction;
