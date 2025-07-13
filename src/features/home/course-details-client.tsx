"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { useQuery } from "@tanstack/react-query";

import { loadPaystackScript } from "@/components/paystack";
import HomeButton from "@/components/button";
import BackArrow from "@/assets/icons/back-arrow";
import { Modal } from "@/components/modal";
import CourseEnrollmentModal from "../courses-details/courses-enrol-modal";
import { getProfile } from "@/api/lib/profile";

interface Props {
  course: {
    id: number;
    title: string;
    image: string | StaticImageData;
    course: string;
    level: string;
    duration: string;
    price: string;
    description: string;
     curriculum?: {
      section: string;
      topics: string[];
    }[];
  };
}

export default function CourseDetailsClient({ course }: Props) {
  const route = useRouter();
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleLearningType = () => {
    const isLoggedIn = getCookie("token");
    if (!isLoggedIn) {
      route.push("/students-portal");
      return;
    }
    setIsOpen(true);
  };

  const handlePayment = async () => {
    const scriptLoaded = await loadPaystackScript();
    if (!scriptLoaded) return alert("Failed to load Paystack. Try again.");

    const rawPrice = course.price.replace(/[^0-9.]/g, "");
    const amountInKobo = Math.floor(Number(rawPrice) * 100);

    if (isNaN(amountInKobo)) {
      return alert("Invalid course price.");
    }

    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_bb303c70de3d313ccf557c37b226540818e7fc03",
      email: `${profile?.email || "user@example.com"}`,
      amount: amountInKobo,
      currency: "NGN",
      ref: `IHAVEN_${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: course.title,
            variable_name: "course",
            value: course.course,
          },
        ],
      },
      callback: (response: any) => {
        alert("Payment successful! Reference: " + response.reference);
        setIsOpen(false);
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Course Info */}
        <div className="space-y-6">
          <BackArrow />

          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src={course.image}
              alt={course.course}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">{course.course}</h1>
            <p className="text-gray-600">{course.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mt-6 text-gray-700">
            <div>
              <p className="font-semibold">Instructor</p>
              <p>{course.title}</p>
            </div>
            <div>
              <p className="font-semibold">Level</p>
              <p>{course.level}</p>
            </div>
            <div>
              <p className="font-semibold">Duration</p>
              <p>{course.duration}</p>
            </div>
            <div>
              <p className="font-semibold">Price</p>
              <p className="text-green-700 font-bold">{course.price}</p>
            </div>
          </div>

          <div className="pt-4">
            <HomeButton
              title={"Enroll Now"}
              type={"button"}
              bg={"#FF6933"}
              width={"100%"}
              height={"45px"}
              onClick={handleLearningType}
            />
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Course Curriculum</h2>
          <div className="space-y-4">
            {course.curriculum?.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gray-100 px-5 py-3 text-gray-800 font-semibold">
                  {item.section}
                </div>
                <ul className="px-6 py-4 space-y-2 text-gray-700 text-sm list-disc">
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CourseEnrollmentModal handlePayment={handlePayment} />
      </Modal>
    </>
  );
}
