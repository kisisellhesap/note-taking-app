"use client";
import { useMobileScreen } from "@/app/hooks/useMobileScreen";
import { useParams, usePathname } from "next/navigation";

export const MainGridLayout = ({
  listSide,
  contentSide,
  infoSide,
}: {
  listSide: React.ReactNode;
  contentSide?: React.ReactNode;
  infoSide?: React.ReactNode;
}) => {
  const params = useParams();
  const path = usePathname();
  const isMobile = useMobileScreen();
  console.log(params.id, "asd");
  console.log(path, "asd");

  console.log(contentSide);
  return (
    <div className="grid grid-cols-[repeat(8,minmax(28.88px,1fr))] md:grid-cols-[repeat(8,minmax(67px,1fr))] lg:grid-cols-[repeat(12,minmax(auto,1fr))] w-full h-full">
      <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-end-4  min-w-62.5 border-r border-Neutral-200 dark:border-Neutral-700 px-4 py-5 md:px-8 md:py-6 lg:pl-8 lg:pr-4 lg:py-5 overflow-y-auto h-full scrollbar-hide">
        {listSide}
      </div>

      <div
        className={`px-4 py-5 md:px-8 md:py-6 ${params.id || path === "/notes/create-new-note" || path === "/settings/color-theme" || path === "/settings/font-theme" || path === "/settings/change-password" ? "absolute" : "hidden"} left-0 top-15 w-full h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] z-10 bg-white lg:static lg:block lg:col-start-4  ${infoSide ? " lg:col-end-10" : " lg:col-end-13"}`}
      >
        {contentSide}
      </div>

      {infoSide && (
        <div
          className={`col-start-10 col-end-13 hidden lg:block min-w-50 pl-4 pr-8 py-5 ${infoSide && "border-l border-Neutral-200 dark:border-Neutral-700"}`}
        >
          {infoSide}
        </div>
      )}
    </div>
  );
};
