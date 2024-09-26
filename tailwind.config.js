/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42E9E4', 
        secondary: '#67328a', 
        third: '#101231',
        background: '#f3f4f6', 
        darkBackground: '#1f2937',
        topBlueList:'#252872f8'
         
      },
      gradientColorStops: theme => ({
        'primary-gradient': '#0ea5e9',
        'secondary-gradient': '#f472b6',
        'primdk-gradient': '#101231',
      }),
    },
  },
  plugins: [],
}
