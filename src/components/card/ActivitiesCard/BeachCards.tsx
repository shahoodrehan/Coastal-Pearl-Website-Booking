import Image from "next/image";
import React from "react";

type activitiesCard = {
  iconSrc: string;
  title: string;
  subtitle: string;
  price: string;
};

const beachcard: activitiesCard[] = [
  {
    iconSrc: "/icons/seaview.png",
    title: "Camel Ride",
    subtitle: "Traditional beachside experience",
    price: "PKR 500 / ride",
  },
  {
    iconSrc: "/icons/seaview.png",
    title: "Horse Ride",
    subtitle: "Gallop along the pristine shoreline",
    price: "PKR 800 / ride",
  },
  {
    iconSrc: "/icons/seaview.png",
    title: "Beach Bonfire",
    subtitle: "Evening gatherings under the stars",
    price: "Included in packages",
  },

  {
    iconSrc: "/icons/seaview.png",
    title: "Beach Games",
    subtitle: "Volleyball, cricket, and more",
    price: "Complimentary",
  },
  {
    iconSrc: "/icons/seaview.png",
    title: "BBQ Setup",
    subtitle: "Beachside grilling experience",
    price: "PKR 5,000 setup",
  },
  {
    iconSrc: "/icons/seaview.png",
    title: "Beach Walk",
    subtitle: "Guided sunset strolls",
    price: "Complimentary",
  },
];

const BeachCards: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {beachcard.map((card, idx) => (
        <div
          key={idx}
          className="
            w-full
            p-8 rounded-[16px]
            shadow-sm
            hover:shadow-xl hover:-translate-y-2
            transition-all duration-300 ease-out
            bg-(--bg-light)
            flex flex-col
          "
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-[var(--bg-beige2)]">
            <Image src={card.iconSrc} alt={card.title} width={32} height={32} />
          </div>

          {/* Title */}
          <h4 className="text-[24px] font-semibold font-['Playfair_Display'] leading-[28.8px] text-left mb-3">
            {card.title}
          </h4>

          {/* Subtitle */}
          <p className="text-[17px] font-['Inter'] leading-[28px] text-left mb-4">
            {card.subtitle}
          </p>

          {/* Price */}
          <p className="text-[16px] text-[var(--text-dark)] font-['Inter'] leading-[24px] text-left">
            {card.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BeachCards;
