"use client";
import { useMobileScreen } from "@/app/hooks/useMobileScreen";
import DesktopAside from "./desktop";
import MobileAside from "./mobile";

const Aside = () => {
  const isMobile = useMobileScreen();
  console.log("isMobile:", isMobile);
  return <>{isMobile ? <MobileAside /> : <DesktopAside />}</>;
};

export default Aside;
