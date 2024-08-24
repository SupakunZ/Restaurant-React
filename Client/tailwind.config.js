/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FEA116',
        'yellowHover': '#ffb94f',
        'blackBlue': '#0f172b',
        'grayWhite': '#F4F4F4',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
      }
    },
  },
  plugins: [],
}