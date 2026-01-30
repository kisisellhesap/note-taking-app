import { MainGridLayout } from "@/app/components/main-grid-layout";
import ItemList from "@/app/components/item-list";
import DetailComponent from "@/app/components/detail-component";

const Notes = () => {
  return (
    <MainGridLayout listSide={<ItemList />} contentSide={<DetailComponent />} infoSide={<div>Info</div>} />
  );
};

export default Notes;
