/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsc,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // abu: "#c0c0c0",
        abu: "#bca89f",
      },
      screens: {
        lower: "638px",
      },
    },
  },
  plugins: [],
};
