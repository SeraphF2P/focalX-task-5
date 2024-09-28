import React from "react";
const cards = [
  {
    name: "location",
    icon: {
      src: "/svgs/vuesax_bulk_location.svg",
    },
    content: "Ahmedabad, India",
  },
  {
    name: "Price",
    icon: {
      src: "/svgs/vuesax_bulk_dollar-circle.svg",
    },
    content: "$1000 - $10,000",
  },
  {
    name: "Type of Property",
    icon: {
      src: "/svgs/vuesax_bulk_house.svg",
    },
    content: "Apartment",
  },
];
export const Hero = () => {
  return (
    <section className=" bg-primary-semiTransparent lg:h-[559px] pt-[25px] lg:pt-0 flex flex-col lg:flex-row  relative h-[650px] w-full">
      <img
        className=" absolute z-0  bottom-0 right-0  lg:h-full lg:aspect-[624/389] lg:w-auto  h-[389px] w-[624px]  object-cover"
        src="/images/hero.png"
        alt=""
      />
      <div className="container   items-start flex flex-col justify-center gap-8 lg:gap-16 h-[475px]">
        <h1 className=" text-3xl lg:w-[614px]    md:text-[60px] font-bold md:leading-[80px]">
          Discover a place you will love to live
        </h1>
        <p className="lg:w-[423px]  text-grayness">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
        </p>
        <div className=" lg:px-12 rounded-3xl  bg-white/80 flex  flex-col md:flex-row md:max-w-[866px] md:h-[100px]    justify-between p-2 max-w-[360px] lg:ml-0 h-[268px] mx-auto w-full   backdrop-blur">
          {cards.map((card) => {
            return (
              <div
                key={card.name}
                className="flex justify-start gap-2 items-center p-2"
              >
                <img
                  className=" size-[60px] "
                  src={card.icon.src}
                  alt={card.name}
                />

                <div className="flex flex-col gap-2">
                  <h2>{card.name}</h2>
                  <p className=" text-grayness">{card.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
