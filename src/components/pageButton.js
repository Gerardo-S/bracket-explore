import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

export default function PageButton({ btnText, btnColor, btnWidth }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        color: theme.palette.primary.main,
        mr: 2,
        height: "40px",
        width: btnWidth,
        padding: 2,
        backgroundColor: btnColor,
        "&:hover": {
          backgroundColor: "#6188c7",
          borderColor: "#0062cc",
          boxShadow: "none",
        },
      }}
    >
      {btnText}
    </Button>
  );
}
