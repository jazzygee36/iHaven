"use client";
import { useState } from "react";
import Image from "next/image";
import { courses } from "@/utils/courses"; 

type TabType = "inprogress" | "completed" | "wishlist";

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<TabType>("inprogress");

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "completed") return course.progress === 100;
    if (activeTab === "wishlist") return course.progress === 0;
    return course.progress > 0 && course.progress < 100;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#193A8E] mb-4">My Learning</h1>
      <p className="text-gray-600 mb-8">
        Track your learning progress and pick up where you left off.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        {(["inprogress", "completed", "wishlist"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-3 capitalize border-b-2 text-sm font-medium ${
              activeTab === tab
                ? "border-[#FF6933] text-[#FF6933]"
                : "border-transparent text-gray-500 hover:text-[#FF6933]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={
                    typeof course.image === "string"
                      ? course.image
                      : course.image.src
                  }
                  alt={course.course}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {course.course}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-[#193A8E] h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {course.progress}% complete
                </p>
                <button className="text-sm font-medium text-white bg-[#FF6933] px-4 py-2 rounded-full">
                  {course.progress === 100
                    ? "View Certificate"
                    : "Resume Learning"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No courses in this tab.</p>
      )}
    </div>
  );
}
