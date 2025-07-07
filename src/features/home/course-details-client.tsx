// components/CourseDetailsClient.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { loadPaystackScript } from "@/components/paystack";
import HomeButton from "@/components/button";
import BackArrow from "@/assets/icons/back-arrow";

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
  };
}

export default function CourseDetailsClient({ course }: Props) {
  const handlePayment = async () => {
    const scriptLoaded = await loadPaystackScript();
    if (!scriptLoaded) return alert("Failed to load Paystack. Try again.");

    const rawPrice = course.price.replace(/[^0-9.]/g, ""); // Remove ₦, commas, etc.
    const amountInKobo = Math.floor(Number(rawPrice) * 100);

    if (isNaN(amountInKobo)) {
      return alert("Invalid course price.");
    }

    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_bb303c70de3d313ccf557c37b226540818e7fc03',
      email: "testuser@example.com", // Replace with user email
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
      },
    //   onClose: () => {
    //     alert("Payment modal closed");
    //   },
    });

    handler.openIframe();
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="my-4">
        <BackArrow />
      </div>
      <div className="relative w-full h-64">
        <Image
          src={course.image}
          alt={course.course}
          fill
          className="object-cover rounded-lg shadow"
        />
      </div>
      <div className="mt-8 space-y-4 flex w-full md:w-1/2 flex-col m-auto">
        <h1 className="text-3xl font-bold text-gray-800">{course.course}</h1>
        <p className="text-gray-500 border-b pb-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Instructor:</p>
          <p className="text-gray-500">{course.title}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Level:</p>
          <p className="text-gray-600 font-semibold">{course.level}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Duration:</p>
          <p className="text-gray-600 font-semibold">{course.duration}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Price</p>
          <p className="text-lg font-semibold text-green-700">{course.price}</p>
        </div>
        <HomeButton
          title={"Enroll Now"}
          type={"button"}
          bg={"#FF6933"}
          width={""}
          height={"45px"}
          onClick={handlePayment}
        />
      </div>
    </section>
  );
}
