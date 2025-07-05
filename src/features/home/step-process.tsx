import React from "react";

const StepProcess = () => {
  return (
    <section className="bg-[#f9fafb] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Choose Your Course",
              desc: "Pick from our wide range of in-demand tech courses tailored to your interest.",
            },
            {
              step: "2",
              title: "Join a Hub or Learn Online",
              desc: "Get hands-on training with expert mentors at our hubs or remotely.",
            },
            {
              step: "3",
              title: "Graduate + Get Placed",
              desc: "Build real projects, earn a certificate, and access internship opportunities.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#FF6933] text-white font-bold rounded-full mb-4 text-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepProcess;
