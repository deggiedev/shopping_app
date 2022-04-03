import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  subTitle?: string;
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
        paddingTop: 4,
        paddingBottom: 2,
        paddingX: 1.5,
        background: `#01193b`,
      }}
    >
      <Typography
        sx={{
          lineHeight: "1.25",
          fontSize: "30px",
          fontFamily: "Gotham",
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
            fontFamily: "Gotham",
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

