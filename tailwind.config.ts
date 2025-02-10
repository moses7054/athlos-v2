import type { Config } from "tailwindcss";
import tailwindcssAnimated from "tailwindcss-animated";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg: "url(/AthlosBAckground.jpeg)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gilroyreal1: ["var(--font-gilroyreal1)"],
        gilroyreal2: ["var(--font-gilroyreal2)"],
        inter: ["var(--font-inter)"],
        gilroyblack: ["var(--font-gilroyblack)"],
        gilroy: ["var(--font-gilroy-norm)"],
      },
      screens: {
        mid: "764px", // Add custom breakpoint for extra small devices
        custom: "1440px",
        xs: "390px",
        bar: "500px",
      },
      animation: {
        "spin-4s": "spin 4s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimated],
};
export default config;
