const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        head: ['Bungee Tint', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        heading: ['Squada One', 'sans-serif'],
        head: ['Bungee Tint', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        darkblue: '#0d358d',
        backgroundlight: '#c7d7fa',
        bghover: '#b5caf8',
        bglight: '#d9e4fb',
        bgform: '#1557e7',
      },
    },
    screens: {
      s: { min: '220px', max: '315px' },
      xs: { min: '316px', max: '413px' },
      xxs: { min: '414px', max: '639px' },
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      xxl: { min: '1536px', max: '2563px' },
    },
    boxShadow: {
      search: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
      full: '9999px',
    },
  },

  plugins: [],
};
