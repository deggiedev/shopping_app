import { createTheme } from "@mui/system";

export const theme = createTheme({
  palette: {
    background: {
      primary: "#fb1a7b",
      secondary: "#ff75b4",
      blue: "#01193b",
      darkBlue: "#050f2a",
      middleBlue: "#1a2a43",
      lightBlue: "#36598d",
    },
    text: {
      white: "#fff",
      blue: "#335689",
      grey: "#607695",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

});
