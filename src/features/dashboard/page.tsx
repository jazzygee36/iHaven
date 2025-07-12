// src/app/dashboard/page.tsx (or components/dashboard/Dashboard.tsx)
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/lib/profile"; // your profile fetcher

const Dashboard = () => {
  const router = useRouter();

    const { data: profile, isLoading } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
    });

 

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
