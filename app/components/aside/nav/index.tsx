"use client";
import Link from "next/link";
import Button from "../button";
import { usePathname } from "next/navigation";
import { DownloadBoxIcon, HomeIcon } from "@/app/components/icons/icons";

const Nav = () => {
  const path = usePathname();

  const arr = Array.from({ length: 5 });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 w-full">
        <Link href={`${arr.length === 0 ? "/notes" : "/notes/1"}`}>
          <Button text="All Notes" Icon={HomeIcon} isActive={path === "/notes" || path === "/notes/1"} />
        </Link>
        <Link href={`${arr.length === 0 ? "/notes/archived" : "/notes/archived/1"}`}>
          <Button
            text="Archived Notes"
            Icon={DownloadBoxIcon}
            isActive={path === "/notes/archived" || path === "/notes/archived/1"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
