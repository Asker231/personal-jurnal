/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        bg_cart:"#202020",
        hover_cart:"#2F2F2F",
        app_bg:"#181818",
        buttonbg:"#312EB5",
        buttonHover:"#2C2AA4"
      },
      fontSize:{
        big:"50px"
      }
    },
  },
  plugins: [],
}

