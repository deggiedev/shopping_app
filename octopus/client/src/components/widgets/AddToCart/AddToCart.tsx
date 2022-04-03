import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { QuantityActions } from "../QuantityActions";

interface Props {
  price: string;
}
export const AddToCart: React.FC<Props> = ({ price }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        color: "white",
        background: "#050f2a",
      }}
    >
      <Box
        sx={{ marginX: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center"}}
      >
        <Typography
          sx={{
            lineHeight: "1.25",
            fontSize: "30px",
            fontFamily: "Gotham",
            fontWeight: 900,
            color: "white",
          }}
        >
          {price}
        </Typography>
        <div data-testid="quantity-actions">
          <QuantityActions />
        </div>
      </Box>
      <Button
        size="large"
        sx={{
          textTransform: "none",
          background: "#fb1a7b",
          marginX: 2.5,
          marginTop: 2,
          lineHeight: "1.25",
          fontSize: "24px",
          fontFamily: "Gotham",
          fontWeight: 900,
          color: "white",
        }}
        variant="contained"
      >
        Add to cart
      </Button>
    </Box>
  );
};