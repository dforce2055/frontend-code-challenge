/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6C5E',
        'primary-hover': '#f73a28',
      },

      fontFamily: {
        'sans': ['"Quicksand"', "sans-serif"],
        'body': ['"Quicksand"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
