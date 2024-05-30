/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 992px) { ... }

      'xl': '1800px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  plugins: [],
}

