module.exports = {
    purge: {
        content: ["./public/**/*.html", "./src/**/*.vue"],
    },
    darkmode: false,
    theme: {
      container:{
        center:true
      },
        extend: {
          colors:{
            'green':'#1DB954',
    
            'dark':'#121212',
            'light':'#282828',
            'lightest':'#ccc',
            'darkest':'#191414'
          }
        },
    
    },
    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    plugins: [],
  };