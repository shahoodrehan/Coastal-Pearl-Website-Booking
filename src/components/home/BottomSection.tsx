import React from "react";

type BottomComponentProps = {
  title: string;
  subtitle?: string;
  paragraph?: string;
  children?: React.ReactNode;       // added children
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
      className={`w-full flex flex-col items-center text-center px-4 md:px-8 py-24 ${className}`}
      style={bgStyle}
    >
      <div className="mb-16 w-[60%]">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${titleClassName}`}
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`text-lg mb-4 ${subtitleClassName}`}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        )}

        {paragraph && (
          <p className="text-base mb-8 text-3" style={{ color: paragraphColor }}>
            {paragraph}
          </p>
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
