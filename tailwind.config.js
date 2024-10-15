/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004d40', 
        secondary: '#a5d6a7', 
        third: '#0d47a1', 
        background: '#f3f4f6',
        darkBackground: '#121212', 
        topBlueList: '#1e3a8a', 
        contrastText: '#e0f7fa', 
        accent: '#ff7043', 
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        'primary-gradient': '#0d47a1', 
        'secondary-gradient': '#ff4081', 
      }),
    },
  },
  plugins: [],
};
