import React from "react";
import { Container } from "@mui/material";

export const Layout: React.FC = ({ children }) => {
  return <Container disableGutters>{children}</Container>;
};
