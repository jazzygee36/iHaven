"use client";

import HomeButton from "@/components/button";
import { useEffect, useState } from "react";
import slideone from "@/assets/images/banner.avif";
import slidetwo from "@/assets/images/bannertwo.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

const slides = [slideone, slidetwo];

const TextWithCarousel = () => {
    const router = useRouter();
  
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);


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
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-[25px] md:text-3xl font-bold text-gray-800">
            Empowering Northern Nigeria through <span className="bg-gradient-to-r from-[#193A8E] to-[#FF6933] bg-clip-text text-transparent">Digital Innovation</span>.
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
            onClick={() => router.push('/register')}
          />
        </div>

        {/* Carousel */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
          <Image
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            fill
            className="w-full h-full object-cover transition-all duration-500"
          />

        </div>
      </div>
    </section>
  );
};

export default TextWithCarousel;
