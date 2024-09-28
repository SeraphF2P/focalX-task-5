/** @type {import('tailwindcss').Config} */
import Typography from "@tailwindcss/typography";
import TwScrollbar from "tailwind-scrollbar";
import TwAnimate from "tailwindcss-animate";
import { MyPlugin } from "./lib/tailwind/plugins/@my-plugin";
const colors = {
  //? neutral colors
  "neutral-white": "rgb(255,255,255)",
  "neutral-black": "rgb(34,34,34)",
  //? main colors
  primary: {
    DEFAULT: "rgb(2,85,149)",
    hover: "rgb(2,85,149,0.8)",
    semiTransparent: "#EFF8FF",
    text: "rgb(255,255,255)",
  },
  grayness: {
    DEFAULT: "#7e7e7e",
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: { colors },
  },
  plugins: [Typography, TwAnimate, TwScrollbar, MyPlugin],
};
