import { MoonIcon, SunIcon, SystemThemeIcon } from "@/app/components/icons/icons";
import ThemeItem from "../theme-item";
import { ReactNode } from "react";
import Button from "@/app/components/button";

const ColorTheme = () => {
  interface ThemeItem {
    icon: ReactNode;
    text: string;
    description: string;
    active: boolean;
  }
  const colorItems: ThemeItem[] = [
    {
      icon: <SunIcon className="w-6 h-6" />,
      text: "Light Mode",
      description: "Pick a clean and classic light theme",
      active: true,
    },
    {
      icon: <MoonIcon className="w-6 h-6" />,
      text: "Dark Mode",
      description: "Select a sleek and modern dark theme",
      active: false,
    },
    {
      icon: <SystemThemeIcon className="w-6 h-6" />,
      text: "System Mode",
      description: "Adapts to your device’s theme",
      active: false,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-preset-3 text-Neutral-950 dark:text-white">Color Theme</h2>
        <span className="text-preset-5 text-Neutral-700 dark:text-Neutral-300">Choose your color theme:</span>
      </div>
      <div className="flex flex-col gap-4">
        {colorItems.map((item, i) => (
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

export default ColorTheme;
