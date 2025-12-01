// import React from "react";

// type TextBoxProps = {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary";
//   className?: string;
// };

// const TextBox: React.FC<TextBoxProps> = ({
//   children,
//   variant = "primary",
//   className = "",
// }) => {
//   let variantClasses = "";

//   switch (variant) {
//     case "primary":
//       variantClasses = "bg-[#AEC6CF33] text-[var(--text-dark)]";
//       break;
//     case "secondary":
//       variantClasses = "bg-[var(--bg-dark)] text-[var(--text-light)]";
//       break;
//   }

//   return (
//     <div
//       className={`inline-block px-4 py-2 rounded-lg flex-none ${variantClasses} ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default TextBox;
