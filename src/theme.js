import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 983,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 1)",
      mainGradient: "linear-gradient(to  top right, black 50%, white )",
      sencondaryGradient:
        "linear-gradient(to  bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))",
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
});

export default theme;
