module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins', /* Add !important here */
      secondary: 'Poppins',
      tertiary: 'Helvetica Neue !important',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#b17bec',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
      },
    },
  },
  plugins: [],

  resolve: {
    fallback: {
      fs: false,
      querystring: false,
      url: false,
      util: false,
      path: false,
      http: false,
    },
  }
};
