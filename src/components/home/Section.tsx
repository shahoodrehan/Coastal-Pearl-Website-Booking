import { motion } from "motion/react";
type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  buttons?: React.ReactNode[];
  bgColor?: "bg-light" | "bg-beige" | "bg-dark";
  className?: string;
  backgroundImage?: string;
  height?: string;
  titleColor?: string;
  subtitleColor?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  buttons,
  bgColor = "bg-light",
  className = "",
  backgroundImage,
  height = "auto",
  titleColor = "var(--text-dark)",
  subtitleColor = "var(--text-dark)",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  const bgStyle = backgroundImage
    ? {
        height: height,
        backgroundImage: `
          linear-gradient(180deg, #0A3D62B2, #0A3D62B2),
          url(${backgroundImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor:
          bgColor === "bg-light"
            ? "#ffffff"
            : bgColor === "bg-dark"
            ? "var(--bg-dark)"
            : "var(--bg-beige)",
      };

  return (
    <section
      className={`w-full flex flex-col items-center text-center px-4 py-12 md:px-8 md:py-24 ${className}`}
      style={bgStyle}
    >
      <div className="mb-16 w-[60%] max-[769px]:w-[90%] max-[425px]:w-full">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-5xl font-bold mb-4 ${titleClassName}`}
          style={{ color: titleColor }}
        >
          {title}
        </motion.h2>

        {/* Animated Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-1 ${subtitleClassName}`}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {children && (
        <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
          {children}
        </div>
      )}

      {buttons && buttons.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {buttons.map((btn, idx) => (
            <span key={idx}>{btn}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
