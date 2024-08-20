/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#1F314F',
        'slate-500': '#68778D',
        'slate-300': '#D5E1EF',
        'stone-800': '#312E2C',
        'white': '#FFFFFF',
      },
      spacing: {
        499: '31.1875rem',
        320: '20rem',
        288: '18rem',
        256: '16rem',
      },
      fontSize: {
        22: '1.375rem',
        15: '0.9375rem',
      },
      lineHeight: {
        120: '120%',
        140: '140%',
      },
      dropShadow: {
        custom: '0px 25px 25px rgba(0, 0, 0, 0.0477)',
      }
    },
  },
  plugins: [],
}

