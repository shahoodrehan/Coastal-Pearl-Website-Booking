import Image from "next/image";
import React from "react";

type activitiesCard = {
  iconSrc: string;
  title: string;
  subtitle: string;
  price: string;
};

const activitycard: activitiesCard[] = [
  {
    iconSrc: "/icons/seaview.png",
    title: "Sea View",
    subtitle: "Direct beach access with stunning ocean panoramas",
    price:"PKR 2,500 / 15 mins"
  },
  {
    iconSrc: "/icons/pool.png",
    title: "Private Pool",
    subtitle: "Exclusive infinity pool overlooking the sea",
    price:"PKR 2,500 / 15 mins"
  },
  {
    iconSrc: "/icons/luxury.png",
    title: "Luxury Rooms",
    subtitle: "Elegantly designed spaces with premium amenities",
    price:"PKR 2,500 / 15 mins"
  },
  {
    iconSrc: "/icons/events.png",
    title: "Events",
    subtitle: "Perfect venue for celebrations and gatherings",
    price:"PKR 2,500 / 15 mins"
  },
];

const ActivityCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {activitycard.map((card, idx) => (
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
    bg-gradient-to-br
    from-[rgba(174,198,207,0.5)]
    to-[#F5EFE7]
  "
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-[#aec6cf]">
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
          <p
            className="text-[16px] text-(--text-beige)"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "28.8px",
              letterSpacing: "-0.48px",
            }}
          >
            {card.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ActivityCards;
