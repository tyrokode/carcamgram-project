import { createTheme } from '@mui/material/styles';


export const shades = {
    white: {
        100: "#fbfcfd",
        200: "#f8fafb",
        300: "#f4f7f8",
        400: "#f1f5f6",
        500: "#edf2f4",
        600: "#bec2c3",
        700: "#8e9192",
        800: "#5f6162",
        900: "#2f3031"
    },
    
    red: {
        100: "#fcd3d8",
        200: "#f9a7b1",
        300: "#f57b8a",
        400: "#f24f63",
        500: "#ef233c",
        600: "#bf1c30",
        700: "#8f1524",
        800: "#600e18",
        900: "#30070c"
    },
    
    black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
},
};

export const theme = createTheme ({
    palette: {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },

    typography: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 11,

        h1: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 48,
        },

        h2: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 36,
        },

        h3: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 20,
        },

        h4: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 14,
        }
    }
    
});