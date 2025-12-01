import Image from "next/image";
import React from "react";

type TeaCard = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const teacard: TeaCard[] = [
  {
    iconSrc: "/icons/brown-cup.png",
    title: "Sea View",
    subtitle: "Direct beach access with stunning ocean panoramas",
  },
  {
    iconSrc: "/icons/brown-cup.png",
    title: "Private Pool",
    subtitle: "Exclusive infinity pool overlooking the sea",
  },
  {
    iconSrc: "/icons/brown-cup.png",
    title: "Luxury Rooms",
    subtitle: "Elegantly designed spaces with premium amenities",
  },
];

const TeaCard: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {teacard.map((card, idx) => (
        <div
          key={idx}
          className="
    w-full sm:w-[48%] lg:w-[30%]
    flex flex-col items-center text-left
    p-8 rounded-[16px]
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-2
    transition-all duration-300 ease-out
  "
          style={{ backgroundColor: "var(--bg-light)" }}
        >
          {/* Icon */}
          
            <Image src={card.iconSrc} alt={card.title} width={48} height={48} className="mb-4"/>
          

          {/* Title */}
          <h4
            className="mb-3 text-[24px]"
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
            className="text-2 text-center"
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

export default TeaCard;
