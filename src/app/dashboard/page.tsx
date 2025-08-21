"use client";
import Dashboard from "@/features/dashboard/page";
import CourseCards from "@/features/home/available-course";
import AutoScrollCardSection from "@/features/home/featured-courses";


import React from "react";


const MainDashboard = () => {


  return (
    <>
      <Dashboard />
      <section className="max-w-7xl mx-auto px-3 md:px-10 py-12">
        <CourseCards />
      </section>
      <AutoScrollCardSection />
    </>
  );
};

export default MainDashboard;
