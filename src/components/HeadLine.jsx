import React from "react";

export const HeadLine = ({ title, subTitle }) => {
  return (
    <div className=" h-[78px] flex flex-col  justify-between">
      <h2 className=" leading-[47px] text-2xl font-bold">{title}</h2>
      <p className=" text-grayness">{subTitle}</p>
    </div>
  );
};
