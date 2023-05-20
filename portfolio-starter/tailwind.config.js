
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron', /*btn*/
      secondary: 'Open Sans', /*everything*/
      tertiary: 'Helvetica Neue',
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

