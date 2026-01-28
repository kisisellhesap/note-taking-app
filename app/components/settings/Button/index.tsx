import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  text: string;
  icon: ReactNode;
  isActive?: boolean;
}
const Button = ({ href, text, icon, isActive }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 items-center text-preset-4  p-2 radius-6 ${isActive ? "bg-Neutral-100 text-Neutral-950 dark:bg-Neutral-800 dark:text-white" : "text-Neutral-700 dark:text-Neutral-200 bg-transparent"}`}
    >
      {icon && <div className={`${isActive && "text-Blue-500"}`}> {icon}</div>}
      <span>{text}</span>
      <FaChevronRight className={`w-2.5 h-3 ml-auto ${!isActive ? "hidden" : "block"} `} />
    </Link>
  );
};

export default Button;
