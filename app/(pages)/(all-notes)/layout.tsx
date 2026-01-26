import Aside from "@/app/components/aside";
import Header from "@/app/components/header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <Aside />

      <div className="flex flex-col  w-full h-full">
        <Header />
        <div className="h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] lg:h-[calc(100vh-83px)] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
