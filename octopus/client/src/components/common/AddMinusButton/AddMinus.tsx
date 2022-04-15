import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { theme } from "../../../theme";

interface Props {
  variant: string;
  handleClick: () => void;
}

export const AddMinus: React.FC<Props> = ({ variant, handleClick }) => {
  const is = {
    addButton: variant === "add",
    minusButton: variant === "minus",
  };
  const { palette } = theme;

  return (
    <Button
      aria-label={is.addButton ? "add" : "minus"}
      onClick={handleClick}
      size="small"
      variant="contained"
      sx={{
        textTransform: "none",
        background: [
          is.addButton ? palette.secondary.light : palette.primary.light,
        ],
        "&:hover": { background: palette.secondary.light },
        color: "white",
        minWidth: 0,
      }}
    >
      {is.minusButton && <RemoveIcon sx={{ fontSize: "large" }} />}
      {is.addButton && <AddIcon sx={{ fontSize: "large" }} />}
    </Button>
  );
};
