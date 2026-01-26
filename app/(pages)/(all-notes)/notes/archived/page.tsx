import DetailComponent from "@/app/components/detail-component";
import ItemList from "@/app/components/item-list";
import { MainGridLayout } from "@/app/components/main-grid-layout";
import Sidebar from "@/app/components/sidebar";

const ArchivedNotes = () => {
  return <MainGridLayout listSide={<ItemList />} contentSide={<DetailComponent />} infoSide={<Sidebar />} />;
};

export default ArchivedNotes;

// <div className="flex flex-col gap-4 relative h-full">
//   <h1 className="text-preset-1 text-Neutral-950 lg:hidden">Archived Notes</h1>
//   <div className="flex flex-col gap-4">
//     <button className=" flex items-center justify-center radius-full  w-8 h-8 absolute right-0 bottom-0 lg:static lg:w-full lg:h-auto lg:px-4 lg:py-3 lg:rounded-lg bg-Blue-500 text-white cursor-pointer">
//       <span className="text-preset-4 hidden lg:block">+ Create New Note</span>
//       <PlusIcon className="lg:hidden" />
//     </button>

//     <div className="flex flex-col gap-4">
//       <p className="text-preset-5 text-Neutral-700">
//         All your archived notes are stored here. You can restore or delete them anytime.
//       </p>
//       <p className="bg-Neutral-100 border border-Neutral-200 p-2 radius-8 text-preset-5 text-Neutral-950">
//         No notes have been archived yet. Move notes here for safekeeping, or{" "}
//         <Link href="/notes/create" className="underline">
//           create a new note
//         </Link>
//         .
//       </p>
//     </div>
//   </div>
// </div>
