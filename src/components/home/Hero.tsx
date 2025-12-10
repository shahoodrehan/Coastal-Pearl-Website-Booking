import { ReactNode } from "react";
import { motion } from "motion/react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  height?: string;
  buttons?: ReactNode[];
  children?: ReactNode; // <-- add children prop
}

function Hero({
  title,
  subtitle,
  backgroundImage,
  height = "70vh",
  buttons,
  children, // <-- destructure children
}: HeroProps) {
  return (
    <section
      className="w-full flex flex-col pt-10 md:py-0 items-center justify-center text-center bg-cover bg-center"
      style={{
        height: height,
        backgroundImage: `
          linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%),
          url(${backgroundImage})
        `,
      }}
    >
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-text mt-4"
        >
          {subtitle}
        </motion.p>

        {buttons && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex gap-4 justify-center flex-wrap"
          >
            {buttons.map((btn, index) => (
              <div key={index}>{btn}</div>
            ))}
          </motion.div>
        )}

        {/* Children Section */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 w-full flex flex-col items-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Hero;
