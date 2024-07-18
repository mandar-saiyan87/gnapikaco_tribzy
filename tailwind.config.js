/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        baloo: ["Baloo Da 2", "sans-serif"]
      },
      colors: {
        mainbg: "#222222",
        herobg: "#D1D4FF",
        primetext: "#1B1B1B",
        sectext: "#6427FF"
      }
    },
  },
  plugins: [],
}

