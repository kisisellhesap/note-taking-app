import DetailComponent from "@/app/components/detail-component";
import ItemList from "@/app/components/item-list";
import { MainGridLayout } from "@/app/components/main-grid-layout";
import Sidebar from "@/app/components/sidebar";

const DetailArchived = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  return <MainGridLayout listSide={<ItemList />} contentSide={<DetailComponent />} infoSide={<Sidebar />} />;
};

export default DetailArchived;
