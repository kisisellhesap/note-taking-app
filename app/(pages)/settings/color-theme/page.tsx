import { MainGridLayout } from "@/app/components/main-grid-layout";
import DetailComponent from "@/app/components/settings/page-component";
import Nav from "@/app/components/settings/nav";

const ColorTheme = () => {
  return <MainGridLayout listSide={<Nav />} contentSide={<DetailComponent />} />;
};

export default ColorTheme;
