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
        mainbg: "#000000",
        herobg: "#D9D9D9",
        primetext: "#1B1B1B",
        sectext: "#6427FF",
        footerbg: "#222222",
        footertext: "#EAEAEA"
      }
    },
  },
  plugins: [],
}

