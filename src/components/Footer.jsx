import React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
const socialIcons = [
  {
    name: "facebook",
    link: "http://facebook.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="48"
        fill="none"
        viewBox="0 0 49 48"
        className=" text-primary hover:text-primary-hover transition-colors"
      >
        <rect width="48" height="48" x=".668" fill="currentColor" rx="24" />
        <path
          fill="#fff"
          d="M29.669 15.5a.5.5 0 0 0-.5-.5h-2.5a4.77 4.77 0 0 0-5 4.5v2.7h-2.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5h2.5v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63h-3.35v-2.7a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5v-2.6Z"
        />
      </svg>
    ),
  },
  {
    name: "twitter",
    link: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="48"
        fill="none"
        viewBox="0 0 49 48"
        className=" text-primary hover:text-primary-hover transition-colors"
      >
        <rect width="48" height="48" x=".668" fill="currentColor" rx="24" />
        <path
          fill="#fff"
          d="M20.748 32a11.07 11.07 0 0 0 11.44-11 8.092 8.092 0 0 0 1.48-2.84.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17 4.13 4.13 0 0 0-1.15 3.9c-3.35.2-5.65-1.39-7.49-3.57a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05 6.73 6.73 0 0 1-4.47 2.28.45.45 0 0 0-.14.84 11 11 0 0 0 4.84 1.16Z"
        />
      </svg>
    ),
  },
  {
    name: "instagram",
    link: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="48"
        fill="none"
        viewBox="0 0 49 48"
        className=" text-primary hover:text-primary-hover transition-colors"
      >
        <rect width="48" height="48" x=".668" fill="currentColor" rx="24" />
        <path
          fill="#fff"
          d="M27.819 20.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.832 5.832 0 0 0-5.85-5.82Zm-8.551.9h-2.7a.9.9 0 0 0-.9.9v9.9a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-9.9a.9.9 0 0 0-.9-.9Zm-1.349-1.8a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
        />
      </svg>
    ),
  },
];
export const Footer = () => {
  return (
    <footer className="">
      <section className="container    gap-[30px] grid  grid-cols-1 grid-flow-row md:grid-cols-2 md:grid-rows-[repeat(3,auto)] lg:grid-cols-4 lg:grid-rows-1">
        <div className=" space-y-[30px]">
          <Logo />
          <p className=" leading-[26px] text-grayness ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>
        <div className=" flex flex-col justify-start gap-4">
          <h3 className=" font-bold   tracking-wider">Service</h3>
          <ul>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                Payment & Tax
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                Features
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                View Booking
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col justify-start gap-4">
          <h3 className=" font-bold   tracking-wider">About</h3>
          <ul>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                About us
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                News
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primary transition-colors" to={"#"}>
                New Property
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col justify-start gap-4">
          <h3 className=" font-bold   tracking-wider">our location</h3>
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          <div className=" flex gap-4">
            {socialIcons.map((icon, index) => {
              return (
                <Link key={index} to={icon.link}>
                  {icon.icon}
                  <span className=" sr-only">{icon.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" border-t border-neutral-black/10  py-4 md:py-8  flex flex-col mn:flex-row justify-between gap-4 text-center  col-span-full   w-full">
          <p>Copyright 2024 flora. All Rights Reserved</p>{" "}
          <div className="flex gap-8  justify-center">
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
