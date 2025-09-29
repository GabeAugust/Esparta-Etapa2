import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [],
};

export default config;