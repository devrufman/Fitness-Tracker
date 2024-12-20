/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kristen: ['"Kristen ITC"', "cursive"],
      },
      colors: {
        primary: "#FFA500", // Orange
        secondary: "#FF4500", // Red
        accent: "#1E90FF", // Blue
        highlight: "#FFD700", // Yellow
      },
    },
  },
  plugins: [],
}