import React from "react";
import { Box, Container } from "@mui/material";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box sx={{ background: "#050f2a" }}>
      <Container sx={{ maxWidth: "lg" }} disableGutters>
        {children}
      </Container>
    </Box>
  );
};
