import Button from "@/app/components/button";
import { DownloadBoxIcon, TrashIcon } from "@/app/components/icons/icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <Button type="border" text="Archive Note" icon={<DownloadBoxIcon className="w-5 h-5" />} />
      <Button type="border" text="Delete Note" icon={<TrashIcon className="w-5 h-5" />} />
    </div>
  );
};

export default Sidebar;
