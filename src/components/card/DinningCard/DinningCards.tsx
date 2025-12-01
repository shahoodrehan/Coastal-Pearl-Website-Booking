import Image from "next/image";
import React from "react";

const DiningCards: React.FC = () => {
  // Data array inside the component
  const dinningcard = [
    {
      iconSrc: "/icons/kitchen.png",
      title: "Capacity",
      subtitle: "24 guests",
      heading: "Indoor Dining",
      paragraph:
        "Elegant indoor dining space with air conditioning and modern amenities",
      points: [
        "Climate controlled",
        "Premium tableware",
        "Ambient lighting",
        "Sound system",
      ],
    },
    {
      iconSrc: "/icons/white-sun-2.png",
      title: "Capacity",
      subtitle: "40 guests",
      heading: "Outdoor Dining",
      paragraph: "Al fresco dining with ocean views and gentle sea breeze",
      points: [
        "Beachfront seating",
        "Sunset views",
        "Natural ambiance",
        "Covered option",
      ],
    },
    {
      iconSrc: "/icons/white-fire.png",
      title: "Capacity",
      subtitle: "30 guests",
      heading: "BBQ Space",
      paragraph: "Dedicated BBQ area with grills and beachside setup",
      points: [
        "Multiple grills",
        "Prep stations",
        "Outdoor seating",
        "Evening atmosphere",
      ],
    },
    {
      iconSrc: "/icons/white-cup.png",
      title: "Capacity",
      subtitle: "20 guests",
      heading: "Hi-Tea by the Sea",
      paragraph: "Afternoon tea service with ocean panoramas",
      points: [
        "Premium tea selection",
        "Fresh pastries",
        "Seaside setting",
        "Elegant service",
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
      {dinningcard.map((card, idx) => (
        <div
          key={idx}
          className="w-full p-8 rounded-2xl bg-(--bg-beige) shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Top Row: Icon + Title/Subtitle */}
          <div className="flex justify-between items- gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-(--bg-dark) flex items-center justify-center">
              <Image
                src={card.iconSrc}
                alt={card.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-sm opacity-80">{card.title}</p>
              <p className="text-2 opcity-80">{card.subtitle}</p>
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-left mb-2">{card.heading}</h3>

          {/* Paragraph */}
          <p className="text-2 text-left mb-6">{card.paragraph}</p>

          {/* Bullet Points (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {card.points.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image src="/icons/dot.png" alt="" width={6} height={6} />
                <span className="text-sm font-['Inter'] opacity-80">
                  {point}
                </span>
              </div>
            ))}
          </div> 
        </div>
      ))}
    </div>
  );
};

export default DiningCards;
