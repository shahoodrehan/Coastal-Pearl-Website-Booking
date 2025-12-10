"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const guestData = [
  {
    comment:
      '"An unforgettable experience. The perfect blend of luxury and nature."',
    name: "Javed Shaikh",
    designation: "Celebrity",
  },
  {
    comment: '"The Coastal Pearl is a hidden gem. Absolutely stunning!"',
    name: "Nadia Hussain",
    designation: "Fashion Icon",
  },
  {
    comment: '"The best beachside resort in Karachi. Highly recommended!"',
    name: "Ahsan Khan",
    designation: "The Actor",
  },
];

// Variants for parent container to stagger children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }, // simple duration avoids TS error
  },
};

export default function GuestCards() {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // trigger when 30% of the grid is visible
    >
      {guestData.map((guest, index) => (
        <motion.div
          key={index}
          className="bg-[var(--bg-beige)] p-8 rounded-2xl flex flex-col items-start 
             shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={cardVariants}
        >
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Image
                key={idx}
                src="/icons/rating.png" // path to your star image
                alt="star"
                width={16}
                height={16}
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-2 text-left mb-8 opacity-80">{guest.comment}</p>

          {/* Guest Name */}
          <p className="text-2 text-left">{guest.name}</p>

          {/* Guest Designation */}
          <p className="text-[#063D62A6] text-[14px]">{guest.designation}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
