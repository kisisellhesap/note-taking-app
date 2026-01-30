import { MainGridLayout } from "@/app/components/main-grid-layout";
import Nav from "@/app/components/settings/nav";
import DetailComponent from "@/app/components/settings/page-component";

const Settings = () => {
  return <MainGridLayout listSide={<Nav />} contentSide={<DetailComponent />} />;
};

export default Settings;
