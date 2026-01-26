import { MainGridLayout } from "@/app/components/main-grid-layout";
import ItemList from "@/app/components/item-list";

const Notes = () => {
  return (
    <MainGridLayout
      listSide={<ItemList />}
      contentSide={<div>Note Content</div>}
      infoSide={<div>Info</div>}
    />
  );
};

export default Notes;
