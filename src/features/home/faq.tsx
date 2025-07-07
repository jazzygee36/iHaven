"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the purpose of the community hubs?",
    answer:
      "Our community hubs are designed to connect and empower developers, designers, and digital creators through meetups, mentorship, and workshops.",
  },
  {
    question: "Are the hubs free to join?",
    answer:
      "Yes, joining any of our community hubs is completely free. Just sign up via the provided form and stay updated on upcoming events.",
  },
  {
    question: "Can I join multiple hubs?",
    answer:
      "Absolutely! You can join as many hubs as you want, especially if you travel between cities or want to collaborate with more communities.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked <span className="text-[#FF6933]">Questions</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-800 font-medium"
            >
              {faq.question}
              <span className="text-[#FF6933] text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
