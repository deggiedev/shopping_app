import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  title: string | null;
  subTitle?: string | null;
}
export const ProductTitle: React.FC<Props> = ({ title, subTitle }) => {
  const has = {
    subTitle: !!subTitle,
  };
  const { palette } = theme;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alingContent: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 2,
        paddingX: 1.5,
        background: palette.secondary.main,
      }}
    >
      <Typography
        variant={"h3"}
        sx={{
          marginLeft: 3,
          color: "white",
        }}
      >
        {title}
      </Typography>
      {has.subTitle && (
        <Typography
          variant="subtitle1"
          sx={{
            marginLeft: 3,
            marginTop: 1,
            color: "info.dark",
          }}
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  );
};
