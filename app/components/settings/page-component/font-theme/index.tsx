import { FontThinAIcon, ScriptAIcon, TextBoldAIcon } from "@/app/components/icons/icons";
import ThemeItem from "../theme-item";
import { ReactNode } from "react";
import Button from "@/app/components/button";

const FontTheme = () => {
  interface FontItem {
    icon: ReactNode;
    text: string;
    description: string;
    active: boolean;
  }
  const fontItems: FontItem[] = [
    {
      icon: <FontThinAIcon className="w-6 h-6" />,
      text: "Sans-serif",
      description: "Clean and modern, easy to read.",
      active: true,
    },
    {
      icon: <ScriptAIcon className="w-6 h-6" />,
      text: "Serif",
      description: "Classic and elegant for a timeless feel.",
      active: false,
    },
    {
      icon: <TextBoldAIcon className="w-6 h-6" />,
      text: "Monospace",
      description: "Code-like, great for a technical vibe.",
      active: false,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-preset-3 text-Neutral-950 dark:text-white">Font Theme</h2>
        <span className="text-preset-5 text-Neutral-700 dark:text-Neutral-300">Choose your font theme:</span>
      </div>
      <div className="flex flex-col gap-4">
        {fontItems.map((item, i) => (
          <ThemeItem
            key={i}
            icon={item.icon}
            text={item.text}
            description={item.description}
            isActive={item.active}
          />
        ))}
      </div>
      <div className="ml-auto">
        <Button type="primary" text={"Apply Changes"} />
      </div>
    </div>
  );
};

export default FontTheme;
