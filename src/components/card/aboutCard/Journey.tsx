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
      icon: "/icons/white-heart.png",
      title: "What We Believe",
      description:
        "At The Coastal Pearl Resort, hospitality is not a checklist. It’s an attitude. We believe: Guests should feel welcome, not managed Luxury should feel effortless",
      image: "/images/vision.jpg",
    },
    {
      icon: "/icons/white-heart.png",
      title: "Spaces Designed With Purpose",
      description:
        "From cozy indoor lounges to open-air seating, from carefully designed rooms to beach-facing setups, nothing exists by accident. Our interiors are calm, neutral, and inviting.",
      image: "/images/design.jpg",
    },
    {
      icon: "/icons/white-heart.png",
      title: "More Than Just a Stay",
      description:
        "Coastal Pearl Resort grown into a destination for: Private stays and family getaways Corporate offsites and curated events Beachside dinners and cabana setups Photoshoots, ",
      image: "/images/construction.jpg",
    },
    {
      icon: "/icons/white-heart.png",
      title: "Rooted in Karachi’s Coast",
      description:
        "We see beauty in the rawness, potential in the silence, and pride in offering a space that reflects a positive image of Karachi’s beaches. ",
      image: "/images/opening.jpeg",
    },
    {
      icon: "/icons/white-heart.png",
      title: "Looking Ahead",
      description:
        "Our journey is still unfolding. With upcoming experiences like beach cabanas, curated setups, and expanded guest services, we continue to grow thoughtfully. ",
      image: "/images/today.jpg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-0 lg:px-0 flex flex-col gap-10">
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
              <div className="w-[auto] rounded-full bg-[var(--bg-dark)] text-white py-2 px-4 flex items-center justify-center">
                <Image src={item.icon} alt="Icon" width={20} height={20} />
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
