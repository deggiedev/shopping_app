import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  price: { pounds: string; pence: string };
}
export const Price: React.FC<Props> = ({ price }) => {
  return (
    <Typography
      sx={{
        lineHeight: "1.25",
        fontSize: "40px",
        fontFamily: "Gotham",
        fontWeight: 900,
        color: "white",
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
