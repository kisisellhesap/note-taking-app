import Aside from "@/app/components/aside";
import Header from "@/app/components/header";
import { MainGridLayout } from "@/app/components/main-grid-layout";
import DetailComponent from "@/app/components/settings/detail-component";

const Settings = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <Aside />

      <div className="flex flex-col  w-full h-full">
        <Header />
        <div className="h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] lg:h-[calc(100vh-83px)] ">
          <MainGridLayout listSide={<div>settings nav </div>} contentSide={<DetailComponent />} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
