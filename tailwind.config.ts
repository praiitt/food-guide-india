import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc170",
          400: "#ff9c37",
          500: "#ff7f10",
          600: "#f06306",
          700: "#c74a07",
          800: "#9e3a0e",
          900: "#7f320f",
        },
        spice: {
          50: "#f6f5f0",
          100: "#eae7da",
          200: "#d6cfb8",
          300: "#bdb08f",
          400: "#a5936f",
          500: "#8f7c59",
          600: "#736348",
          700: "#5c4f3c",
          800: "#4d4234",
          900: "#43392f",
        },
        leaf: {
          50: "#f3faf4",
          100: "#e3f4e7",
          200: "#c8e8d0",
          300: "#9dd4ab",
          400: "#6bb87f",
          500: "#459c5e",
          600: "#347e4a",
          700: "#2b653d",
          800: "#265134",
          900: "#21432c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
