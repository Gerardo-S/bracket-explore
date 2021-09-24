import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

export default function NavButton({ btnText }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        color: theme.palette.primary.main,
        mr: 2,
        height: "40px",
        width: "141px",
        padding: 2,
        backgroundColor: "#0063cc",
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
