import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';


// The purpose of this code is to create a function that can be used to generate tokens based on a given mode, use tailwind shade to create color shades, pass in mode to pass in color mode. shft +alt to select certain words
export const tokens = (mode) =>({
    ...(mode === 'light' 
    ?{
white: {
    100: "#f2f2f2",
    200: "#f3f3f3",
    300: "#f4f4f4",
    400: "#f5f5f5",
    500: "#f1f1f1",
    600: "#f6f6f6",
    700: "#f7f7f7",
    800: "#f8f8f8",
    900: "#ffffff"
},
red: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f"
},
gray: {
    100: "#e7f5fb",
    200: "#cfebf7",
    300: "#b7e2f3",
    400: "#9fd8ef",
    500: "#87ceeb",
    600: "#6ca5bc",
    700: "#517c8d",
    800: "#36525e",
    900: "#1b292f"
},
pink: {
    100: "#ecd2fc",
    200: "#d9a6f9",
    300: "#c679f6",
    400: "#b34df3",
    500: "#a020f0",
    600: "#801ac0",
    700: "#601390",
    800: "#400d60",
    900: "#200630"
},
purple: {
    100: "#e6d8ff",
    200: "#ceb1ff",
    300: "#b58bff",
    400: "#9d64ff",
    500: "#843dff",
    600: "#6a31cc",
    700: "#4f2599",
    800: "#351866",
    900: "#1a0c33"
},
indigo: {
    100: "#dcdeff",
    200: "#b8bdff",
    300: "#959cff",
    400: "#717bff",
    500: "#4e5aff",
    600: "#3e48cc",
    700: "#2f3699",
    800: "#1f2466",
    900: "#101233"
}
} :{
    white: {
        200: "#f2f2f2",
        300: "#f3f3f3",
        400: "#f4f4f4",
        500: "#f5f5f5",
        100: "#f1f1f1",
        600: "#f6f6f6",
        700: "#f7f7f7",
        800: "#f8f8f8",
        900: "#ffffff",
    },
    red: {
         100: "#2c100f",
         200: "#58201e",
         300: "#832f2c",
         400: "#af3f3b",
         500: "#db4f4a",
         600: "#e2726e",
         700: "#e99592",
         800: "#f1b9b7",
         900: "#f8dcdb",
    },
    gray: {
        100: "#1b292f",
        200: "#36525e",
        300: "#517c8d",
        400: "#6ca5bc",
        500: "#87ceeb",
        600: "#9fd8ef",
        700: "#b7e2f3",
        800: "#cfebf7",
        900: "#e7f5fb",
    },
    pink: {
         100: "#200630",
         200: "#400d60",
         300: "#601390",
         400: "#801ac0",
         500: "#a020f0",
         600: "#b34df3",
         700: "#c679f6",
         800: "#d9a6f9",
         900: "#ecd2fc",
    },
    purple: {
         100: "#1a0c33",
         200: "#351866",
         300: "#4f2599",
         400: "#6a31cc",
         500: "#843dff",
         600: "#9d64ff",
         700: "#b58bff",
         800: "#ceb1ff",
         900: "#e6d8ff",
    },
    indigo: {
         100: "#101233",
         200: "#1f2466",
         300: "#2f3699",
         400: "#3e48cc",
         500: "#4e5aff",
         600: "#717bff",
         700: "#959cff",
         800: "#b8bdff",
         900: "#dcdeff",
    }
}) 
})

export const themes = createTheme({
    breakpoints:{
        values:{
            mobile: 430,
            tablet:480,
            laptop:1024,
        }
    }
});

//material ui theme settings, setup mui to use the colors
export const themeSettings = (mode)=>{
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...( mode === 'light' 
            ?{
                // primary: {
                //     main :colors.white[900]
                // },
                // secondary: {
                //     main: colors.white[300]
                // },
                // neutral: {
                //     dark:colors.gray[700],
                //     main:colors.gray[500],
                //     light:colors.gray[100],
                // },
                background:{
                    default: colors.white[900]
                }
            } :{
                // primary: {
                //     main :colors.white[500]
                // },
                // secondary: {
                //     main: colors.white[300]
                // },
                // neutral: {
                //     dark:colors.gray[700],
                //     main:colors.gray[500],
                //     light:colors.gray[100],
                // },
                background:{
                    default: colors.white[500]
                } 
            })
        }
    }
}

//react context for color mode

export const ColorModeContext = createContext ({
    toggleMode: ()=>{},
    //allow us to change the color
})

export const useMode =()=>{
    const [mode, setMode] = useState("light")
    const colorMode = useMemo(
        ()=>({
            colorMode: ()=>
             setMode((prev)=>(prev ==="light" ? "dark ": "light"))
        }),[]
    )
    const theme = useMemo(()=> createTheme(themeSettings (mode)),[mode]);
    return [theme, themes, colorMode]
}

