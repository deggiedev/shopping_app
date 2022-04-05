import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
      <Typography sx={{ textAlign: "center", color: "#345689" }}>
        QTY
      </Typography>
      <Box display="flex" justifyContent="space-evenly">
        <Button
          onClick={handleDecrease}
          aria-label="minus-button"
          disableRipple
          size="small"
          variant="contained"
          sx={{
            textTransform: "none",
            background: "#1a2a43",
            "&:hover": { background: "#1a2a43" },
            color: "white",
            marginRight: 1,
            minWidth: 0,
          }}
        >
          <RemoveIcon sx={{ fontSize: "large" }} />
        </Button>
       
        <Typography
          data-testid="quantity"
          sx={{
            lineHeight: "1.25",
            fontSize: "30px",
            fontFamily: "Gotham",
            fontWeight: 900,
            color: "white",
            minWidth: '45px',
            textAlign: "center",
          }}
        >
          {quantity}
        </Typography>
      
        <Button
          onClick={handleIncrease}
          aria-label="plus-button"
          size="small"
          variant="contained"
          sx={{
            textTransform: "none",
            background: "#36598d",
            "&:hover": { background: "#36598d" },
            color: "white",
            marginLeft: 1,
            minWidth: 0,
          }}
        >
          <AddIcon sx={{ fontSize: "large" }} />
        </Button>
      </Box>
    </Box>
  );
};
