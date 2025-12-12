"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const floors = [
  {
    src: "/images/ground-floor.jpg",
    title: "Ground Floor",
    description: "Spacious lounge, private pool, VIP facilities",
    link: "/ground-floor",
  },
  {
    src: "/images/first-floor.jpg",
    title: "First Floor",
    description: "Sea-facing bedrooms, theatre lounge, mini kitchen",
    link: "/first-floor",
  },
  {
    src: "/images/terris.jpg",
    title: "Top Floor Terrace",
    description: "Rooftop terrace with kitchenette, event capacity",
    link: "/top-floor",
  },
];

// Container variant for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // use cubic-bezier array
    },
  },
};

function SpacesCards() {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% of container is in view
    >
      {floors.map((item, index) => (
        <motion.div
          key={index}
          className="w-full h-[480px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          variants={cardVariants}
        >
          {/* Image Section */}
          <div className="h-[55%] w-full relative">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="h-[45%] p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-left">{item.title}</h4>
              <p className="text-2 text-left opacity-90">{item.description}</p>
            </div>

            <Link
              href={item.link}
              className="text-2 flex items-center gap-2 mt-3"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-[2px]"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SpacesCards;
