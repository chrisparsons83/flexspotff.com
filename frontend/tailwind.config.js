typographyOverrides = (theme) => ({
  DEFAULT: {
    css: {
      h1: {
        color: theme('colors.custom-green.light'),
      },
    },
  },
});

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-green': {
          dark: '#252716',
          DEFAULT: '#3E4125',
          light: '#707543',
        },
      },
      typography: typographyOverrides,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
