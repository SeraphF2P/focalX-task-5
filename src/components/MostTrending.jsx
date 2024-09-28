import React from "react";
import { HeadLine } from "./HeadLine";
const cards = [
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-1.png",
  },
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-2.png",
  },
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-3.png",
  },
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-4.png",
  },
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-5.png",
  },
  {
    price: "$300000",
    name: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/trend-6.png",
  },
];
export const MostTrending = () => {
  return (
    <section className="container py-8">
      <HeadLine
        title={"most trending"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing eli"}
      />
      <section className=" grid grid-flow-row md:grid-cols-2 gap-x-[25px] gap-y-[30px] lg:grid-cols-3 place-content-center py-4 ">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col p-4 m-auto h-[380px] w-full max-w-[320px] lg:h-[447px] lg:max-w-[382px] shadow-md rounded-md"
            >
              <img src={card.image} alt="apartment image" />
              <p className=" text-primary  pt-4  font-semibold leading-[28px] text-[18px]">
                {card.price}
              </p>
              <h3 className=" font-semibold lg:max-w-[180px] leading-[28px] text-[18px] ">
                {card.name}
              </h3>
              <div className="flex justify-between items-center mt-auto">
                <img src="/svgs/location.svg" alt="location pin icon" />
                <p className=" text-center w-full leading-5 text-[12px]">
                  {card.location}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
