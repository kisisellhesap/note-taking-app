"use client";
import { usePathname } from "next/navigation";

export const MainGridLayout = ({
  listSide,
  contentSide,
  infoSide,
}: {
  listSide: React.ReactNode;
  contentSide?: React.ReactNode;
  infoSide?: React.ReactNode;
}) => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="grid grid-cols-[repeat(8,minmax(28.88px,1fr))] md:grid-cols-[repeat(8,minmax(67px,1fr))] lg:grid-cols-[repeat(12,minmax(auto,1fr))] w-full h-full">
      <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-end-4  min-w-62.5 border-r border-Neutral-200 dark:border-Neutral-700 px-4 py-5 md:px-8 md:py-6 lg:pl-8 lg:pr-4 lg:py-5 overflow-y-auto h-full scrollbar-hide">
        {listSide}
      </div>

      <div className="hidden lg:block lg:col-start-4 lg:col-end-10">{contentSide}</div>

      <div
        className={`col-start-10 col-end-13 hidden lg:block min-w-50 pl-4 pr-8 py-5 ${infoSide && "border-l border-Neutral-200 dark:border-Neutral-700"}`}
      >
        {infoSide}
      </div>
    </div>
  );
};
