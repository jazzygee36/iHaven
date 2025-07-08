import React from "react";
import Image from "next/image";

const Testimony = () => {
  return (
    <section className="bg-[#FF6933]/[0.10] via-[#E8ECFF] to-[#DDE3FF] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="flip-left">
          {[
            {
              name: "Amina Musa",
              role: "UI/UX Designer at SoftPro",
              quote:
                "Joining iHaven transformed my career — I landed my dream role within 3 months!",
            },
            {
              name: "Muhammed Bello",
              role: "Backend Developer at Finhub",
              quote:
                "From complete beginner to building APIs. iHaven gave me clarity and confidence.",
            },
            {
              name: "Ibrahim Yusuf",
              role: "Data Analyst Intern",
              quote:
                "The hands-on projects and mentors helped me believe in myself. Highly recommend.",
            },
          ].map((student, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border border-white/50"
            >
              <Image
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="Quote"
                className="w-6 h-6 mb-4 opacity-80"
                width={100}
                height={100}
              />
              <p className="text-gray-700 italic text-base leading-relaxed mb-6">
                “{student.quote}”
              </p>
              <h4 className="font-semibold text-lg text-[#193A8E]">
                {student.name}
              </h4>
              <p className="text-sm text-gray-500">{student.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
