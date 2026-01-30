import FormDetail from "@/app/components/detail-component/form";
import ItemList from "@/app/components/item-list";
import { MainGridLayout } from "@/app/components/main-grid-layout";

const CreateNewNote = () => {
  return <MainGridLayout listSide={<ItemList />} contentSide={<FormDetail />} />;
};

export default CreateNewNote;
