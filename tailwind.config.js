/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // utility class -> `font-manrope`
        manrope: ['Manrope', 'sans-serif'],
        // fallback for Nohemi if needed -> `font-nohemi`
        nohemi: ['Nohemi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}