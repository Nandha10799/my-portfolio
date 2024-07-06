import React from "react";

export const Title: React.FC<{ title: string; des: string; para?: string }> = ({
  title,
  des,
  para,
}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
      <p className="text-sm md:text-md text-slate-50 font-medium capitalize">
        {para}
      </p>
    </div>
  );
};
