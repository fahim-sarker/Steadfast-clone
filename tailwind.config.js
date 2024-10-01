/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':"url('/src/assets/hero.png')",
      },
      keyframes: {
        spin: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        spin: 'spin 5s ease-in-out',
      },
    },
    fontFamily:{
      'pops': ["Poppins", 'sans-serif']
    },
  },
  plugins: [],
}

