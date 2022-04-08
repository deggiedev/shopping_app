import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";
import { AddMinus } from "../../common/AddMinusButton";

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
  const { palette } = theme;
  return (
    <Box data-testid="quantity-actions">
      <Typography sx={{ textAlign: "center", color: palette.text.blue }}>
        QTY
      </Typography>
      <Box display="flex" justifyContent="space-evenly">
        <AddMinus arial-label="minus" variant="minus" handleClick={handleDecrease}/>
        <Typography
          data-testid="quantity"
          sx={{
            lineHeight: "1.25",
            fontSize: "30px",
            fontFamily: "Gotham",
            fontWeight: 900,
            color: palette.text.white,
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
