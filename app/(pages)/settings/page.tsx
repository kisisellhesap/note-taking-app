import { MainGridLayout } from "@/app/components/main-grid-layout";
import Nav from "@/app/components/settings/nav";

const Settings = () => {
  return <MainGridLayout listSide={<Nav />} />;
};

export default Settings;
