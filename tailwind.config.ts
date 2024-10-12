import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0aff9d",
        text: "#ebecf3",
        opaque: "linear-gradient(180deg, #111, #ebecf3)",
        darkBg: "#080808",
        lightBg: "#232323",
        bg: "#111",
        light: "#B3C8CF",
        lightAccent: "#BED7DC"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"]
      },
    },
  },
  plugins: [],
  darkMode: "selector"
};
export default config;
