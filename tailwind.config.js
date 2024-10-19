/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40c9c6', 
        darkPrimary: '#1f6f78', 
        secondary: '#fcb8d2', 
        darkSecondary: '#b96785', 
        third: '#125d98', 
        background: '#e0f7fa', 
        darkBackground: '#1b1e2a', 
        topBlueList: '#1e3a8a', 
        contrastText: '#ffffff', 
        accent: '#ff6f91', 
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        'primary-gradient': '#40c9c6', 
        'secondary-gradient': '#fcb8d2', 
      }),
    },
  },
  plugins: [],
};
