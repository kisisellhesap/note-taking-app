"use client";
import { useMobileScreen } from "@/app/hooks/useMobileScreen";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";

const Header = () => {
  const isMobile = useMobileScreen();
  return <div className="">{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
};

export default Header;
