/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'oilblack': '#0C0C0C',
      'obsidian': '#0B1215',
      'darkslategrey': '#0D1717',
      'midnightblue': '#101720',
      'charcoalBlue': '#171717',
      'DeepNavyBlue': '#011222',
      'RickBlack': '#020D19',
      'name': '#8500ff',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '100': '36em',
        '128': '47rem',
        '144': '50rem',
        '400': '40rem'
      }
    },
  },
  plugins: [require("daisyui")],
}

