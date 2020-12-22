module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/content-blocks/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
    './pages/portfolio/[slug].js',
    './pages/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#070707',
      light: '#F5F5F5',
      accent: '#D40000',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      dark: '#676767',
      black: '#070707',
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
      '4xl': '240px',
    },
    height: {
      thumb: '176px',
      midThumb: '300px',
      largeThumb: '430px',
    },
    maxHeight: {
      thumb: '176px',
      largeThumb: '430px',
    },
    maxWidth: {
      hero: '1518px',
      largeThumb: '736px',
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
    },

    extend: {},
  },
  variants: {},
  // plugins: [require('@tailwindcss/forms')],
};
