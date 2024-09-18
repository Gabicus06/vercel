import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FFF8F3",
        secondary: "#000000",
        tertiary: "#e6b910",
        quarternary: "#758694",
        quinary  : "#405D72"
      },
    },
  },
  plugins: [],
};
export default config;
