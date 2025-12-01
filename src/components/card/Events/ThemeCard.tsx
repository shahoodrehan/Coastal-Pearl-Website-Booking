import Image from "next/image";
import React from "react";

type ThemeCards = {
  iconSrc: string;
  title: string;
  subtitle: string;
  point1: string;
  point2: string;
  point3: string;
};

const themecard: ThemeCards[] = [
  {
    iconSrc: "/icons/cookie.png",
    title: "Beach Elegance",
    subtitle: "White & gold theme with coastal accents",
    point1: "Floral arrangements",
    point2: "Draped fabrics",
    point3: "Ambient lighting",
  },
  {
    iconSrc: "/icons/cookie.png",
    title: "Romantic Setup",
    subtitle: "Soft pastels and fairy lights",
    point1: "Rose petals",
    point2: "Candlelight",
    point3: "String lights",
  },
  {
    iconSrc: "/icons/cookie.png",
    title: "Grand Celebration",
    subtitle: "Luxurious and opulent decor",
    point1: "Stage setup",
    point2: "Premium centerpieces",
    point3: "LED lighting",
  },
  {
    iconSrc: "/icons/cookie.png",
    title: "Custom Theme",
    subtitle: "Tailored to your vision",
    point1: "Personalized design",
    point2: "Color scheme",
    point3: "Special props",
  },
];

const ThemeCards: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {themecard.map((card, idx) => (
    <div
      key={idx}
      className="
        w-full
        p-8 rounded-[16px]
        shadow-sm
        hover:shadow-xl hover:-translate-y-2
        transition-all duration-300 ease-out
        bg-(--bg-beige)
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
      <p className="text-sm font-['Inter'] leading-[28px] text-left mb-4 opacity-80">
        {card.subtitle}
      </p>

      {/* Points */}
      <div className="flex flex-col gap-3 mt-2">
        {[card.point1, card.point2, card.point3].map((pt, i) => (
          <div key={i} className="flex items-center gap-3">
            <Image
              src="/icons/dot.png" 
              alt="check icon"
              width={6}
              height={6}
            />
            <span className="text-sm font-['Inter'] opacity-80">{pt}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

  );
};

export default ThemeCards;
