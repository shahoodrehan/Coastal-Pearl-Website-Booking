import Image from "next/image";
import React from "react";

type Occasioncards = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const occasion: Occasioncards[] = [
  {
    iconSrc: "/icons/party.png",
    title: "Birthday Celebrations",
    subtitle:
      "Create unforgettable memories with beach-themed birthday parties for all ages",
  },
  {
    iconSrc: "/icons/white-heart.png",
    title: "Engagements & Nikkah",
    subtitle:
      "Intimate ceremonies with stunning ocean backdrops and elegant settings",
  },
  {
    iconSrc: "/icons/suitcase.png",
    title: "Corporate Events",
    subtitle:
      "Professional venues for team building, conferences, and corporate gatherings",
  },
  {
    iconSrc: "/icons/camera.png",
    title: "Photoshoots",
    subtitle:
      "Premium locations for fashion, pre-wedding, and commercial photography",
  },
];

const OccasionCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {occasion.map((card, idx) => (
        <div
          key={idx}
          className="
    w-full sm:w-[48%] lg:w-[23%]
    flex flex-col items-start text-left
    p-8 rounded-[16px]
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-2
    transition-all duration-300 ease-out
  "
          style={{ backgroundColor: "var(--bg-beige)" }}
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-(--bg-dark)">
            <Image src={card.iconSrc} alt={card.title} width={32} height={32} />
          </div>

          {/* Title */}
          <h4
            className="mb-3 text-[24px] font-semibold"
            style={{
              fontFamily: "Playfair Display",
              fontWeight: 600,
              lineHeight: "28.8px",
              letterSpacing: "-0.48px",
            }}
          >
            {card.title}
          </h4>

          {/* Subtitle */}
          <p
            className="text-[17px]"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "28.8px",
              letterSpacing: "-0.48px",
            }}
          >
            {card.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OccasionCards;
