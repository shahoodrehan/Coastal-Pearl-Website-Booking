import React from "react";
import { motion } from "motion/react";

type BottomComponentProps = {
  title: string;
  subtitle?: string;
  paragraph?: string;
  children?: React.ReactNode; // added children
  backgroundImage?: string;
  bgColor?: string;
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
  paragraphColor?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const BottomSection: React.FC<BottomComponentProps> = ({
  title,
  subtitle,
  paragraph,
  children,
  backgroundImage,
  bgColor = "#eff4f5",
  className = "",
  titleColor = "var(--bg-dark)",
  subtitleColor = "var(--bg-dark)",
  paragraphColor = "var(--bg-dark)",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, #0A3D62B2, #0A3D62B2), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: bgColor,
      };

  return (
    <section
      className={`w-full flex flex-col items-center text-center px-4 md:px-8 py-12 md:py-24 ${className}`}
      style={bgStyle}
    >
      <div className="mb-16 w-[100%] md:w-[60%]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl md:text-5xl font-bold mb-4 ${titleClassName}`}
          style={{ color: titleColor }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg mb-4 ${subtitleClassName}`}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </motion.p>
        )}

        {paragraph && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base mb-8 text-3"
            style={{ color: paragraphColor }}
          >
            {paragraph}
          </motion.p>
        )}
      </div>

      {/* Children */}
      {children && (
        <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
          {children}
        </div>
      )}
    </section>
  );
};

export default BottomSection;
