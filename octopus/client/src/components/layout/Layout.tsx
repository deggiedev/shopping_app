import React from "react";
import { Box, Container } from "@mui/material";
import { theme } from "../../theme";

export const Layout: React.FC = ({ children }) => {
  const { palette } = theme;
  return (
    <Box sx={{ background: palette.primary.main }}>
      <Container sx={{ maxWidth: "lg" }} disableGutters>
        {children}
      </Container>
    </Box>
  );
};
