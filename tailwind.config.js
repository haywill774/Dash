/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'lg':{'min':'1200px', 'max':'1400px'},
      'sm': {'min':'501px', 'max':'800px'},
      'tm':{'min':'451px', 'max':'500px'},
      'xs':{ 'max':'450px'},
       
        
    },
    extend: {
      // screens:{
      //   'xs':{'raw':'(max-height:930px)'}
      // }
    },
  },
  plugins: [],
})

