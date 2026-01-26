import { PlusIcon } from "../icons/icons";
import Item from "./item";

const ItemList = () => {
  return (
    <div className="flex flex-col gap-4 relative h-full">
      <h1 className="text-preset-1 text-Neutral-950 dark:text-white lg:hidden">All Notes</h1>
      <div className="flex flex-col gap-4">
        <button className=" flex items-center justify-center radius-full  w-8 h-8 fixed right-8 bottom-20 md:right-12 md:bottom-24 lg:static lg:w-full lg:h-auto lg:px-4 lg:py-3 lg:rounded-lg bg-Blue-500 text-white cursor-pointer">
          <span className="text-preset-4 hidden lg:block">+ Create New Note</span>
          <PlusIcon className="lg:hidden" />
        </button>

        <p className="bg-Neutral-100 dark:bg-Neutral-800 dark:border-Neutral-700 dark:text-white border border-Neutral-200 p-2 radius-8 text-preset-5 text-Neutral-950">
          You don’t have any notes yet. Start a new note to capture your thoughts and ideas.
        </p>
      </div>

      <div className="flex flex-col gap-0">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default ItemList;
