/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibri: ["Calibri", "Arial", "sans-serif"],
      },
      fontSize: {
        "12pt": "12pt",
        "13pt": "13pt",
        "22pt": "22pt",
        "10.5pt": "10.5pt",
      },
      width: {
        a4: "794px",
      },
      height: {
        a4: "1123px",
      },
      padding: {
        a4: "76px",
      },
      spacing: {
        "a4-margin": "20px",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
