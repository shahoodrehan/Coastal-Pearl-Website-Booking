import Image from "next/image";
import React, { ReactNode } from "react";

type CardProps = {
  bgColor?: string;
  icon?: string;
  title?: string;
  children?: ReactNode;
};

const PackageBottomCard: React.FC<CardProps> = ({
  bgColor = "#fff",
  icon,
  title,
  children,
}) => {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-8 shadow-sm"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon */}
      {icon && (
        <div className="w-14 h-14 rounded-full bg-[var(--bg-dark)] flex items-center justify-center mb-2">
          <Image
            src={icon}
            alt="icon"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      )}

      {/* Heading */}
      {title && (
        <h3 className="text-[24px] !text-left font-semibold text-[var(--text-dark)]">
          {title}
        </h3>
      )}

      {/* Children */}
      <div className="text-[16px] text-[var(--text-light)]">{children}</div>
    </div>
  );
};

export default PackageBottomCard;
