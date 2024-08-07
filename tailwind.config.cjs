/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'html': { 
          scrollPaddingTop: '100px',
          scrollBehavior: 'smooth',
        },
      })
    },
  ],
};
