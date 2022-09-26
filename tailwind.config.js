/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(201,37,107,1)",
        secondaryColor: "rgba(116,16,124,1)",
        "primaryColor-light": "#ebaee1",
        "secondaryColor-dark": "#590b5f",
      },
      fontFamily: {
        advent: ["Advent Pro"],
      },
    },
  },
  plugins: [],
};
