/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize:{
        xxs: "0.5rem"
      },
      width: {
        '3/8': '37.5%'
      }
    },
  },
  plugins: [],
}