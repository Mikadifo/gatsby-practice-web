/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.js", "./src/pages/*.js", "./src/components/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
