import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Gotham", "helvetica", "arial", "sans-serif"].join(","),
    h2: {
      lineHeight: "1.25",
      fontSize: "36px",
      fontWeight: 900,
    },
    h3: {
      lineHeight: "1.25",
      letterSpacing: 1,
      fontSize: "32px",
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
    info: { main: "#607695", dark: "#335689" },
    success: {
      main: "#fb1a7b",
      light: "#ff75b4",
    },
  },
});
