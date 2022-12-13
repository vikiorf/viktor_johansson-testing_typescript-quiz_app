module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: ['Montserrat'],
    },
    extend: {
      colors: {
        'primary-bg': '#161E22',
        'secondary-bg': '#22333B',
        'primary-color': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
