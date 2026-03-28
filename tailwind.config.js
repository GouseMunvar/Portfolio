/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FFC639",
        "dark-charcoal": "#2D2E31",
        "medium-gray": "#7E7E7E",
      },
      fontFamily: {
        heading: ["Merriweather", "serif"], // For main headings
        body: ["Inter", "sans-serif"],       // For body text
        role: ["Poppins", "sans-serif"],    // For roles like "UI/UX Designer"
      },
    },
  },
  plugins: [],
};
