"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQCards: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How far is the resort from Karachi city?",
      answer:
        "The Coastal Pearl is approximately 45-60 minutes drive from central Karachi, depending on traffic.",
    },
    {
      question: "Can we bring our own food and catering?",
      answer:
        "Yes, outside catering is allowed with prior approval. We also offer in-house catering services.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "We allow well-behaved pets with prior notice and an additional cleaning fee.",
    },
    {
      question: "What is included in the packages?",
      answer:
        "Each package includes property access, amenities, and specific features. Check our Packages page for detailed inclusions.",
    },
    {
      question: "Can we extend our booking?",
      answer:
        "Extensions are subject to availability and can be arranged by contacting us in advance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-0 md:px-6 flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-(--bg-beige) text-(--text-dark) p-8 rounded-2xl cursor-pointer"
          onClick={() => toggleFAQ(idx)}
        >
          {/* Question + Icon */}
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{faq.question}</h4>

            {/* UPDATED BIGGER SVG (24px) */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            {/* 🔥 EXACT SAME SIZE YOU USED IN STATIC CARD → text-2 */}
            <p className="text-2 text-left">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCards;
