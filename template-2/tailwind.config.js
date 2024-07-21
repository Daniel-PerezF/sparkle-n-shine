/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bubble: ["Bubble Gum Sans", "Sans Serif"],
        rubik: ["Rubik Bubbles", "Sans Serif"],
        londrina: ["Londrina Solid", "Sans Serif"],
        news: ["News Cycle", "Sans Serif"],
      },
      colors: {
        hotpink: "#FF47A3",
        skyblue: "#16C7F3",
        flash: "#F3F7F7",
      },
    },
  },
  plugins: [],
};
