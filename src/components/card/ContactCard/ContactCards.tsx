import Image from "next/image";
import React from "react";

type Cards = {
  iconSrc: string;
  title: string;
  detail1: string;
  detail2: string;
};

const contactcard: Cards[] = [
  {
    iconSrc: "/icons/white-location.png",
    title: "Location",
    detail1: "Resort No 115/38B,",
    detail2: "Hawksbay Road Near Dua Resturaunt, Karachi",
  },
  {
    iconSrc: "/icons/white-phone.png",
    title: "Phone",
    detail1: "+92 321-8200150",
    detail2: "+92 322-2270908",
  },
  {
    iconSrc: "/icons/white-mail.png",
    title: "Email",
    detail1: "thecoastalp@gmail.com",
    detail2: "bookings@coastalpearl.com",
  },
  {
    iconSrc: "/icons/white-clock.png",
    title: "Hours",
    detail1: "24/7 Booking Support",
    detail2: "Assist Anytime You Need",
  },
];

const ContactCards: React.FC = () => {
  return (
    <div className="w-full max-w-[1368px] mx-auto px-4 lg:px-0 flex flex-wrap justify-between gap-6">
      {contactcard.map((card, idx) => (
        <div
          key={idx}
          className="
    w-full sm:w-[48%] lg:w-[23%]
    flex flex-col items-center text-center
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
            {card.detail1}
          </p>
          <p
            className="text-[17px]"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "28.8px",
              letterSpacing: "-0.48px",
            }}
          >
            {card.detail2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
