"use client";

import HomeButton from "@/components/button";
import { useEffect, useState } from "react";
import slideone from "@/assets/images/banner.avif";
import slidetwo from "@/assets/images/bannertwo.webp";
import Image from "next/image";

const slides = [slideone, slidetwo];

const TextWithCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto p-6 bg-[#1a1a1a33]/[0.30]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Block */}
        <div className="space-y-6">
          <h2 className="text-[25px] md:text-3xl font-bold text-gray-800">
            Empowering Northern Nigeria through Digital Innovation
          </h2>
          <p className="text-gray-600">
            Transform your future with comprehensive digital skills training.
            Learn from industry experts, build real projects, and secure
            guaranteed internship placements in Nigeria's fastest-growing tech
            sector.
          </p>

          <HomeButton
            title={"Start your Journey"}
            type={"button"}
            bg={"#FF6933"}
            width={""}
            height={"45px"}
          />
        </div>

        {/* Carousel */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            fill
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
          >
            ▶
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TextWithCarousel;
