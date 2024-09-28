import React from "react";

export const FindDreamHome = () => {
  return (
    <div className=" h-[380px] text-center px-4 w-full flex text-white flex-col relative justify-between py-[118px]  items-center">
      <img
        className=" absolute -z-10  inset-0 object-cover  size-full"
        src="/images/fill.png"
        alt="background"
      />
      <div className="bg-black/50 bg-blend-difference absolute inset-0" />
      <h2 className="capitalize md:text-[70px] isolate font-bold leading-[56px] text-[30px]">
        find your deam home
      </h2>
      <p className="leading-6 isolate md:text-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli
      </p>
    </div>
  );
};
