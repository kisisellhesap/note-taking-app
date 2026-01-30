"use client";
import { usePathname } from "next/navigation";
import { LayersIcon, LockIcon, LogoutIcon, SunIcon } from "../../icons/icons";
import HorizontalLine from "../../line/horizontal-line";
import Button from "../Button";

const Nav = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-preset-1 text-Neutral-950 dark:text-white lg:hidden">Settings</h1>

      <div className="flex flex-col gap-2">
        <Button
          href={"/settings/color-theme"}
          text={"Color Theme"}
          icon={<SunIcon className="w-5 h-5" />}
          isActive={path === "/settings/color-theme"}
        />
        <Button
          href={"/settings/font-theme"}
          text={"Font Theme"}
          icon={<LayersIcon className="w-5 h-5" />}
          isActive={path === "/settings/font-theme"}
        />
        <Button
          href={"/settings/change-password"}
          text={"Change Password"}
          icon={<LockIcon className="w-5 h-5" />}
          isActive={path === "/settings/change-password"}
        />
      </div>
      <HorizontalLine />
      <Button href={"/sign-up"} text={"Logout"} icon={<LogoutIcon className="w-5 h-5" />} />
    </div>
  );
};

export default Nav;
