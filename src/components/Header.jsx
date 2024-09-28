import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const routes = [
  { name: "home", href: "/" },
  { name: "about ", href: "#about" },
  { name: "services", href: "#services" },
  { name: "new property", href: "#new-property" },
  { name: "contact", href: "#contact" },
];
export function Header() {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
}
const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={classNames(
        " h-[90px] md:hidden  transition-colors duration-500  w-full sticky z-40  top-0  ",
        {
          " bg-primary-semiTransparent": !isOpen,
          " bg-neutral-white": isOpen,
        }
      )}
    >
      <div className="flex justify-between h-[90px]  items-center container">
        <Logo />
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative text-primary size-6 flex flex-col items-center justify-center gap-1   md:hidden"
        >
          <div
            className={classNames(
              "    pointer-events-none h-1 w-full origin-center rounded-sm bg-current shadow transition-[width,transform,background] duration-500",
              {
                "translate-y-2 rotate-45 scale-x-100": isOpen,
                "translate-y-0 rotate-0 scale-x-100": !isOpen,
              }
            )}
          />
          <div
            className={classNames(
              " pointer-events-none h-1 w-full origin-center rounded-sm bg-current shadow transition-[width,transform,background] duration-500 ",
              {
                " rotate-0 scale-x-0": isOpen,
                " scale-x-100": !isOpen,
              }
            )}
          />
          <div
            className={classNames(
              "    pointer-events-none h-1 w-full origin-center rounded-sm bg-current shadow transition-[width,transform,background] duration-500",
              {
                "-translate-y-2 -rotate-45 scale-x-100": isOpen,
                "translate-y-0": !isOpen,
              }
            )}
          />
          <span className=" sr-only">Menu</span>
        </button>
      </div>
      <nav
        className={classNames("  transition-[height] duration-500  ", {
          "h-0 overflow-hidden": !isOpen,
          "h-screen overflow-y-scroll": isOpen,
        })}
      >
        <ul
          className={
            "flex  flex-col  capitalize gap-8   bg-white  text-start  justify-start     "
          }
        >
          {routes.map((route) => {
            return (
              <li key={route.name} className="">
                <Link
                  className="hover:border-transparent flex items-center hover:rounded border-y-2 border-black   ps-4 text-lg hover:bg-primary-semiTransparent  w-full h-[65px] "
                  href={route.href}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
          <li className="   flex justify-center items-center  pb-4  w-full ">
            <button className="  capitalize text-lg bg-primary hover:bg-primary-hover transition-colors text-primary-text w-[175px] py-2 rounded">
              login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const Desktop = () => {
  return (
    <header
      className={
        "bg-primary-semiTransparent h-[90px] hidden md:flex   w-full sticky z-40  top-0  "
      }
    >
      <div className=" container justify-between items-center flex">
        <Logo />
        <nav className={""}>
          <ul
            className={
              "flex    capitalize gap-2  items-center h-full  justify-center     "
            }
          >
            {routes.map((route) => {
              return (
                <li key={route.name} className="   ">
                  <Link
                    className="p-2  hover:bg-primary-semiTransparent    border-transparent border hover:border-primary hover:text-primary rounded-full  "
                    href={route.href}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className=" capitalize  bg-primary hover:bg-primary-hover transition-colors  text-primary-text w-[135px] py-2 rounded">
          login
        </button>
      </div>
    </header>
  );
};
