import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between cards
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // ✅ must be one of Framer Motion's predefined easings
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {chooseUs.map((card, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
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
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-[#eff4f5]">
            <Image src={card.iconSrc} alt={card.title} width={32} height={32} />
          </div>

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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ChooseHome;
