// src/app/dashboard/page.tsx (or components/dashboard/Dashboard.tsx)
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthGuard from "@/hooks/authGuard";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/lib/profile"; // your profile fetcher

const Dashboard = () => {
  const router = useRouter();

    const { data: profile, isLoading } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
    });

  const courseStats = [
    { label: "Total Courses", value: 12, color: "bg-blue-100 text-blue-800" },
    { label: "Completed", value: 7, color: "bg-green-100 text-green-800" },
    { label: "In Progress", value: 5, color: "bg-yellow-100 text-yellow-800" },
  ];

  const recentCourses = [
    {
      title: "Introduction to HTML & CSS",
      image: "/images/course1.jpg",
      progress: 100,
    },
    {
      title: "JavaScript Basics",
      image: "/images/course2.jpg",
      progress: 45,
    },
    {
      title: "Responsive Web Design",
      image: "/images/course3.jpg",
      progress: 80,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          👋 Welcome back, {isLoading ? (
            <span className="italic text-gray-400">Loading...</span>
          ) : (
            profile?.fullNames || "User"
          )}
        </h1>
        <p className="text-gray-600 mt-1">Let’s keep building your skills.</p>
      </div>

      
      
    </div>
  );
};

export default Dashboard;
