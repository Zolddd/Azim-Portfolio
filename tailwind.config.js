/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2f",
        secondary: "#ff6f61",
        bluish: "#3b82f6",
        greenish: "#10b981",
        pinkish: "#ec4899",
      },
    },
  },
  plugins: [],
}
