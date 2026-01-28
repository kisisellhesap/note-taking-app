import { MainGridLayout } from "@/app/components/main-grid-layout";
import DetailComponent from "@/app/components/settings/page-component";
import Nav from "@/app/components/settings/nav";

const ChangePassword = () => {
  return <MainGridLayout listSide={<Nav />} contentSide={<DetailComponent />} />;
};

export default ChangePassword;
