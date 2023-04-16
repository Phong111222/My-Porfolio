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
        'fade-in': 'fadeIn 2s ease-in-out',
        'fade-out': 'fadeOut 5s ease-in-out',
        'fade-in-fast': 'fadeIn 500ms ease-in-out',
        'show-modal': 'showModal 500ms ease-in-out',
        'close-modal': 'closeModal 500ms ease-in-out',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        showModal: {
          '0%': {
            opacity: 0,
            transform: 'scale(0)',
          },

          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        closeModal: {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },

          '100%': {
            opacity: 0,
            transform: 'scale(0)',
          },
        },
      }),
    },
  },
  plugins: [require('tailwind-clip-path')],
};
