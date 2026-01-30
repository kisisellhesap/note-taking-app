"use client";
import Link from "next/link";
import { ChevronLeftIcon, DownloadBoxIcon, TrashIcon } from "../../icons/icons";
import { useParams } from "next/navigation";

const DetailHeader = () => {
  const params = useParams();
  return (
    <div className="text-Neutral-600 text-preset-5 flex items-center justify-between lg:hidden">
      <Link href={"."} className="flex items-center cursor-pointer">
        <ChevronLeftIcon className="w-4.5 h-4.5" /> <span>Go Back</span>
      </Link>
      <div className="flex items-center gap-4">
        {params.id && (
          <>
            {" "}
            <button className="cursor-pointer">
              <TrashIcon className="w-4.5 h-4.5" />
            </button>
            <button className="cursor-pointer">
              <DownloadBoxIcon className="w-4.5 h-4.5" />
            </button>
          </>
        )}
        <button className="cursor-pointer">Cancel</button>
        <button className="text-Blue-500 cursor-pointer">Save Note</button>
      </div>
    </div>
  );
};

export default DetailHeader;
