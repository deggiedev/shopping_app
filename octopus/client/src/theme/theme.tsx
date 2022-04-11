import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Gotham", "helvetica", "arial", "sans-serif"].join(","),
    h2: {
      lineHeight: "1.25",
      fontSize: "30px",
      fontWeight: 900,
    },
    h6: {
      lineHeight: "1.25",
      fontWeight: 700,
      letterSpacing: 1,
    },
  },
  palette: {
    primary: { main: "#050f2a" },
    secondary: { main: "#01193b" },
    info: { main: "#607695" },
    success: {
      main: "#fb1a7b",
      light: "#ff75b4",
    },
  },
});