import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--figtree-font)"],
      },
      textColor: {
        fadedYellow: "#f4d04e",
      },
      backgroundColor: {
        fadedYellow: "#f4d04e",
      },
    },
  },
  plugins: [],
};
export default config;
