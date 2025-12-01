import Image from "next/image";
import React from "react";

type ChooseUsCard = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const chooseUs: ChooseUsCard[] = [
  {
    iconSrc: "/icons/seaview.png",
    title: "Sea View",
    subtitle: "Direct beach access with stunning ocean panoramas",
  },
  {
    iconSrc: "/icons/pool.png",
    title: "Private Pool",
    subtitle: "Exclusive infinity pool overlooking the sea",
  },
  {
    iconSrc: "/icons/luxury.png",
    title: "Luxury Rooms",
    subtitle: "Elegantly designed spaces with premium amenities",
  },
  {
    iconSrc: "/icons/events.png",
    title: "Events",
    subtitle: "Perfect venue for celebrations and gatherings",
  },
];

const ChooseHome: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {chooseUs.map((card, idx) => (
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
          style={{ backgroundColor: "var(--bg-light)" }}
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-[#eff4f5]">
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

export default ChooseHome;
