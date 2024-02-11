import { createTheme, responsiveFontSizes } from "@mui/material";
import { green, pink } from "@mui/material/colors";

export let theme = createTheme({
  palette: {
    primary: {
      main: green[600],
      light: green[400],
      dark: green[800],
    },
    secondary:{
      light: pink[500],
      main:pink[700],
      dark:pink[800]
    }
  },
});
theme = responsiveFontSizes(theme);
