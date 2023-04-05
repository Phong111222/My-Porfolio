/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    clipPath: {
      arrowRight: 'polygon(100% 50%, 0 0, 0 100%)',
    },
    extend: {
      colors: {
        primary: '#FFB600',
        secondary: '#F4E8D4',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
