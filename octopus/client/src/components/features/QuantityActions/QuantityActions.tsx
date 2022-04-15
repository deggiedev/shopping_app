import React from "react";
import { Box, Typography } from "@mui/material";
import { AddMinus } from "../../common";

interface Props {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

export const QuantityActions: React.FC<Props> = ({
  quantity,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <Box data-testid="quantity-actions">
      <Typography sx={{ textAlign: "center", color: "info.dark" }}>
        QTY
      </Typography>
      <Box display="flex" justifyContent="space-evenly">
        <AddMinus arial-label="minus" variant="minus" handleClick={handleDecrease}/>
        <Typography
          data-testid="quantity"
          sx={{
            lineHeight: "1.25",
            fontSize: "30px",
            fontWeight: 900,
            color: "white",
            minWidth: "40px",
            textAlign: "center",
          }}
        >
          {quantity}
        </Typography>
        <AddMinus arial-label="add" variant="add" handleClick={handleIncrease}/>
      </Box>
    </Box>
  );
};
