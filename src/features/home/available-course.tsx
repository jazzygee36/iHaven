"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeButton from "@/components/button";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "@/api/lib/all-course";
import { CourseProps } from "@/utils/interface"; // ✅ Ensure this is accurate
import { getAllCoursesDashboard } from "@/api/lib/all-courses.dashboard";

const itemsPerPage = 4;

const CourseCards = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCoursesDashboard,
  });


  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const currentCourses = courses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (isLoading) {
    return <p className="text-center py-10">Loading courses...</p>;
  }

  if (!courses.length) {
    return <p className="text-center py-10">No courses available.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-3 md:px-10 py-12 bg-white">
      <h2 className="text-[25px] md:text-3xl font-bold text-center text-gray-800 mb-10">
        Our Popular Courses
      </h2>

      <div className="overflow-hidden transition-all duration-700 ease-in-out">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {currentCourses?.map((course: CourseProps, index: any) => (
            <Link
              key={index}
              href={`/course-details/${course._id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative w-full h-48">
                {typeof course.image === "string" &&
                course.image.trim() !== "" ? (
                  <Image
                    src={course.image}
                    alt={course.title || "Course Image"}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-lg">
                    No image
                  </div>
                )}
              </div>

              <div className="p-2 md:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Duration:</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Instructor:</span>
                  <p className="text-sm text-gray-500 truncate max-w-[60px] sm:max-w-none">
                    {course.instructorsName}
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    ₦{course.price}
                  </span>
                  <span className="underline text-[#FF6933] px-3 py-1 rounded-full font-medium">
                    Enroll
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {courses.length > itemsPerPage && (
        <div className="mt-10 text-center m-auto flex justify-center items-center">
          <HomeButton
            title="See Next"
            type="button"
            bg="#FF6933"
            width=""
            height="40px"
            onClick={handleNext}
          />
        </div>
      )}
    </section>
  );
};

export default CourseCards;
