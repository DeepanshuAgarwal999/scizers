import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImage: "url('/images/Heroimage.svg')",
      },
      colors: {
        primary: {
          DEFAULT: "#17ABFF",
          100: "#00357B",
        },
      },
      boxShadow: {
        headerBtnShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        oswald: "Oswald",
      },
    },
  },
  plugins: [],
};
export default config;
