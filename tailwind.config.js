/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        gradientVeryLightRed: 'hsl(13, 100%, 72%)',
        gradientLightRed: 'hsl(353, 100%, 62%)',
        gradientVeryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        gradientVeryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      }
    },
  },
  plugins: [],
}