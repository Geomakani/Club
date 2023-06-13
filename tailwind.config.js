/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001517",
        secondary: "#4BD064",
        secondary2: "#00555C",
      },
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [],
};
