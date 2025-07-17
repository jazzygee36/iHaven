"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "@/api/lib/all-course";



const AutoScrollCardSection = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

 
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth =
        (container.firstChild as HTMLElement | null)?.clientWidth || 300;

      setScrollIndex((prev) => {
        const next = prev + 1;
        container.scrollTo({
          left: next * (cardWidth + 24), // 24px gap
          behavior: "smooth",
        });
        return next >= courses.length - 2 ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const microCourses = courses.filter((micro: any) => micro.category === "micro");

  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#f3f4f6] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[25px] md:text-3xl font-bold text-center text-gray-900 mb-10">
          Featured <span className="text-[#FF5722]">Micro-Courses</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
        >
          {microCourses.map((card: any, index: any) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out flex-shrink-0"
            >
              <div className="relative w-full h-40">
                {typeof card.image === "string" && card.image.trim() !== "" ? (
                  <Image
                    src={card.image}
                    alt={"course"}
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

              <div className="p-4 space-y-2">
                <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
                  {card.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">⏱ {card.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScrollCardSection;
