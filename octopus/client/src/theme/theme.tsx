import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [["Gotham", "helvetica", "arial", "sans-serif"]].join(","),
  },
  palette: {
    primary: { main: "#050f2a" },
    secondary: { main: "#01193b" },
    info: { main: "#607695" },
  },
});
