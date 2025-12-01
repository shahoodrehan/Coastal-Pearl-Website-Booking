import Image from "next/image";
import React from "react";

type SectionItem = {
  icon?: React.ReactNode; // can be text, emoji, icon component
  title: string;
  description: string;
  image: string;
};

const Journey: React.FC = () => {
  const timelineData = [
    {
      icon: "2018",
      title: "The Vision",
      description:
        "The concept of The Coastal Pearl was conceived, inspired by the world's finest beach resorts and adapted to showcase the unique beauty of Pakistan's coastline.",
      image: "/images/space-1.jpg",
    },
    {
      icon: "2019",
      title: "Design & Planning",
      description:
        "Our team of architects and designers worked tirelessly to create a space that would harmonize luxury with nature, incorporating sustainable practices and local aesthetics.",
      image: "/images/space-1.jpg",
    },
    {
      icon: "2020",
      title: "Construction Begins",
      description:
        "Breaking ground on our dream, we began building with a commitment to quality and attention to every detail, from foundation to finishing touches.",
      image: "/images/space-1.jpg",
    },
    {
      icon: "2021",
      title: "Grand Opening",
      description:
        "The Coastal Pearl opened its doors, welcoming guests to experience a new standard of coastal luxury in Karachi.",
      image: "/images/space-1.jpg",
    },
    {
      icon: "2024",
      title: "Today",
      description:
        "We continue to evolve and enhance our offerings, maintaining our position as the premier beachside resort destination in Hawksbay.",
      image: "/images/space-1.jpg",
    },
  ];

  return (
    <div className="w-[94%] mx-auto px-0 md:px-0 lg:px-8 flex flex-col gap-10">
      {timelineData.map((item, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 
              ${isReversed ? "md:flex-row-reverse" : ""}`}
          >
            {/* LEFT / RIGHT CONTENT */}
            <div
              className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4 bg-white p-8 rounded-2xl"
              style={{
                boxShadow:
                  "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
              }}
            >
              <div className="w-[auto] rounded-full bg-[var(--bg-dark)] text-white py-2 px-4 flex items-center justify-center ">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              {/* Description */}
              <p className="text-2 text-left opacity-80 leading-7">
                {item.description}
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[320px] md:h-[320px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
