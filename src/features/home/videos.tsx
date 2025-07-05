"use client";

import { useRef } from "react";

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Intro to Web Dev" },
  { id: 2, src: "https://www.youtube.com/embed/3fumBcKC6RE", title: "UI/UX Masterclass" },
  { id: 3, src: "https://www.youtube.com/embed/rN6nlNC9WQA", title: "Data Analysis Bootcamp" },
  { id: 4, src: "https://www.youtube.com/embed/lTTajzrSkCw", title: "Fullstack Career Guide" },
];

const VideoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-[25px] md:text-3xl font-bold text-center mb-10">Watch Our Training Highlights</h2>

        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ▶
        </button>

        {/* Scrollable Video Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
        >
          {videos.map((video) => (
            <div key={video.id} className="min-w-[300px] w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48"
              />
              <div className="p-3 text-gray-800 font-semibold text-sm">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default VideoCarousel