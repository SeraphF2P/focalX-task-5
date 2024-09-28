import plugin from "tailwindcss/plugin";

export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      "::-ms-reveal": {
        filter: "invert(100%)",
      },
      body: {
        "@apply bg-neutral-white text-neutral-black caret-primary selection:bg-primary selection:text-primary-text":
          {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
      h1: { "@apply capitalize text-2xl": {} },
      h2: { "@apply capitalize text-xl": {} },
      h3: { "@apply capitalize text-lg": {} },
      h4: { "@apply capitalize text-base": {} },
      p: { "@apply text-sm": {} },
      li: { "@apply list-none": {} },
      a: { "@apply text-current": {} },
    });
    addUtilities(
      {
        ".remove-scroll-bar": {
          "scroll-behavior": "smooth",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".remove-scroll-bar::-webkit-scrollbar": {
          display: "none",
        },
        ".text-border": {
          "text-shadow": `-1px -1px 0 rgb(var(--neutral-black)),
              1px -1px 0 rgb(var(--neutral-black)),
             -1px 1px 0 rgb(var(--neutral-black)),
              1px 1px 0 rgb(var(--neutral-black))`,
        },
        ".writing-mode-htb": {
          "writing-mode": "horizontal-tb",
        },
        ".writing-mode-slr": {
          "writing-mode": "sideways-lr",
        },
        ".writing-mode-srl": {
          "writing-mode": "sideways-rl",
        },
        ".writing-mode-vlr": {
          "writing-mode": "vertical-lr",
        },
        ".writing-mode-vrl": {
          "writing-mode": "vertical-rl",
        },
      },
      {
        respectImportant: true,
        respectPrefix: true,
      }
    );
  },
  {
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },

      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        screens: {
          mn: "420px",
          xs: "576px",
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
      },
    },
  }
);
export default MyPlugin;
