/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(0, 36%, 70%)",
        primary2: "hsl(0, 93%, 68%)",
        neutral: "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
