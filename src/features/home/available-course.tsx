"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react"; 

const courses = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    title: "Samson",
    course: "Web Development",
    price: "₦50,000",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    title: "Gbenga",
    course: "Mobile Development",
    price: "₦50,000",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    title: "Feranmi",
    course: "Data Science",
    price: "₦50,000",
    duration: "10 Weeks",
    level: "Advanced",
    rating: 4,
  },
];

type Course = {
  image: string;
  title: string;
  course: string;
  price: string;
  duration: string;
  level: string;
  rating: number;
};

const CourseCards = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-10 py-12">
      <h2 className="text-[25px] md:text-3xl font-bold text-center text-gray-800 mb-10">
        Our Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course:any, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCourse(course)}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            <img
              src={course.image}
              alt={course.course}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`px-3 py-1 rounded-full font-medium ${
                    course.level === "Beginner"
                      ? "bg-yellow-100 text-yellow-700"
                      : course.level === "Intermediate"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.level}
                </span>

                <span className="text-yellow-500 flex items-center gap-1">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {course.course}
              </h3>
              <p className="text-sm text-gray-500">Instructor: {course.title}</p>

              <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  {course.price}
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {course.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <Dialog
          open={true}
          onClose={() => setSelectedCourse(null)}
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto">
            <Dialog.Title className="text-xl font-bold mb-4">
              {selectedCourse.course}
            </Dialog.Title>
            <p className="mb-2">Instructor: {selectedCourse.title}</p>
            <p className="mb-2">Duration: {selectedCourse.duration}</p>
            <p className="mb-4">Price: {selectedCourse.price}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
}

export default CourseCards