"use client";
import { usePathname } from "next/navigation";
import ColorTheme from "./color-theme";
import FontTheme from "./font-theme";
import ChangePassword from "./change-password";

const DetailComponent = () => {
  const path = usePathname();
  const activeComponent =
    path === "/settings/color-theme" ? (
      <ColorTheme />
    ) : path === "/settings/font-theme" ? (
      <FontTheme />
    ) : (
      <ChangePassword />
    );
  return <div className="px-6 py-5 flex flex-col gap-4">{activeComponent}</div>;
};

export default DetailComponent;
