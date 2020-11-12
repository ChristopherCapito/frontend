module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#070707',
      light: '#F5F5F5',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      dark: '#676767',
      accent: '#D40000',
      light: '#F5F5F5',
    }),
    fontSize: {
      tiny: '14px',
      base: '16px',
      sm: '20px',
      md: '26px',
      lg: '30px',
      xl: '60px',
      icon: '40px',
      '2xl': '90px',
      '3xl': '120px',
    },
    maxWidth: {
      hero: '1518px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
