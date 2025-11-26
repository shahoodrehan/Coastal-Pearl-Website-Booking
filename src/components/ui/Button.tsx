import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "beige";
  fullWidth?: boolean;
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  radius?: "full" | "md";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  iconSrc,
  iconAlt = "icon",
  size = "sm",
  radius = "md",
  onClick,
}) => {
  const baseClasses =
    "font-inter font-normal text-[16px] flex items-center justify-center gap-2 transition-colors duration-300";

  const sizeClasses = size === "lg" ? "px-8 py-4" : "px-6 py-3";

  const radiusClasses = radius === "full" ? "rounded-full" : "rounded-[16px]";

  const widthClasses = fullWidth ? "w-full" : "w-auto";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#0A3D62] text-[#FFFFFF] hover:bg-[#D1C1A7] hover:text-[#0A3D62]";
      break;
    case "secondary":
      variantClasses =
        "bg-[#D1C1A7] text-[#0A3D62] hover:bg-[#D1C1A7] hover:text-[#0A3D62]";
      break;
    case "transparent":
      variantClasses =
        "bg-transparent backdrop-blur-sm text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0A3D62]";
      break;
    case "beige":
      variantClasses =
        "bg-[#F5EFE7] text-[#0A3D62] hover:bg-[#D1C1A7] hover:text-[#0A3D62]";
      break;
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${radiusClasses} ${widthClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {iconSrc && (
        <img src={iconSrc} alt={iconAlt} className="w-5 h-5 object-contain" />
      )}
      {children}
    </button>
  );
};

export default Button;
