/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#90A955',
        secondary: '#4F772D',
        dark: '#132A13',
        hunter: '#31572C',
        ligther: '#ECF39E'
        // etc.
      },
    },
  },
  plugins: [],
}