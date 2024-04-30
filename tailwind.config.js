/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
      function({addUtilities}){
        const newUtilities ={
          ".scrollbsr-thin":{
            scrollbarWidth:"thin",
            scrollbarcolor:"rgb(31 29 29) white"
          },
          ".scrollbar-webkit":{
            "&::-webkit-scrollbar":{
              width:"8px"
            },
            "&::-webkit-scrollbar-track":{
              background:"white"
            },
            "&::-webkit-scrollbar-thumb":{
              backgroundColor:"rgb(31 41 55) white",
              borderRadius:"20px",
              border:"1px solid white"
            },
          }
        }
        addUtilities(newUtilities, ["responsive","hover"])
      }
    ],
  }