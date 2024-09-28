import classNames from "classnames";
import React, { useState } from "react";
import { HeadLine } from "./HeadLine";

const filters = [
  {
    name: "Residential Property",
    value: "residential",
  },
  {
    name: "Commercial Property",
    value: "commercial",
  },
  {
    name: "Agriculture Property",
    value: "agriculture",
  },
  {
    name: "Industrial Property",
    value: "industrial",
  },
];
const sections = {
  residential: [
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-1.png",
    },
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-2.png",
    },
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-3.png",
    },
  ],
  commercial: [
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-4.png",
    },
    {
      featured: false,
      "3d": true,
      image: "/images/best-deal-5.png",
    },
    {
      featured: false,
      "3d": true,
      image: "/images/best-deal-6.png",
    },
  ],
  agriculture: [
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-7.png",
    },
    {
      featured: false,
      "3d": true,
      image: "/images/best-deal-8.png",
    },
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-9.png",
    },
  ],
  industrial: [
    {
      featured: false,
      "3d": false,
      image: "/images/best-deal-10.png",
    },
    {
      featured: true,
      "3d": false,
      image: "/images/best-deal-11.png",
    },
    {
      featured: true,
      "3d": true,
      image: "/images/best-deal-12.png",
    },
  ],
};

export const BestDeal = () => {
  const [activeSection, setActiveSection] = useState("residential");
  const cards = sections[activeSection];
  return (
    <section className="container py-16">
      <HeadLine
        title={"best real estate deal"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing eli"}
      />
      <div className="flex justify-start max-md:overflow-x-scroll max-md:scrollbar-thin  py-4">
        <div className="flex justify-center items-center flex-nowrap gap-8   ">
          {filters.map((filter, index) => {
            const isActive = filter.value === activeSection;
            return (
              <button
                key={index}
                onClick={() => setActiveSection(filter.value)}
                className={classNames(
                  "border-b-2 py-4 border-transparent select-none text-nowrap font-semibold",
                  {
                    "text-primary !border-primary ": isActive,
                  }
                )}
              >
                {filter.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row lg:justify-between  justify-center items-center gap-5">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="relative w-full max-w-[378px]  aspect-[320/235] 2xl:max-w-full"
            >
              <img
                className=" relative w-full max-w-[378px]  aspect-[320/235] 2xl:max-w-full"
                src={card.image}
                alt={`deal-${index}`}
              />
              <div className=" text-white space-x-[7px] capitalize absolute top-[14px] left-[14px] ">
                {card.featured ? (
                  <span className=" ring-1 ring-white rounded-[5px] px-2 py-1 bg-[#222]/40">
                    featured
                  </span>
                ) : null}
                {card["3d"] ? (
                  <span className=" ring-1 ring-white rounded-[5px] px-2 py-1 bg-[#222]/40">
                    3d
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
