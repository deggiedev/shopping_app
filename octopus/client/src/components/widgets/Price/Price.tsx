import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  price: { pounds: string; pence: string };
}
export const Price: React.FC<Props> = ({ price }) => {
  const { palette } = theme;
  return (
    <Typography
      sx={{
        lineHeight: "1.25",
        fontSize: "40px",
        fontFamily: "Gotham",
        fontWeight: 900,
        color: palette.text.white,
        marginTop: 2.5,
      }}
    >
      <Box display="flex">
        <Box>{price?.pounds}</Box>
        <Box sx={{ marginTop: 0.5 }} fontSize={"25px"}>
          {`.${price?.pence}`}
        </Box>
      </Box>
    </Typography>
  );
};
