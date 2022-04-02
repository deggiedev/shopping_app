import React from "react";
import { Container } from "@mui/material";

export const Layout: React.FC = ({ children }) => {
  return <Container sx={{ padding: 0 }}>{children}</Container>;
};
