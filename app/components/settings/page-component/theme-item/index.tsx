import { ReactNode } from "react";

interface ThemeItemProps {
  icon: ReactNode;
  text: string;
  description: string;
  isActive: boolean;
}
const ThemeItem = ({ icon, text, description, isActive }: ThemeItemProps) => {
  return (
    <div
      className={`flex items-center gap-4 radius-12 p-4 border border-Neutral-200 dark:border-Neutral-800 cursor-pointer ${isActive ? "bg-Neutral-100 dark:bg-Neutral-800" : "bg-transparent"}`}
    >
      {icon && (
        <div className=" flex items-center justify-center w-10 h-10 radius-12 border bg-white dark:bg-Neutral-950 border-Neutral-200 dark:border-Neutral-800">
          {icon}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <p className="text-preset-4 text-Neutral-950 dark:text-white">{text}</p>
        <span className="text-preset-6 text-Neutral-700 dark:text-Neutral-300">{description}</span>
      </div>
      <div
        className={`w-4 h-4 radius-full ml-auto ${isActive ? "border-4 border-Blue-500" : "border-2 border-Neutral-200"}`}
      ></div>
    </div>
  );
};

export default ThemeItem;
