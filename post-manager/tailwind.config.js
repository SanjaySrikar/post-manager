/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black : "#000000",
      matte : "#0e1012",
      white: "#FFFFFF",
      gray: "#97ADBD",
      "light-black": "#1F2937",
      "light-gray": "#F3F5F7",
      "light-red": "#A4797C",
      "light-green": "#EEFFDB",
      "dark-blue": "#234558",
      red: "#6D1D1D",
      "jet-blue": "#001220",
      "white-blue": "#444343",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
