/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(223, 87%, 63%)",
        "secondary-1": "hsl(223, 100%, 88%)",
        "secondary-2": "hsl(354, 100%, 66%)",
        "neutral-1": "hsl(0, 0%, 59%)",
        "neutral-2": "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
