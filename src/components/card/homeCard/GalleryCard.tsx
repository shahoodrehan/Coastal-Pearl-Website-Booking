"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

type GalleryProps = {
  images: string[];
};

// Animation for each card
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="w-full relative h-80 aspect-[4/3] rounded-2xl overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // triggers when 20% of card is visible
        >
          {/* Image with hover zoom */}
          <Image
            src={src}
            alt={`Gallery Image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />

          {/* Gradient Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/50 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
          ></div>
        </motion.div>
      ))}
    </div>
  );
}
