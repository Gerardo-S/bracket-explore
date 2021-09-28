import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageButton from "../pageButton";

export default function NavContent(props) {
  const { dataArray, theme } = props;
  const navArray = dataArray.slice(0, -1);
  const navItems = navArray.map((text) => {
    return (
      <Typography
        key={text}
        variant="h6"
        component="div"
        sx={{ mr: "32px", color: theme.palette.primary.main }}
      >
        {text}
      </Typography>
    );
  });

  return (
    <Box sx={{ display: "flex", ml: 2, pl: 2 }}>
      {navItems}
      <PageButton btnText={dataArray[dataArray.length - 1]} />
    </Box>
  );
}
