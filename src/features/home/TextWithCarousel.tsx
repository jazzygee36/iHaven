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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full  mx-auto p-6 bg-gradient-to-br from-[#f5f8ff] to-[#e6f0ff]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Block */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-[26px] md:text-4xl font-extrabold text-gray-900 leading-snug">
            Empowering Northern Nigeria through{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] to-[#FF5722] bg-clip-text text-transparent">
              Digital Innovation
            </span>
            .
          </h2>
          <p className="text-gray-700 text-[16px]">
            Transform your future with comprehensive digital skills training.
            Learn from industry experts, build real projects, and secure
            guaranteed internship placements in Nigeria's fastest-growing tech
            sector.
          </p>

          <HomeButton
            title={"Start your Journey"}
            type={"button"}
            bg={"#FF5722"}
            width={""}
            height={"45px"}
            onClick={() => router.push("/register")}
          />
        </div>

        {/* Carousel */}
        <div
          className="relative w-full h-full rounded-xl overflow-hidden shadow-xl"
          data-aos="fade-left"
        >
          <Image
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            fill
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default TextWithCarousel;
