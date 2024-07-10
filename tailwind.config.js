import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
      animation: {
        wave: "wave 5s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "2%": { transform: "rotate(14deg)" },
          "4%": { transform: "rotate(-8deg)" },
          "6%": { transform: "rotate(14deg)" },
          "8%": { transform: "rotate(-4deg)" },
          "10%": { transform: "rotate(10deg)" },
          "15%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
