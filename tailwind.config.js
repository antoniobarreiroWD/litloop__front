/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', 
        secondary: '#f472b6', 
        background: '#f3f4f6', 
        darkBackground: '#1f2937', 
      },
      gradientColorStops: theme => ({
        'primary-gradient': '#0ea5e9',
        'secondary-gradient': '#f472b6',
      }),
    },
  },
  plugins: [],
}
