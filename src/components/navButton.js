import * as React from "react";
import Button from "@mui/material/Button";

export default function NavButton({ btnText }) {
  return (
    <Button
      color="inherit"
      variant="contained"
      sx={{
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
