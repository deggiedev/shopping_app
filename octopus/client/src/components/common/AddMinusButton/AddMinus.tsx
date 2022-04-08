import React from "react";
import { Button } from "@mui/material";
import { theme } from "../../../theme";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Props {
  variant: string;
  handleClick: () => void;
}

export const AddMinus: React.FC<Props> = ({ variant, handleClick }) => {
  const { palette } = theme;
  const is = {
    addButton: variant === "add",
    minusButton: variant === "minus",
  };

  return (
    <Button
      aria-label={is.addButton ? "add" : "minus"}
      onClick={handleClick}
      size="small"
      variant="contained"
      sx={{
        textTransform: "none",
        background: [is.addButton ? palette.background.lightBlue : palette.background.middleBlue],
        "&:hover": { background: palette.background.lightBlue },
        color: palette.text.white,
        minWidth: 0,
      }}
    >
      {is.minusButton && <RemoveIcon sx={{ fontSize: "large" }}  />}
      {is.addButton && <AddIcon sx={{ fontSize: "large" }} />}
    </Button>
  );
};
