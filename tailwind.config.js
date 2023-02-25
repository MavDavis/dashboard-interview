module.exports = {
    purge: {
        content: ["./public/**/*.html", "./src/**/*.vue"],
    },
    darkmode: false,
    theme: {
      screens: {
        'sm': '576px',
  
        'md': '960px',
  
        'lg': '1440px',
      },
      container:{
        center:true
      },
        extend: {
          width: {
            40: '40%',
            20: '20%',
            25:'25%',
            15:'15%',
            10:'10%',
            50: '50%',
           30:'30%'
          },
          colors:{
            'purple-light':'#c6c2de',
            'purple-dim':'#D9D5EC',
            'purple-lighter':'#F4F2FF'
          }
        },
    
    },
  
    plugins: [],
  };