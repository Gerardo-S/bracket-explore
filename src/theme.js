import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { fontWeight } from "@mui/system";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 477,
      md: 983,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 1)",
      mainGradient:
        "linear-gradient(90deg, rgba(0,0,0) 20%, rgba(0,0,0,0) 100%)",
      // "linear-gradient(to  top right, black 45%, white )",
      sencondaryGradient:
        "linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%)",
    },
    secondary: {
      main: "rgba(0, 0, 0, 1)",
    },
    productLink: {
      main: "rgba(246, 89, 40, 1)",
    },
    btnPrimary: {
      main: "#2885F6",
    },

    error: {
      main: red.A400,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 56,
    },
    subtitle3: {
      fontSize: 18,
      fontWeight: 400,
    },
  },
});

export default theme;
