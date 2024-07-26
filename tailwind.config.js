/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        bg_cart:"#202020",
        hover_bg:"#2F2F2F",
      },
      fontSize:{
        big:"50px"
      }
    },
  },
  plugins: [],
}

