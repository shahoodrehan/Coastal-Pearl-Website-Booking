import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "beige";
  fullWidth?: boolean;
  width?: "auto" | "full" | "responsive";
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  radius?: "full" | "md";

  arrow?: boolean; // NEW → control arrow icon
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  width,
  iconSrc,
  iconAlt = "icon",
  size = "sm",
  radius = "md",
  onClick,
  arrow = false, // default false
}) => {
  const baseClasses =
    "font-inter font-normal text-[16px] flex items-center justify-center gap-2 transition-colors duration-300";

  const sizeClasses = size === "lg" ? "px-8 py-4" : "px-6 py-3";

  const radiusClasses = radius === "full" ? "rounded-full" : "rounded-[16px]";

  const widthClasses =
    width === "full"
      ? "w-full"
      : width === "responsive"
      ? "w-full md:w-auto"
      : "w-auto";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#0A3D62] text-[#FFFFFF] hover:bg-[#D1C1A7] hover:text-[#0A3D62]";
      break;
    case "secondary":
      variantClasses =
        "bg-[#D1C1A7] text-[#0A3D62] hover:bg-[#FFFFFF] hover:text-[#0A3D62]";
      break;
    case "transparent":
      variantClasses =
        "bg-transparent backdrop-blur-sm text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0A3D62]";
      break;
    case "beige":
      variantClasses =
        "bg-[#D1C1A7] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-[#FFFFFF]";
      break;
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${radiusClasses} ${widthClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}

      {/* SVG Arrow Icon */}
      {arrow && (
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
      )}

    </button>
  );
};

export default Button;
