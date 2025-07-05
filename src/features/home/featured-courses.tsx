"use client";

import { useEffect, useRef, useState } from "react";
import ReactLogo from "@/assets/images/reactlogo.svg";
import Css from "@/assets/images/css.avif";
import Backend from "@/assets/images/node.webp";
import Ui from "@/assets/images/ui.webp";
import Typescript from "@/assets/images/typescript.webp";
import Image from "next/image";

const cards = [
  {
    title: "Learn React in 4 Weeks",
    category: "Frontend",
    duration: "4 Weeks",
    image: ReactLogo,
  },
  {
    title: "Master Tailwind CSS",
    category: "Styling",
    duration: "2 Weeks",
    image: Css,
  },
  {
    title: "Backend with Node.js",
    category: "Server-side",
    duration: "6 Weeks",
    image: Backend,
  },
  {
    title: "UI/UX Design Basics",
    category: "Design",
    duration: "3 Weeks",
    image: Ui,
  },
  {
    title: "Intro to TypeScript",
    category: "Frontend",
    duration: "2 Weeks",
    image: Typescript,
  },
];

const AutoScrollCardSection = () => {
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
          left: next * (cardWidth + 16),
          behavior: "smooth",
        });
        return next >= cards.length - 2 ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f9fafb] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[25px] md:text-3xl font-bold text-center text-gray-800 mb-10">
          Featured Micro-Courses
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex-shrink-0"
            >
              <div className="relative w-full h-40">
                <Image
                  src={card.image.src}
                  alt={card.title}
                  fill
                  className="w-full h-40 object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <p className="text-xs font-medium text-indigo-600">
                  {card.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
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
