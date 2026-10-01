/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          ivory: '#FFFDF9',
          cream: '#FFF7F0',
          peach: '#FFF0E5',
          lightpeach: '#FFE2CF',
          neutral: '#F4F1ED',
          border: '#EDE7E1',
        },
        brand: {
          orange: '#FA6306',
          'orange-hover': '#E05500',
          'orange-secondary': '#FF9A5C',
          'orange-soft': '#FFE1CC',
          charcoal: '#171717',
          gray: '#66615C',
          lightgray: '#F7F7F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
