import React from "react";
import { LeftBanner } from "./leftBanner";
import { RightBanner } from "./rightBanner";

export const Banner: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-12 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};
