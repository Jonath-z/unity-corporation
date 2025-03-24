/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          // DEFAULT: '#2D0A16',
          light: "#3D1521",
          hover: "#4D1D29",
        },
      },
    },
  },
  plugins: [],
};
