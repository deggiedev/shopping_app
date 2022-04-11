import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string | null;
  subTitle?: string | null;
}
export const ProductTitle: React.FC<Props> = ({ title, subTitle }) => {
  const has = {
    subTitle: !!subTitle,
  };

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
        background: `#01193b`,
      }}
    >
      <Typography
        sx={{
          lineHeight: "1.25",
          fontSize: "30px",
          fontWeight: 900,
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
            color: "#335689",
          }}
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  );
};
